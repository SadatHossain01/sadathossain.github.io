import type { Blog } from './types';
import adaptive_md from '../md/blogs/caa_blog.md?raw';

const items: Array<Blog> = [
	{
		banner:
			'https://images.squarespace-cdn.com/content/v1/5f8de2b5eb427172886cea17/99e035e6-f7d6-4064-95a6-e7c44c77139e/%5BNEURIPS2024%5D+LatinX+in+AI+Workshop+%40+NeurIPS+2024.png',
		color: '#ff0000',
		slug: 'caa',
		name: 'Advancing Adversarial Attacks in Tabular Machine Learning: A Deep Dive into CAA',
		shortDescription:
			'Review of the NeurIPS2024 paper "Advancing Adversarial Attacks in Tabular Machine Learning: A Deep Dive into CAA"',
		type: 'Paper Review',
		date: new Date('2025-01-06'),
		content: adaptive_md
	}
];

const title = 'Blogs';

const BlogsData = { items, title };

export default BlogsData;
