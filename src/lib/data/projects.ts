import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from './types';
import taskflow_md from '../md/projects/taskflow.md?raw';
import exploremate_md from '../md/projects/exploremate.md?raw';
import wazuh_md from '../md/projects/wazuh.md?raw';
import dxball_md from '../md/projects/dxball.md?raw';
import fm_md from '../md/projects/fm.md?raw';
import skywatch_md from '../md/projects/skywatch.md?raw';
import mips_md from '../md/projects/mips.md?raw';

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
		slug: 'harmony',
		color: '#ff3e00',
		description:
			'Harmony is a social network for students to collaborate each other. It is a place where students can share their knowledge and experience and also can discuss the topics that they are interested in. We expect Harmony to be the hub of the students’ academic enthusiasm and excellence. Features include real-time learning resource management, chat, voting, and file sharing.',
		shortDescription:
			'Learning Management Platform for students to collaborate and share knowledge.',
		links: [
			{
				to: 'https://github.com/risenfromashes/harmony-web',
				label: 'GitHub'
			},
			{
				to: 'https://github.com/risenfromashes/harmony-server',
				label: 'Harmony Server'
			}
		],
		logo: Assets.Harmony,
		name: 'Harmony',
		period: {
			from: new Date(2022, 8)
		},
		skills: getSkills('svelte', 'cpp', 'tailwind', 'postgres'),
		type: 'Web App'
	},
	{
		slug: 'fm-2021',
		color: '#ff3e00',
		description: fm_md,
		shortDescription:
			'Desktop application for football player management using JavaFX, featuring over 16000 real players.',
		links: [
			{
				to: 'https://github.com/SadatHossain01/football-manager-2021',
				label: 'GitHub'
			}
		],
		logo: Assets.FootballManager,
		name: 'Football Manager 2021',
		period: {
			from: new Date(2021, 6)
		},
		skills: getSkills('java', 'javafx', 'BeautifulSoup', 'python'),
		type: 'Desktop App'
	},
	{
		slug: 'dxball-remake',
		color: '#ff3e00',
		description: dxball_md,
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
		skills: getSkills('c', 'cpp', 'opengl'),
		type: 'Game'
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
		slug: 'wazuh-exploration',
		color: '#ff3e00',
		description: wazuh_md,
		shortDescription: 'Security information and event management system exploration',
		links: [
			{
				to: 'https://www.youtube.com/embed/Ndw6Fwi2i3w',
				label: 'Video Demo'
			},
			{
				to: 'https://drive.google.com/file/d/1dOlKLEFnIS4G8Gbm7_jTdB1oMcLLxnXX/view?usp=sharing',
				label: 'Report'
			}
		],
		logo: Assets.Wazuh,
		name: 'Wazuh Exploration',
		period: {
			from: new Date(2022, 1)
		},
		skills: getSkills('wazuh'),
		type: 'Security'
	},
	{
		slug: 'skywatch',
		color: '#ff3e00',
		description: skywatch_md,
		shortDescription:
			'Skywatch is a quadcopter built as a part of our microcontroller project for L3T1. It had features to perform aerial surveillance and capture images and videos.',
		links: [
			{
				to: 'https://youtu.be/yqDztcmO_Js',
				label: 'Video Demo'
			}
		],
		logo: Assets.Skywatch,
		name: 'SkyWatch',
		period: {
			from: new Date(2023, 1)
		},
		skills: getSkills('c', 'atmega32'),
		type: 'Hardware'
	},
	{
		slug: 'mips',
		color: '#ff3e00',
		description: mips_md,
		shortDescription:
			'8-bit MIPS Computer implementation with pipelining, featuring control path and data path design using digital logic components.',
		links: [
			{
				to: 'https://github.com/SadatHossain01/CSE306-ComputerArchitecture/tree/main/MIPS',
				label: 'GitHub'
			}
		],
		logo: Assets.MIPS,
		period: {
			from: new Date(2023, 1)
		},
		name: '8-bit MIPS Microprocessor',
		skills: getSkills('atmega32', 'c'),
		type: 'Hardware'
	}
];

const title = 'Projects';

const ProjectsData = { title, items };

export default ProjectsData;
