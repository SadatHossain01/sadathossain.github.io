import { base } from '$app/paths';

export const processURL = (url: string, absolute = false) => {
	console.log('processURL', url, absolute);
	if (absolute) {
		return url;
	} else {
		return `${base}/logos/${url}`;
	}
};

export const asset = (
	lightFilename: string,
	lightabsolute = false,
	darkFilename = lightFilename,
	darkabsolute = lightabsolute
) => {
	return {
		light: processURL(lightFilename, lightabsolute),
		dark: processURL(darkFilename, darkabsolute)
	};
};

const Assets = {
	Bash: asset('bash.svg'),
	C: asset('c.svg'),
	Cpp: asset('cpp.svg'),
	DxBall: asset('dxball2_logo.png'),
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
	OpenGL: asset('opengl.png'),
	Oracle: asset('oracle.svg'),
	Postman: asset('postman.png'),
	PostgreSQL: asset('postgres.png'),
	Unknown: asset('no-img.svg'),
	Exploremate: asset('exploremate.png'),
	TaskFlow: asset('taskflow.png'),
	Tailwind: asset('tailwind.svg'),
	HTML: asset('html.svg'),
	Premiere: asset('premiere.svg'),
	CSS: asset('css.svg'),
	Transformers: asset('transformers.svg'),
	vLLM: asset('vllm.png'),
	TeX: asset('tex.png'),
	Markdown: asset('markdown-mark.svg'),
	Git: asset('git.svg'),
	Github: asset('github-mark.svg', false, 'github-mark-white.svg', false),
	GithubActions: asset('github-actions-black.svg', false, 'github-actions-blue.png', false),
	SHKSC: asset('shksc.png'),
	NDC: asset('ndc.png'),
	BUET: asset('buet.svg')
};

export default Assets;
