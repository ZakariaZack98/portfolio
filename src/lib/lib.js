const _ = {};

_.techStackDetails = [
  {
    name: 'Figma',
    desc: 'Design Tools',
    logo: '/images/figma-logo.svg',
    logoBgColor: '#204738'
  },
  {
    name: 'Bootstrap 5',
    desc: 'CSS Framework',
    logo: '/images/bootstrap.svg',
    logoBgColor: 'rgba(67, 0, 92, 0.5)'
  },
  {
    name: 'TailwindCSS',
    desc: 'CSS Framework',
    logo: '/images/tailwind.svg',
    logoBgColor: '#213F4D'
  },
  {
    name: 'Daisy UI',
    desc: 'TailwindCSS UI Library',
    logo: 'https://img.daisyui.com/images/daisyui/mark-static.svg',
    logoBgColor: 'rgba(250, 255, 6, 0.1)'
  },
  {
    name: 'JavaScript',
    desc: 'Programming language',
    logo: '/images/js.svg',
    logoBgColor: 'rgba(250, 255, 6, 0.1)'
  },
  {
    name: 'TypeScript',
    desc: 'JavaScript, but better',
    logo: '/images/typescript.svg',
    logoBgColor: '#213F4D'
  },
  {
    name: 'React.js',
    desc: 'JavaScript library',
    logo: '/images/react.svg',
    logoBgColor: '#314A50'
  },
  {
    name: 'Redux Toolkit',
    desc: 'State management library',
    logo: '/images/redux.svg',
    logoBgColor: 'rgba(67, 0, 92, 0.5)'
  },
  {
    name: 'Zustand',
    desc: 'State management library',
    logo: '/images/zustand.svg',
    logoBgColor: 'rgba(167, 135, 27, 0.5)'
  },
  {
    name: 'ShadCN UI',
    desc: 'React.js component library',
    logo: '/images/shadcn.png',
    logoBgColor: 'rgba(255, 255, 255, 0.5)'
  },
  {
    name: 'Framer Motion',
    desc: 'UI animation library',
    logo: '/images/motion.svg',
    logoBgColor: 'rgba(167, 27, 129, 0.5)'
  },
  {
    name: 'Next.js',
    desc: 'Full-stack framework',
    logo: '/images/nextjs.svg',
    logoBgColor: '#314A50'
  },
  {
    name: 'Firebase',
    desc: 'Backend tool + database',
    logo: '/images/firebase.svg',
    logoBgColor: 'rgba(250, 255, 6, 0.1)'
  },
  {
    name: 'Node.js',
    desc: 'Backend',
    logo: '/images/node-js.svg',
    logoBgColor: '#394A38'
  },
  {
    name: 'Express.js',
    desc: 'Backend framework',
    logo: '/images/Express.svg',
    logoBgColor: 'rgba(255, 255, 255, 0.5)'
  },
  {
    name: 'MongoDB',
    desc: 'Database',
    logo: '/images/mongodb.svg',
    logoBgColor: '#204738'
  },
  {
    name: 'Mongoose',
    desc: 'ORM',
    logo: '/images/Mongoose.js.svg',
    logoBgColor: 'rgba(255, 255, 255, 0.5)'
  },
  {
    name: 'Prisma',
    desc: 'ORM',
    logo: '/images/prisma.svg',
    logoBgColor: 'rgba(255, 255, 255, 0.5)'
  },
  {
    name: 'Git',
    desc: 'Version control',
    logo: '/images/git.svg',
    logoBgColor: '#44241D'
  },
  {
    name: 'Vercel',
    desc: 'Deployment tool',
    logo: '/images/vercel.svg',
    logoBgColor: 'rgba(67, 0, 92, 0.5)'
  },
]

_.projectDetails = [
  {
    name: 'Forecastly',
    slug: 'forecastly',
    stack: ['tailwindcss', 'react.js', 'redux-toolkit', 'chart.js', 'leaflet', 'openweathermap api', 'openstreetmap api'],
    desc: `An information-rich weather portal with detailed data visualization developed with React.js with OpenWeatherAPI & OpenStreetMapAPI integration & styled with TailwindCSS. Datavisualization done by Chart.js.`,
    points: [
      `User interactive forecast dashboard featuring daily and hourly forecast with detailed data visualization (temperature, humidity, wind speed, pressure etc.)`,
      `An user-interactive multi-layer GPS based weather map`,
      `Provides useful suggestion for users analyzing current weather trends`
    ],
    thumbnail: '/images/projects/forecastly-thumb.png',
    live: 'https://react-weather-app-eight-weld.vercel.app/',
    source: 'https://github.com/ZakariaZack98/forecastly.git'
  },
  {
    name: 'TaskFlow',
    slug: 'taskflow',
    stack: ['tailwindcss', 'react.js', 'firebase', 'firebase realtime database'],
    desc: `An user-friendly feature-rich task management app built for smooth workflow and seamless productivity.`,
    points: [
      `User-friendly dual mode task management dashboard`,
      `Feature-rich task management system including- priority flags, categorization, quick-reschedule, sub-task checklists, custom reminder, and commenting on task progress`,
      `Notification system based on user activity`
    ],
    thumbnail: '/images/projects/taskflow-thumb.png',
    live: 'https://task-flow-one-nu.vercel.app/',
    source: 'https://github.com/ZakariaZack98/TaskFlow.git'
  },
  {
    name: 'Awaaz',
    slug: 'awaaz',
    stack: ['tailwindcss', 'react.js', 'redux-toolkit', 'firebase', 'firebase realtime database'],
    desc: `An Instagram-inspired social media web application. Database designed with performance and scalability in mind.`,
    points: [
      `Smooth interaction features including reactions, comments, replies, followers, following and blocking users`,
      `Custom algorithm for personalized newsfeed and explore page`,
      `Notification system based on user interaction`
    ],
    thumbnail: '/images/projects/awaaz-thumb.png',
    live: 'hhttps://awaaz-nine.vercel.app/',
    source: 'https://github.com/ZakariaZack98/Awaaz.git'
  },
  {
    name: `C'encia Skincare`,
    slug: 'cencia-skincare',
    stack: ['tailwindcss', 'react.js', 'redux-toolkit'],
    desc: `An e-commerce website for a bootique skincare brand`,
    points: [
      `User friendly attractive UI`,
      `Smooth cart management system`,
      `All device friendly responsive UI`
    ],
    thumbnail: '/images/projects/cencia-thumb.png',
    live: 'hhttps://cencia-skincare.vercel.app/',
    source: 'https://github.com/ZakariaZack98/cencia_skincare.git'
  },
]


export default _