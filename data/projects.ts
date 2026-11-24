import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'WebForge Studio',
    title: 'webforge studio platform',
    tagline: 'Battleground for the Next Gen Developers.',
    subTagline: '“Hackathons, minithons, and daily contests that push your skills to the next level.”',
    image: '/webforge.jpeg', // Placeholder for full size screenshot
    demoLink: 'https://web-forge-studios.vercel.app/',
    repoLink: 'https://github.com/RajSaroj85?tab=repositories',
    techStack: ['React', 'Typscript', 'Mysql'],
    overview: 'Webforge is a next-generation platform that unifies online and offline coding competitions into one seamless ecosystem. It enables companies, colleges, communities, and high-level users to host hackathons, minithons, and daily coding contests—complete with real-time coding collaboration, automated certificate generation, team management, and judging workflows.\n\nWebforge aims to become the #1 global hub for competitive coding, where coders participate, host, learn, win, and build their identity.',
    problem: [
      'Offline events lack submission, judging & certificate systems',
      'Online platforms handle only partial workflows',
      'Participants do not have a unified coding identity',
      'Hosts struggle with event management',
      'Companies lack a transparent talent discovery pipeline',
      'There is no single platform that integrates the end-to-end hackathon lifecycle—online + offline.'
    ],
    solution: {
      intro: 'WebForge  consolidates the entire hackathon ecosystem:',
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
      summary: 'Webforge becomes a coder’s competition profile + portfolio + skill identity'
    },
    market: [
      'India: 8,000+ colleges, 40,000+ annual tech fests',
      'Global hackathon industry growing rapidly',
      'No dominant hybrid (online + offline) platform',
      'Large unmet demand from colleges & companies',
      'Webforge fills a crucial gap with an end-to-end solution.'
    ],
    vision: [
      '“The name every coder remembers when they think of hackathons, and coding competition.”',
      'A global competition universe where coders: Build real projects, Compete & win, Earn recognition, Get hired',
      'Webforge aims to be the default platform for all coding competitions worldwide.'
    ]
  },
  {
    id: 'ChatFlow',
    title: 'Real Time Chat Application',
    tagline: 'real time chat aplicatio is a brand of webforge studios.',
    subTagline: '“A chatFlow is a real time chat applications.”',
    image: '/chatflow.jpeg',
    demoLink: 'https://chat-flow-real-time-chat-applicatio-nine.vercel.app/',
    repoLink: 'https://github.com/RajSaroj85/ChatFlow-Real--Time-Chat-Application',
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
      summary: 'Design the digital chatflow for persoal and real-time uses.'
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
    id: 'Foodie',
    title: 'Food Delivery Platform',
    tagline: 'foodi is real time online food delivery platform for local and another',
    subTagline: '“Cravings Delivered, Happiness Unlocked Fresh Food Fast Delivery Happy Moments”',
    image: '/food.jpeg',
    demoLink: 'https://food-delivery-platform-azure.vercel.app/',
    repoLink: 'https://github.com/RajSaroj85/Food-Delivery-Platform',
    techStack: ['React', 'Typscript', 'Tailwind CSS', 'HTML5 Drag & Drop'],
   overview: 'An experimental application that uses Google\'s dragon snake games analyse images, playing the game, and count thier score  about visual content in real-time.',
    problem: [
      'Accessing advanced game vision models is often complex',
      'Lack of simple design  for dragon game for user to interact with vision models'
    ],
    solution: {
      intro: 'A straightforward interface for Dragon Snake Game:',
      features: [
        'Click on the get start for sign up',
        'Real-time streaming responses',
        'Contextual chat based on platform content'
      ],
      summary: 'A modern food delivery platform that makes ordering food quick.'
    },
    market: [
      'Chat enthusiasts',
      'Developers learning to interact with vision models',
      'Accessibility tools'
    ],
    vision: [
      'To explore the limits of what browser-based dragon chatflow integrations can do with zero backend overhead.'
    ]
  }
];
