import BaseData from './base';
import { getSkills } from './skills';
import type { Skill } from './types';

const title = 'Home';

const hero: {
	title: string;
	description: string;
	links: Array<{ label: string; href: string; icon: `i-carbon-${string}` }>;
} = {
	title: `${BaseData.fullName}`,
	description:
		'I am a passionate and curious learner. Beyond my academic pursuits, I have actively explored diverse areas of Computer Science, including competitive programming, hackathons, and deep learning competitions. I am eager to embrace opportunities that enable me to apply my problem-solving skills and curiosity to address real-world challenges while further expanding my expertise.',
	links: [
		{ label: 'GitHub', href: 'https://github.com/SadatHossain01', icon: 'i-carbon-logo-github' },
		{
			label: 'LinkedIn',
			href: 'https://www.linkedin.com/in/SadatHossain01',
			icon: 'i-carbon-logo-linkedin'
		},
		{
			label: 'YouTube',
			href: 'https://www.youtube.com/@SadatHossain01',
			icon: 'i-carbon-logo-youtube'
		},
		{
			label: 'Facebook',
			href: 'https://www.facebook.com/sadathossain01',
			icon: 'i-carbon-logo-facebook'
		},
		{
			label: 'Instagram',
			href: 'https://www.instagram.com/sadathossain01',
			icon: 'i-carbon-logo-instagram'
		},
		{ label: 'X', href: 'https://x.com/SadatHossain01', icon: 'i-carbon-logo-x' },
		{ label: 'Primary Mail', href: 'mailto:sadatho2014@gmail.com', icon: 'i-carbon-at' },
		{ label: 'Secondary Mail', href: 'mailto:sadatdbt@gmail.com', icon: 'i-carbon-at' }
	]
};

const carousel: Array<Skill> = getSkills();

const HomeData = {
	title,
	hero,
	carousel
};

export default HomeData;
