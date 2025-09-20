const _ = {};

_.navbarData = [
  {
    label: 'About',
    path: '/about'
  },
  {
    label: 'Portfolio',
    path: '/projects'
  },
  {
    label: 'Contact',
    path: '/contact'
  },
]

_.techStackDetails = [
  {
    name: "Figma",
    desc: "Design Tools",
    logo: "/images/figma-logo.svg",
    logoBgColor: "#204738",
  },
  {
    name: "Bootstrap 5",
    desc: "CSS Framework",
    logo: "/images/bootstrap.svg",
    logoBgColor: "rgba(67, 0, 92, 0.5)",
  },
  {
    name: "TailwindCSS",
    desc: "CSS Framework",
    logo: "/images/tailwind.svg",
    logoBgColor: "#213F4D",
  },
  {
    name: "Daisy UI",
    desc: "TailwindCSS UI Library",
    logo: "https://img.daisyui.com/images/daisyui/mark-static.svg",
    logoBgColor: "rgba(250, 255, 6, 0.1)",
  },
  {
    name: "JavaScript",
    desc: "Programming language",
    logo: "/images/js.svg",
    logoBgColor: "rgba(250, 255, 6, 0.1)",
  },
  {
    name: "TypeScript",
    desc: "JavaScript, but better",
    logo: "/images/typescript.svg",
    logoBgColor: "#213F4D",
  },
  {
    name: "React.js",
    desc: "JavaScript library",
    logo: "/images/react.svg",
    logoBgColor: "#314A50",
  },
  {
    name: "Redux Toolkit",
    desc: "State management library",
    logo: "/images/redux.svg",
    logoBgColor: "rgba(67, 0, 92, 0.5)",
  },
  {
    name: "Zustand",
    desc: "State management library",
    logo: "/images/zustand.svg",
    logoBgColor: "rgba(167, 135, 27, 0.5)",
  },
  {
    name: "ShadCN UI",
    desc: "React.js component library",
    logo: "/images/shadcn.png",
    logoBgColor: "rgba(255, 255, 255, 0.5)",
  },
  {
    name: "Framer Motion",
    desc: "UI animation library",
    logo: "/images/motion.svg",
    logoBgColor: "rgba(167, 27, 129, 0.5)",
  },
  {
    name: "Next.js",
    desc: "Full-stack framework",
    logo: "/images/nextjs.svg",
    logoBgColor: "#314A50",
  },
  {
    name: "Firebase",
    desc: "Backend tool + database",
    logo: "/images/firebase.svg",
    logoBgColor: "rgba(250, 255, 6, 0.1)",
  },
  {
    name: "Node.js",
    desc: "Backend",
    logo: "/images/node-js.svg",
    logoBgColor: "#394A38",
  },
  {
    name: "Express.js",
    desc: "Backend framework",
    logo: "/images/Express.svg",
    logoBgColor: "rgba(255, 255, 255, 0.5)",
  },
  {
    name: "MongoDB",
    desc: "Database",
    logo: "/images/mongodb.svg",
    logoBgColor: "#204738",
  },
  {
    name: "Mongoose",
    desc: "ORM",
    logo: "/images/Mongoose.js.svg",
    logoBgColor: "rgba(255, 255, 255, 0.5)",
  },
  {
    name: "Prisma",
    desc: "ORM",
    logo: "/images/prisma.svg",
    logoBgColor: "rgba(255, 255, 255, 0.5)",
  },
  {
    name: "Git",
    desc: "Version control",
    logo: "/images/git.svg",
    logoBgColor: "#44241D",
  },
  {
    name: "Vercel",
    desc: "Deployment tool",
    logo: "/images/vercel.svg",
    logoBgColor: "rgba(67, 0, 92, 0.5)",
  },
];

