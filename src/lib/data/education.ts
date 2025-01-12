import Assets from './assets';
import type { Education } from './types';

const title = 'Education';

const items: Array<Education> = [
	{
		degree: 'Bachelor of Science',
		description: '',
		location: 'Bangladesh',
		logo: Assets.BUET,
		name: 'BSc',
		organization: 'Bangladesh University of Engineering and Technology',
		period: { from: new Date(2020, 1, 22) },
		shortDescription: '',
		slug: 'bsc',
		subjects: ['DSA', 'Algorithm', 'Database', 'C', 'C++', 'Java', 'Network', 'Operating System']
	},
	{
		degree: 'Higher Secondary School Certificate',
		description: '',
		location: 'Bangladesh',
		logo: Assets.NDC,
		name: 'HSC',
		organization: 'Notre Dame College',
		period: { from: new Date(2017, 6, 1), to: new Date(2018, 11, 31) },
		shortDescription: '',
		slug: 'hsc',
		subjects: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English']
	},
	{
		degree: 'Secondary School Certificate',
		description: '',
		location: 'Bangladesh',
		logo: Assets.SHKSC,
		name: 'SSC',
		organization: 'Shamsul Haque Khan School & College',
		period: { from: new Date(2010, 0, 1), to: new Date(2017, 1, 28) },
		shortDescription: '',
		slug: 'ssc',
		subjects: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English']
	}
];

const EducationData = { title, items };

export default EducationData;
