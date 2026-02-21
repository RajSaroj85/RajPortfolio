import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'virtual assistant',
    title: 'GEN AI Virtual Assistant',
    tagline: 'Battleground for the Next Gen Developers.',
    subTagline: '“Hackathons, minithons, and daily contests that push your skills to the next level.”',
    image: 'https://picsum.photos/seed/prometrion_full/800/400', // Placeholder for full size screenshot
    demoLink: 'https://example.com/prometrion',
    repoLink: 'https://github.com/Raj saroj/prometrion',
    techStack: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Docker', 'AWS'],
    overview: 'Prometrion is a next-generation platform that unifies online and offline coding competitions into one seamless ecosystem. It enables companies, colleges, communities, and high-level users to host hackathons, minithons, and daily coding contests—complete with real-time coding collaboration, automated certificate generation, team management, and judging workflows.\n\nPrometrion aims to become the #1 global hub for competitive coding, where coders participate, host, learn, win, and build their identity.',
    problem: [
      'Offline events lack submission, judging & certificate systems',
      'Online platforms handle only partial workflows',
      'Participants do not have a unified coding identity',
      'Hosts struggle with event management',
      'Companies lack a transparent talent discovery pipeline',
      'There is no single platform that integrates the end-to-end hackathon lifecycle—online + offline.'
    ],
    solution: {
      intro: 'Prometrion consolidates the entire hackathon ecosystem:',
      features: [
        'Full Hackathons (Companies, Admin, Level 50+ users)',
        'Minithons (3-hour rapid contests by Level 30+ users)',
        'Daily Contests (Admin + Level 10+ users)',
        'Offline Hackathon Enrollment',
        'Real-Time Collaborative Code Editor',
        'Teams, Projects, & Submissions',
        'Judge Dashboards & Evaluation Tools',
        'Certificates (Gold, Silver, Participant)',
        'Leveling, Badges & Gamified User Growth'
      ],
      summary: 'Prometrion becomes a coder’s competition profile + portfolio + skill identity.'
    },
    market: [
      'India: 8,000+ colleges, 40,000+ annual tech fests',
      'Global hackathon industry growing rapidly',
      'No dominant hybrid (online + offline) platform',
      'Large unmet demand from colleges & companies',
      'Prometrion fills a crucial gap with an end-to-end solution.'
    ],
    vision: [
      '“The name every coder remembers when they think of hackathons, and coding competition.”',
      'A global competition universe where coders: Build real projects, Compete & win, Earn recognition, Get hired',
      'Prometrion aims to be the default platform for all coding competitions worldwide.'
    ]
  },
  {
    id: 'calculator',
    title: 'Calculator',
    tagline: 'Personal Calculator.',
    subTagline: '“A digital and profeesional calculator.”',
    image: 'https://picsum.photos/seed/calculator_full/800/400',
    demoLink: '#',
    repoLink: 'https://github.com/Raj saroj/calculator',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Gemini API', 'Vite'],
    overview: 'this Calculator is desgined by raj saroj and built with Html, CSS and javaScript. It mimics the look and feel of a physical student calculator, complete with paper textures, handwriting fonts, and "taped" photos.',
    problem: [
      'Standard calculator look too corporate and boring',
      'Hard to express personality in minimal themes',
      'Lack of interactive elements that feel organic'
    ],
    solution: {
      intro: 'A nostalgic, tactile design language:',
      features: [
        'Realistic lined paper background (CSS)',
        'Handwritten fonts (Patrick Hand, Permanent Marker)',
        'Sticky note chat assistant integration',
        'Dark mode "Dark Copy" aesthetic'
      ],
      summary: 'Design the digital calculator for persoal and real-time uses.'
    },
    market: [
      'Creative developers',
      'Designers looking for retro aesthetics',
      'Students wanting to stand out'
    ],
    vision: [
      'To provide a unique, memorable browsing experience that stands out in a sea of sterile minimalist websites.'
    ]
  },
  {
    id: 'Snake Game',
    title: 'Dragon Snake',
    tagline: 'DRS game.',
    subTagline: '“Leveraging the snake game for playing to all the wprld.”',
    image: 'https://picsum.photos/seed/snakegame_full/800/400',
    demoLink: '#',
    repoLink: 'https://rajsarojtsearch.github.io/Snake-Game/',
    techStack: ['React', 'Google GenAI SDK', 'Tailwind CSS', 'HTML5 Drag & Drop'],
    overview: 'An experimental application that uses Google\'s dragon snake games analyse images, playing the game, and count thier score  about visual content in real-time.',
    problem: [
      'Accessing advanced game vision models is often complex',
      'Lack of simple design  for dragon game for user to interact with vision models'
    ],
    solution: {
      intro: 'A straightforward interface for Dragon Snake Game:',
      features: [
        'Clicl to arrow buttons to play the game',
        'Real-time streaming responses',
        'Contextual playing based on game content'
      ],
      summary: 'Democratizing access to multimodal Game.'
    },
    market: [
      'Game enthusiasts',
      'Developers learning to interact with vision models',
      'Accessibility tools'
    ],
    vision: [
      'To explore the limits of what browser-based dragon snake game integrations can do with zero backend overhead.'
    ]
  }
];