_.projectDetails = [
  {
    name: "Forecastly",
    slug: "forecastly",
    stack: [
      "tailwindcss",
      "react.js",
      "redux-toolkit",
      "chart.js",
      "leaflet",
      "openweathermap api",
      "openstreetmap api",
    ],
    desc: `An information-rich weather portal with detailed data visualization developed with React.js with OpenWeatherAPI & OpenStreetMapAPI integration & styled with TailwindCSS. Datavisualization done by Chart.js.`,
    features: [
      `Created an user-interactive forecast dashboard featuring daily and hourly forecast with detailed data visualization`,
      `Forecast dashboard features multi-metric data (temperature, humidity, wind speed, pressure etc.)`,
      `Implemented an user-interactive multi-layer GPS based weather map with Leaflet.js, OpenStreetMap API and OpenWeatherMap API`,
      `App Provides useful suggestion for users analyzing current weather trends`,
    ],
    thumbnail: "/images/projects/forecastly-thumb.png",
    live: "https://react-weather-app-eight-weld.vercel.app/",
    source: "https://github.com/ZakariaZack98/forecastly.git",
  },
  {
    name: "TaskFlow",
    slug: "taskflow",
    stack: ["tailwindcss", "react.js", "firebase", "firebase realtime database", "cloudinary api"],
    desc: `An user-friendly feature-rich task management app built for smooth workflow and seamless productivity.`,
    features: [
      `Created an user-friendly dual mode task management dashboard`,
      `Created feature-rich task management system including- priority flags, categorization, quick-reschedule, sub-task checklists, custom reminder, and commenting on task progress`,
      `Implemented a notification system based on user activity`,
      `Working on team collaboration features.`
    ],
    thumbnail: "/images/projects/taskflow-thumb.png",
    live: "https://task-flow-one-nu.vercel.app/",
    source: "https://github.com/ZakariaZack98/TaskFlow.git",
  },
  {
    name: "Awaaz",
    slug: "awaaz",
    stack: ["tailwindcss", "react.js", "redux-toolkit", "firebase", "firebase realtime database", "cloudinary api"],
    desc: `An Instagram-inspired social media web application. Database designed with performance and scalability in mind.`,
    features: [
      `Built smooth interaction features including reactions, comments, replies, followers, following and blocking users`,
      `Implemented custom algorithm for personalized newsfeed and explore page`,
      `Created a notification system based on user interaction`,
      `Designed the database with performance and scalability in mind`,
      `Working on real time chatting features`
    ],
    thumbnail: "/images/projects/awaaz-thumb.png",
    live: "https://awaaz-nine.vercel.app/",
    source: "https://github.com/ZakariaZack98/Awaaz.git",
  },
  {
    name: `C'encia Skincare`,
    slug: "cencia-skincare",
    stack: ["tailwindcss", "react.js", "redux-toolkit", "framer-motion"],
    desc: `An e-commerce website for a bootique skincare brand`,
    features: [
      `Created an user-friendly attractive UI with framer-motion and AOS animations`, 
      `Implemented a robust cart management system`, 
      `All device friendly responsive UI`
    ],
    thumbnail: "/images/projects/cencia-thumb.png",
    live: "https://cencia-skincare.vercel.app/",
    source: "https://github.com/ZakariaZack98/cencia_skincare.git",
  },
  {
    name: `Real-time chatting app`,
    slug: "firbase-chat",
    stack: ["tailwindcss", "react.js", "firebase", "firebase realtime database", "cloudinary api"],
    desc: `A full-stack realtime chatting web-application built with react.js & firebase.` ,
    features: [
      `Implemented secure login with Firebase Auth`,
      `Real time user-user and user-group chatting`,
      `Implemented friend/unfried/blocking features`,
      `Implemented messaging with pictures and emojis`
    ],
    thumbnail: "/images/projects/chat-thumb.png",
    live: "https://zakariazack98.github.io/Music_Player/",
    source: "https://github.com/ZakariaZack98/cit-chat-app.git",
  },
  {
    name: `Music Player`,
    slug: "music-player",
    stack: ["bootstrap", "vanilla JS", "jsmediatag"],
    desc: `A smartphone-like music player web-app`,
    features: [
      `Created smooth user interaction system for navigating tracks and playlist`, 
      `Player skin color changes based on track album art`,
      `Plays all audio format`, 
      `Custom/favorite playlist creation`, 
      `Added some built in themes for the app`
    ],
    thumbnail: "/images/projects/music-player-thumb.png",
    live: "https://zakariazack98.github.io/Music_Player/",
    source: "https://github.com/ZakariaZack98/Music_Player.git",
  },
];

_.footerLinkGroup = [
  {
    name: "Navigate",
    links: [
      {
        label: "Home",
        path: "/",
      },
      {
        label: "About",
        path: "/about",
      },
      {
        label: "Work",
        path: "/projects",
      },
      {
        label: "Contact",
        path: "/contact",
      },
    ],
  },
  {
    name: "Projects",
    links: [
      {
        label: "Forecastly",
        path: "/projects/forecastly",
      },
      {
        label: "TaskFlow",
        path: "/projects/taskflow",
      },
      {
        label: "Awaaz",
        path: "/projects/awaaz",
      },
      {
        label: "C'encia Skincare",
        path: "/projects/cencia-skincare",
      },
    ],
  },
  {
    name: "Socials",
    links: [
      {
        label: "LinkedIn",
        path: "https://linkedin.com/in/sadeemdzakaria",
      },
      {
        label: "GitHub",
        path: "https://github.com/ZakariaZack98",
      },
      {
        label: "Facebook",
        path: "https://www.facebook.com/profile.php?id=61558974110494",
      }
    ],
  }
];

export default _;
