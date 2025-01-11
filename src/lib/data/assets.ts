import { base } from '$app/paths';
import Markdown from '$lib/components/common/markdown/markdown.svelte';

const url = (file: string) => `${base}/logos/${file}`;

const asset = (lightFilename: string, darkFilename = lightFilename) => {
	return { light: url(lightFilename), dark: url(darkFilename) };
};

const Assets = {
	Bash: asset('bash.svg'),
	C: asset('c.svg'),
	Cpp: asset('cpp.svg'),
	Numpy: asset('numpy.svg'),
	Pandas: asset('pandas.svg'),
	Scikitlearn: asset('scikit-learn.svg'),
	Selenium: asset('selenium.svg'),
	Docker: asset('docker.svg'),
	TypeScript: asset('ts.png'),
	Python: asset('python.png'),
	NodeJs: asset('node.png'),
	Svelte: asset('svelte.svg'),
	ExpressJs: asset('express.png'),
	JavaScript: asset('js.png'),
	Java: asset('java.png'),
	PyTorch: asset('pytorch.png'),
	Oracle: asset('oracle.svg'),
	Postman: asset('postman.png'),
	PostgreSQL: asset('postgres.png'),
	Unknown: asset('no-img.svg'),
	Tailwind: asset('tailwind.svg'),
	HTML: asset('html.svg'),
	Premiere: asset('premiere.svg'),
	CSS: asset('css.svg'),
	Transformers: asset('transformers.svg'),
	vLLM: asset('vllm.png'),
	TeX: asset('tex.png'),
	Markdown: asset('markdown-mark.svg'),
	Git: asset('git.svg'),
	Github: asset('github-mark.svg', 'github-mark-white.svg'),
	GithubActions: asset('github-actions-black.svg', 'github-actions-blue.png')
};

export default Assets;
