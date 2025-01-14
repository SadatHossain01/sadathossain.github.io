<script lang="ts">
	import BasePage from '$lib/components/common/base-page/base-page.svelte';
	import EmptyResult from '$lib/components/common/empty-result/empty-result.svelte';
	import FancyBanner from '$lib/components/common/fancy-banner/fancy-banner.svelte';
	import Markdown from '$lib/components/common/markdown/markdown.svelte';
	import EmptyMarkdown from '$lib/components/common/markdown/empty-markdown.svelte';
	import H1 from '$lib/components/ui/typography/h1.svelte';
	import Muted from '$lib/components/ui/typography/muted.svelte';
	import type { Blog } from '$lib/data/types';
	import { mode } from 'mode-watcher';

	let { data }: { data: { item?: Blog } } = $props();
	let title = $derived(`${data?.item?.name ?? 'Not Found'} - Blog`);
	let timeline = $derived(
		data.item?.date
			? new Date(data.item.date).toLocaleDateString('en-US', {
					day: 'numeric',
					month: 'long',
					year: 'numeric'
				})
			: ''
	);
</script>

<BasePage {title}>
	{#if !data.item}
		<EmptyResult />
	{:else}
		<FancyBanner img={$mode === 'dark' ? data.item.banner.dark : data.item.banner.light}>
			<div class="flex w-full flex-col items-center justify-center gap-4">
				<H1>{data.item.name}</H1>
				<Muted>{data.item.type}</Muted>
				<Muted>{timeline}</Muted>
			</div>
		</FancyBanner>

		<div class="container mx-auto px-4 py-8">
			<div class="flex flex-col gap-8">
				{#if data.item.content}
					<Markdown content={data.item.content} />
				{:else}
					<EmptyMarkdown></EmptyMarkdown>
				{/if}
			</div>
		</div>
	{/if}
</BasePage>
