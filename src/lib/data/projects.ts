import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from './types';
import taskflow_md from '../md/projects/taskflow.md?raw';
import exploremate_md from '../md/projects/exploremate.md?raw';

const items: Array<Project> = [
	{
		slug: 'taskflow',
		color: '#ff3e00',
		description: taskflow_md,
		shortDescription:
			'Comprehensive task planner with AI Assistant for content generation. Features task progress tracking and collaboration capabilities.',
		links: [
			{
				to: 'https://youtu.be/HjtbtihGmaE',
				label: 'Video Demo'
			},
			{
				to: 'https://github.com/BRAINIAC2677/taskflow',
				label: 'Frontend Repo'
			},
			{
				to: 'https://github.com/BRAINIAC2677/TaskFlow-Backend',
				label: 'Backend Repo'
			},
			{
				to: 'https://taskflow-2c96.onrender.com/',
				label: 'Live Demo'
			}
		],
		logo: Assets.TaskFlow,
		name: 'TaskFlow',
		period: {
			from: new Date(2024, 1)
		},
		skills: getSkills('svelte', 'postgres', 'expressjs', 'sveltekit', 'tailwind', 'ts'),
		type: 'Web App'
	},
	{
		slug: 'exploremate',
		color: '#ff3e00',
		description: exploremate_md,
		shortDescription:
			'Traveler-friendly web app with travel plan suggestions. Implemented using SvelteKit and Express.js with various travel APIs.',
		links: [
			{
				to: 'https://youtu.be/aemQGtGdTa0',
				label: 'Video Demo'
			},
			{
				to: 'https://github.com/BRAINIAC2677/ExploreMate-Frontend',
				label: 'Frontend Repo'
			},
			{
				to: 'https://github.com/SadatHossain01/ExploreMate-Backend',
				label: 'Backend Repo'
			},
			{
				to: 'https://exploremate.vercel.app',
				label: 'Live Demo'
			}
		],
		logo: Assets.Exploremate,
		name: 'ExploreMate',
		period: {
			from: new Date(2023, 9)
		},
		skills: getSkills('svelte', 'postgres', 'expressjs', 'sveltekit', 'tailwind', 'ts'),
		type: 'Web App'
	},
	{
		slug: 'dxball-remake',
		color: '#ff3e00',
		description:
			'This is an attempt to remake the legendary DxBall 2 as a part of our Level-1 Term-1 project using only C programming language. The game is made using the iGraphics library, which is based on OpenGL and is used to draw 2D graphics.',
		shortDescription:
			'DxBall 2 remake using C programming language. Made with iGraphics library, based on OpenGL. Part of Level-1 Term-1 project.',
		links: [
			{
				to: 'https://github.com/SadatHossain01/DxBall-remake',
				label: 'GitHub'
			}
		],
		logo: Assets.DxBall,
		name: 'DxBall Remake',
		period: {
			from: new Date(2020, 2)
		},
		skills: getSkills('c', 'opengl'),
		type: 'Game',
		screenshots: [
			{
				label: 'Start Menu',
				src: 'https://github.com/SadatHossain01/DxBall-remake/raw/main/assets/JPEG/main-menu.jpg'
			},
			{
				label: 'New Game',
				src: 'https://github.com/SadatHossain01/DxBall-remake/raw/main/assets/JPEG/new.jpg'
			},
			{
				label: 'Instructions',
				src: 'https://github.com/SadatHossain01/DxBall-remake/raw/main/assets/JPEG/instruction.jpg'
			},
			{
				label: 'Gameplay',
				src: 'https://github.com/SadatHossain01/DxBall-remake/raw/main/assets/JPEG/gp2.jpg'
			},
			{
				label: 'Name Entry',
				src: 'https://github.com/SadatHossain01/DxBall-remake/raw/main/assets/JPEG/name.jpg'
			},
			{
				label: 'High Scores',
				src: 'https://github.com/SadatHossain01/DxBall-remake/raw/main/assets/JPEG/hs.jpg'
			},
			{
				label: 'Credits',
				src: 'https://github.com/SadatHossain01/DxBall-remake/raw/main/assets/JPEG/game_credits.jpg'
			}
		]
	},
	{
		slug: 'yet-another-c-compiler',
		color: '#ff3e00',
		description:
			'Implemented a partial compiler for C language in C++. Used flex and bison for frontend lexing and syntax analysis. Wrote backend targeting the Intel 8086 platform assembly.',
		shortDescription:
			'Implemented a partial compiler for C language in C++. Used flex and bison for frontend lexing and syntax analysis. Wrote backend targeting the Intel 8086 platform assembly.',
		links: [
			{
				to: 'https://github.com/SadatHossain01/CSE310-Compiler',
				label: 'GitHub'
			}
		],
		logo: Assets.Unknown,
		name: 'Yet Another C Compiler',
		period: {
			from: new Date(2023, 2)
		},
		skills: getSkills('cpp', 'flex', 'bison', 'assembly-8086'),
		type: 'Compiler'
	},
	{
		slug: 'harmony',
		color: '#ff3e00',
		description:
			'Full stack social media platform for students featuring real-time learning resource management, chat, voting, and file sharing.',
		shortDescription: 'Social media platform for student resource sharing',
		links: [
			{
				to: 'https://github.com/risenfromashes/harmony-web',
				label: 'GitHub'
			}
		],
		logo: Assets.Unknown,
		name: 'Harmony',
		period: {
			from: new Date(2022, 8)
		},
		skills: getSkills('svelte', 'tailwind', 'postgresql'),
		type: 'Web App'
	},
	// {
	// 	slug: 'wazuh-exploration',
	// 	color: '#ff3e00',
	// 	description:
	// 		'Explored open source XDR and SIEM solution, focusing on Malware Detection and File Integrity Module features.',
	// 	shortDescription: 'Security information and event management system exploration',
	// 	logo: Assets.Unknown,
	// 	name: 'Wazuh Exploration Project',
	// 	period: {
	// 		from: new Date(2022, 1)
	// 	},
	// 	skills: getSkills('security'),
	// 	type: 'Security'
	// },
	{
		slug: 'football-manager',
		color: '#ff3e00',
		description:
			'Desktop application for football player management using JavaFX. Features multithreaded socket programming and real-time player exchange system.',
		shortDescription: 'Football club management desktop application',
		links: [
			{
				to: 'https://github.com/SadatHossain01/football-manager-2021',
				label: 'GitHub'
			}
		],
		logo: Assets.Unknown,
		name: 'Football Club Manager',
		period: {
			from: new Date(2021, 6)
		},
		skills: getSkills('java', 'javafx'),
		type: 'Desktop App'
	}
];

const title = 'Projects';

const ProjectsData = { title, items };

export default ProjectsData;
