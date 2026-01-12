interface INavItems {
  name: string;
  to: string;
}

export const menuItems: INavItems[] = [
  {name: "Home", to: "#top"},
  {name: "About me", to: "#about"},
  {name: "Experience", to: "#experience"},
  {name: "Portfolio", to: "#portfolio"},
  {name: "Contact", to: "#contact"},
];

interface ISkill {
  name: string;
  skillIcon: string;
}

export const skills: ISkill[] = [
  {name: "HTML", skillIcon: "/skills-icons/html-logo.svg"},
  {name: "CSS", skillIcon: "/skills-icons/css-logo.svg"},
  {name: "JavaScript", skillIcon: "/skills-icons/js-logo.svg"},
  {name: "Figma", skillIcon: "/skills-icons/figma-logo.svg"},
  {name: "VS Code", skillIcon: "/skills-icons/vscode-logo.svg"},
  {name: "Sass", skillIcon: "/skills-icons/sass-logo.svg"},
  {name: "React", skillIcon: "/skills-icons/logo-react.svg"},
  {name: "NextJS", skillIcon: "/skills-icons/nextjs-logo.svg"},
  {name: "TypeScript", skillIcon: "/skills-icons/typescript-logo.svg"},
  {name: "Redux", skillIcon: "/skills-icons/redux-logo.svg"},
  {name: "VueJs", skillIcon: "/skills-icons/vue-logo.svg"},
  {name: "Pinia", skillIcon: "/skills-icons/pinia-logo.svg"},
  {name: "Linux", skillIcon: "/skills-icons/linux-logo.svg"},
  {name: "Tailwind", skillIcon: "/skills-icons/tailwind-logo.svg"},
];

interface IAboutText {
  blockText: string[];
}

export const aboutText: IAboutText[] = [
  {
    blockText: [
      "I’m a frontend developer who builds clean, fast, and interactive interfaces.",
      "I focus on user experience, performance, and details that make products feel alive.",
    ],
  },
  {
    blockText: [
      "I enjoy turning complex ideas into simple, intuitive interfaces.",
      "My main stack is modern frontend — React, TypeScript, animations, and responsive design",
    ],
  },
  {
    blockText: [
      "I also work with microcontrollers and hardware.",
      "This helps me think beyond the screen and design systems, not just visuals.",
    ],
  },
  {
    blockText: [
      "Discipline matters to me — in code and in life.",
      "Training in the gym taught me consistency, focus, and long-term thinking.",
    ],
  },
  {
    blockText: [
      "I’m constantly learning.",
      "New technologies, better patterns, deeper understanding — every day.",
    ],
  },
  {
    blockText: [
      "An active lifestyle keeps my energy high and my mind clear.",
      "Movement fuels creativity and better problem-solving.",
    ],
  },
  {
    blockText: [
      "I build digital experiences where code, motion, and logic come together.",
      "Let’s create something meaningful!",
    ],
  },
];

export interface IExperience {
  id: number;
  title: string;
  company: string;
  description: string;
  period: string;
}

export const experience: IExperience[] = [
  {
    id: 1,
    title: "B.Sc. in Computer Security",
    company: "Tver State University",
    description:
      "Studied applied mathematics and computer security, focusing on information protection, cryptography, and secure system design.",
    period: "2019 – 2025",
  },
  {
    id: 2,
    title: "Front-End Developer Intern",
    company: "Salt and Pepper IT",
    description:
      "Worked on real-world web applications, building UI components, improving UX, and collaborating with designers and backend developers.",
    period: "2024 – 2025",
  },
  {
    id: 3,
    title: "Lead Engineer",
    company: "GK 'Innotech'",
    description:
      "Led technical projects, coordinated development tasks, and ensured system reliability while working closely with development and infrastructure teams.",
    period: "2024 – 2025",
  },
  {
    id: 4,
    title: "Front-End Developer",
    company: "TMH Engineering",
    description:
      "Developing modern web interfaces, animations, and interactive UI using React, TypeScript, and modern front-end tooling.",
    period: "2025 – Now",
  },
];
