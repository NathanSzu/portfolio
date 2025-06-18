import { Icons } from '@/components/icons';
import { HomeIcon } from 'lucide-react';

export const DATA = {
  name: 'Nathan Szurek',
  initials: 'NS',
  url: 'https://nathanszurek.com/',
  location: 'Ramsey, MN',
  locationLink: 'https://maps.app.goo.gl/wego1MM8MfASYwwYA',
  description:
    'Developer, QA Automation Engineer, and Open Source Contributor with a passion for building smart, reliable test automation and software solutions.',
  summary:
    "I love building and testing unique things and I don't shy away from a challenge. I'm comfortable working on my own or collaborating with developers, product owners, and others in an agile setting. With a background in development, QA, and customer service, I focus on shipping features that are both high-quality and genuinely useful.",
  avatarUrl: '/me.jfif',
  skills: [
    'JavaScript',
    'Typescript',
    'SQL',
    'Java',
    'C#',
    'Cypress',
    'Playwright',
    'Selenium',
    'Mocha',
    'Postman',
    'React',
    'Next.js',
    'Node.js',
    'Firebase',
    'Cloud Firestore',
    'Bootstrap',
    'Git',
    'GitHub',
    'Azure DevOps',
    'JIRA',
    'Agile',
    'Scrum',
    'Kanban',
  ],
  aiTools: ['Github Copilot', 'Cursor AI', 'ChatGPT'],
  navbar: [{ href: '/', icon: HomeIcon, label: 'Home' }],
  contact: {
    social: {
      GitHub: {
        name: 'GitHub',
        url: 'https://github.com/NathanSzu',
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/nathanszurek/',
        icon: Icons.linkedin,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: 'Sovos Compliance',
      href: 'https://sovos.com/',
      badges: [],
      location: 'Remote',
      title: 'Quality Assurance Engineer',
      logoUrl: '/sovos.jfif',
      start: 'August 2021',
      end: 'Current',
      description:
        'Authored and maintained UI, API, and E2E test automation using Cypress/Mocha in Azure DevOps, enhancing regression coverage and early bug detection. Performed manual testing on a complex tax compliance app, logging issues and test cases in Jira. Created internal documentation to improve automation reliability. Validated APIs with Postman and used SQL for data verification. Collaborated on agile Scrum/Kanban teams to deliver high-quality features and supported smooth bi-weekly releases with automated smoke tests.',
    },
    {
      company: '2U',
      badges: [],
      href: 'https://2u.com/',
      location: 'Remote',
      title: 'Technology Tutor',
      logoUrl: '/2u.jfif',
      start: 'November 2020',
      end: 'September 2022',
      description:
        'Mentored full stack web development students in a remote university boot camp, covering topics like JavaScript, React, Node.js, SQL/NoSQL, APIs, and Cypress. Led one-on-one tutorials with consistently strong student feedback. Built a curated library of educational resources and used automation to streamline session scheduling. Excelled in a self-directed role, collaborating across teams to support student success and program goals.',
    },
    {
      company: 'Atlas Pet Supply',
      href: 'https://atlaspet.net/',
      badges: [],
      location: 'Blaine, MN',
      title: 'Web Developer',
      logoUrl: '/atlaspet.jfif',
      start: 'November 2017',
      end: 'August 2021',
      description:
        'Developed and maintained dynamic web applications using React, JavaScript, and Firebase, including an e-commerce site and employee training portal. Built automated E2E regression tests with Playwright to support reliable releases. Collaborated with stakeholders to deliver impactful features and streamline staff onboarding and management. Led the rollout of a new POS system across physical locations and provided ongoing technical support. Also designed and installed secure network infrastructure to support business operations.',
    },
  ],
  education: [
    {
      school: 'University of Minnesota',
      href: 'https://twin-cities.umn.edu/',
      degree: 'Full Stack Web Development Certificate',
      logoUrl: '/UofM.jfif',
      start: '2020',
      end: '2020',
    },
    {
      school: 'North Dakota State University',
      href: 'https://www.ndsu.edu/',
      degree: "Bachelor's Degree of Science in English, Minor in Communication",
      logoUrl: '/ndsu.jfif',
      start: '2010',
      end: '2015',
    },
  ],
  projects: [
    {
      title: 'Party Loot Tracker',
      href: 'https://partyloottracker.com/',
      dates: '2021 - Current',
      active: true,
      description:
        'Designed and launched a progressive web app with 750+ users to manage and search shared tabletop RPG inventories. Built with React, JavaScript, Bootstrap, and Firebase, featuring a serverless architecture with secure backend rules. Integrated Cypress for automated testing and connected external open-source APIs for content access. Added social features like item sharing, likes, and public compendiums to enhance user engagement.',
      technologies: ['React', 'JavaScript', 'Firebase', 'Cloud Firestore', 'Bootstrap', 'Cypress'],
      links: [
        {
          type: 'Github',
          href: 'https://github.com/NathanSzu/PartyLoot',
          icon: <Icons.globe className='size-3' />,
        },
      ],
      image: '',
      video: '/partyloot.webm',
    },
    {
      title: 'Atlas Pet Supply',
      href: 'https://atlaspet.net/',
      dates: '2017 - 2021',
      active: true,
      description:
        'Developed and maintained dynamic web applications using React, JavaScript, and Firebase, including an e-commerce site and employee training portal. Built automated E2E regression tests with Playwright to support reliable releases. Collaborated with stakeholders to deliver impactful features and streamline staff onboarding and management. Led the rollout of a new POS system across physical locations and provided ongoing technical support. Also designed and installed secure network infrastructure to support business operations.',
      technologies: ['React', 'JavaScript', 'Firebase', 'Cloud Firestore', 'Bootstrap', 'Cypress'],
      links: [
        {
          type: 'Website',
          href: 'https://atlaspet.net/',
          icon: <Icons.globe className='size-3' />,
        },
      ],
      image: '',
      video: '/atlas.webm',
    },
  ]
} as const;
