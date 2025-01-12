<script lang="ts">
	import { gfmHeadingId } from 'marked-gfm-heading-id';
	import { mangle } from 'marked-mangle';
	import { markedHighlight } from 'marked-highlight';
	import Prism from 'prismjs';
	import createSanitizer from 'dompurify';
	import { marked } from 'marked';
	import katex from 'katex';
	import 'katex/dist/katex.min.css';

	import 'prismjs/components/prism-typescript';
	import 'prismjs/components/prism-javascript';
	import 'prismjs/components/prism-css';
	import 'prismjs/components/prism-markdown';
	import 'prismjs/components/prism-python';
	import 'prismjs/components/prism-java';
	import 'prismjs/components/prism-c';
	import 'prismjs/components/prism-cpp';
	import 'prismjs/components/prism-rust';
	import 'prismjs/components/prism-go';
	import 'prismjs/themes/prism-tomorrow.css';
	import { onMount } from 'svelte';

	let container: HTMLDivElement;

	export let content: string;
	export let sanitize = true;

	const copyToClipboard = (code: string, button: HTMLButtonElement) => {
		navigator.clipboard
			.writeText(code)
			.then(() => {
				button.textContent = 'Copied!';
				setTimeout(() => (button.textContent = 'Copy'), 2000);
			})
			.catch((err) => {
				console.error('Failed to copy code: ', err);
				button.textContent = 'Error';
				setTimeout(() => (button.textContent = 'Copy'), 2000);
			});
	};

	const renderCodeBlocks = () => {
		const blocks = container.querySelectorAll('pre[class*="language-"]');
		blocks.forEach((block) => {
			const button = document.createElement('button');
			button.className = 'copy-button';
			button.textContent = 'Copy';
			button.onclick = () => {
				const code = block.querySelector('code')?.textContent || '';
				copyToClipboard(code, button);
			};
			(block as HTMLElement).style.position = 'relative';
			block.appendChild(button);
		});
	};

	onMount(async () => {
		marked.use(gfmHeadingId());
		marked.use(mangle());
		marked.use(
			markedHighlight({
				async: true,
				highlight: (code, lang) => {
					if (Prism.languages[lang]) {
						try {
							return Prism.highlight(code, Prism.languages[lang], lang);
						} catch (error) {
							console.error('Prism error:', error);
							return code;
						}
					}
					return code; // Return unhighlighted code if language isn't supported
				}
			})
		);

		// Configure sanitizer with allowed iframe attributes
		const sanitizer = createSanitizer(window);

		// Adjust sanitizer configuration for iframe support
		sanitizer.setConfig({
			ADD_TAGS: ['iframe'],
			ADD_ATTR: ['src', 'allow', 'allowfullscreen', 'width', 'height', 'frameborder']
		});

		if (window) {
			try {
				const inlinedMath = content.replace(/\$(.*?)\$/g, (match, math) => {
					try {
						return katex.renderToString(math, {
							throwOnError: false,
							displayMode: false,
							output: 'html'
						});
					} catch (error) {
						console.error('KaTeX error:', error);
						return match;
					}
				});

				const mathBlocks = inlinedMath.replace(/```math\n([\s\S]*?)```/g, (match, math) => {
					try {
						return katex.renderToString(math.trim(), {
							throwOnError: false,
							displayMode: true,
							output: 'html'
						});
					} catch (error) {
						console.error('KaTeX error:', error);
						return match;
					}
				});

				const parsed = await marked.parse(mathBlocks);
				container.innerHTML = sanitize ? sanitizer.sanitize(parsed) : parsed;
				Prism.highlightAllUnder(container);
				renderCodeBlocks();
			} catch (error) {
				console.error('Markdown parsing error:', error);
				container.innerHTML = '<p>Error rendering markdown content</p>';
			}
		}
	});
</script>

<div bind:this={container} class="markdown-container p-4"></div>
