// ═══════════════════════
//  Projects placeholder data
// ═══════════════════════
export const featuredProjects = [
  {
    id: 1,
    title: 'Agrolytics',
    problem: 'Farmers lack access to data-driven insights for crop yield and price prediction.',
    description:
      'A full-stack agri-analytics platform that provides AI-powered yield predictions, real-time sugarcane price data, and a farmer dashboard with Hindi language support.',
    techStack: ['React', 'Python', 'Flask', 'Supabase', 'Machine Learning'],
    features: [
      'ML-based sugarcane yield & price prediction',
      'Real-time dashboard with charts and alerts',
      'Hindi language toggle for rural accessibility',
    ],
    liveUrl: 'https://agrolytics.vercel.app',   // ← update with real URL
    githubUrl: 'https://github.com/sairajthorat/agrolytics',
    videoUrl: null,   // ← add video path or YouTube URL
    image: '/assets/projects/agrolytics.webp',
    isFeatured: true,
    status: 'live',  // 'live' | 'in-progress' | 'archived'
  },
  {
    id: 2,
    title: 'Project Two',       // ← replace with your second main project
    problem: 'Describe the core problem this project solves in one sentence.',
    description: 'Brief description of what you built and why it matters.',
    techStack: ['React', 'Node.js', 'MongoDB'],
    features: [
      'Key feature one',
      'Key feature two',
      'Key feature three',
    ],
    liveUrl: 'https://project-two.vercel.app',
    githubUrl: 'https://github.com/sairajthorat/project-two',
    videoUrl: null,
    image: '/assets/projects/project-two.webp',
    isFeatured: true,
    status: 'live',
  },
];

export const smallProjects = [
  {
    id: 3,
    title: 'DSA Solutions Repo',
    description: '500+ curated DSA solutions with explanations across arrays, trees, graphs, and DP.',
    techStack: ['Python', 'C++'],
    githubUrl: 'https://github.com/sairajthorat/dsa-solutions',
    liveUrl: null,
    status: 'live',
  },
  {
    id: 4,
    title: 'Small Project 2',
    description: 'One-line description of what this does.',
    techStack: ['React', 'JavaScript'],
    githubUrl: 'https://github.com/sairajthorat/project',
    liveUrl: null,
    status: 'live',
  },
  {
    id: 5,
    title: 'Small Project 3',
    description: 'One-line description of what this does.',
    techStack: ['Python'],
    githubUrl: 'https://github.com/sairajthorat/project',
    liveUrl: null,
    status: 'archived',
  },
];
