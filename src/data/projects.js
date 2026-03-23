// ═══════════════════════
//  Projects placeholder data
// ═══════════════════════
export const featuredProjects = [
  {
    id: 1,
    title: 'Asinorithm',
    problem: 'Eliminating the grading bottleneck for educators by unifying the evaluation of digital code at scale.',
    description: 'An AI-powered grading infrastructure that bridges traditional and modern education. It leverages advanced AI models to autonomously evaluate complex submissions—GitHub repository code to physical answer sheets—automating grading workflows, generating deep personalized feedback, and providing actionable analytics.',
    techStack: [
      'React',
      'Supabase',
      'Python', 
      'GitHub API', 
      'Multimodal AI'
    ],
    features: [
      'Engineered evaluation pipeline to synchronously process and grade code-based submissions.',
      'Integrated natively with the GitHub API to create a zero-cost, seamless seamless submission workflow for programming tasks.',
      'Designed a real-time analytics dashboard equipping educators with automated grading insights and personalized student feedback.'
    ],
    liveUrl: 'https://asinorithm.vercel.app/',
    githubUrl: 'https://github.com/sairajthorat/Asinorithm',
    videoUrl: 'https://youtu.be/_FduM6v1X6o?si=q_pl75yV43NE10ft',
    linkedinUrl: 'https://www.linkedin.com/posts/sairaj-thorat_buildinpublic-react-ai-ugcPost-7435724664708001793-CdJp',
    image: '/assets/projects/Logo.png',
    isFeatured: true,
    status: 'live',
  },
  {
    id: 2,
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
    liveUrl: 'https://agrolytics-gules.vercel.app/#home',   // ← update with real URL
    githubUrl: 'https://github.com/sairajthorat/agrolytics',
    videoUrl: null,   // ← add video path or YouTube URL
    linkedinUrl: 'https://www.linkedin.com/posts/sairaj-thorat_ai-agtech-innovation-ugcPost-7433765919618867200-rgpt',
    images: [
      '/assets/projects/1.png',
      '/assets/projects/2.png',
      '/assets/projects/3.png',
      '/assets/projects/4.png',
      '/assets/projects/5.png',
      '/assets/projects/6.png',
      '/assets/projects/7.png',
      '/assets/projects/8.png',
    ],
    // image: '/assets/projects/agrolytics.webp', // removed in favor of images array
    isFeatured: true,
    status: 'live',  // 'live' | 'in-progress' | 'archived'
  },
  
];

export const smallProjects = [
  {
    id: 3,
    title: 'AmrutCAB',
    description: 'Production-grade full-stack ride-booking platform with real-time GPS tracking, in-app chat, smart fare estimation, and OTP verification.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    githubUrl: 'https://github.com/sairajthorat/AmrutCAB_Nasscom',
    liveUrl: 'https://quick-ride-asif.vercel.app',
    status: 'live',
  },
  {
    id: 4,
    title: 'CineScout',
    description: 'AI-powered movie recommendation system using TF-IDF and cosine similarity, integrated with real-time OMDB API for posters and metadata.',
    techStack: ['Python', 'NLP', 'Streamlit', 'OMDB API'],
    githubUrl: 'https://github.com/sairajthorat/CineScout_Movie_Recomendation_System',
    liveUrl: null,
    status: 'live',
  },
  {
    id: 5,
    title: 'Sugarcane Yield Prediction',
    description: 'End-to-end ML pipeline leveraging multispectral satellite imagery and weather parameters with XGBoost for precision crop yield predictions.',
    techStack: ['Python', 'XGBoost', 'Pandas', 'Scikit-learn'],
    githubUrl: 'https://github.com/sairajthorat/Sugarcane_Yeild_Prediction',
    liveUrl: null,
    status: 'in-progress',
  },
  {
    id: 6,
    title: 'MindMate',
    description: 'A mental wellness companion app focused on mood tracking and personalized recommendations.',
    techStack: ['Python', 'React'],
    githubUrl: 'https://github.com/sairajthorat/MindMate',
    liveUrl: null,
    status: 'in-progress',
  },
  {
    id: 7,
    title: 'ML Projects Portfolio',
    description: 'Collection of ML models covering classification, regression, and NLP using Scikit-learn, Pandas, and Matplotlib.',
    techStack: ['Python', 'Scikit-learn', 'Pandas'],
    githubUrl: 'https://github.com/sairajthorat/Machine-Learning',
    liveUrl: null,
    status: 'live',
  },
];
