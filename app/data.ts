interface INavItems {
  name: string;
  to: string;
}

export const menuItems: INavItems[] = [
  {name: "Начало", to: "#top"},
  {name: "Обо мне", to: "#about"},
  {name: "Опыт", to: "#experience"},
  {name: "Портфолио", to: "#portfolio"},
  {name: "Связаться", to: "#contact"},
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
      "Я frontend-разработчик, создающий быстрые, чистые и интерактивные интерфейсы.",
      "Моя цель — делать продукты удобными, производительными и визуально точными.",
    ],
  },
  {
    blockText: [
      "Я превращаю сложные идеи в простые и понятные пользовательские интерфейсы.",
      "Основной стек: React, TypeScript, современный CSS, анимации и адаптивная разработка.",
    ],
  },
  {
    blockText: [
      "Также работаю с микроконтроллерами и аппаратными проектами.",
      "Это помогает мне мыслить системно и понимать продукты шире, чем только на уровне интерфейса.",
    ],
  },
  {
    blockText: [
      "Для меня важны дисциплина и качество работы.",
      "Опыт регулярных тренировок сформировал привычку к последовательности и долгосрочному развитию.",
    ],
  },
  {
    blockText: [
      "Я постоянно развиваюсь как разработчик.",
      "Изучаю новые технологии, архитектурные подходы и лучшие практики фронтенд-разработки.",
    ],
  },
  {
    blockText: [
      "Активный образ жизни помогает сохранять концентрацию и продуктивность.",
      "Баланс между работой и движением поддерживает ясность мышления и креативность.",
    ],
  },
  {
    blockText: [
      "Я создаю цифровые продукты, где код, анимация и логика работают как единая система.",
      "Открыт к сотрудничеству и интересным проектам.",
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
    title: "Специалитет по компьютерной безопасности",
    company: "Тверской государственный университет",
    description:
      "Изучал прикладную математику и компьютерную безопасность с фокусом на защиту информации, криптографию и проектирование защищённых систем.",
    period: "2019 – 2025",
  },
  {
    id: 2,
    title: "Стажёр Фронтенд-разработчик",
    company: "Salt & Pepper IT",
    description:
      "Работал над реальными веб-приложениями: разрабатывал UI-компоненты, улучшал пользовательский опыт и взаимодействовал с дизайнерами и backend-разработчиками.",
    period: "2024 – 2025",
  },
  {
    id: 3,
    title: "Ведущий инженер",
    company: "ГК «Иннотех»",
    description:
      "Руководил техническими проектами, координировал задачи разработки и обеспечивал надёжность систем, работая совместно с командами разработки и инфраструктуры.",
    period: "2024 – 2025",
  },
  {
    id: 4,
    title: "Инжинер-программист",
    company: "ТМХ «Инжиниринг»",
    description:
      "Разрабатываю современные веб-интерфейсы, анимации и интерактивные UI с использованием React, TypeScript и современных инструментов фронтенд-разработки.",
    period: "2025 – настоящее время",
  },
];

// portfolio

export interface Iprojects {
  id: number;
  href: string;
  bgImageSrc: string;
  title: string;
  technologies: string[];
}

export const projects: Iprojects[] = [
  {
    id: 1,
    href: "https://portfolio-kappa-gilt-paz2xlvdvo.vercel.app/",
    bgImageSrc: "/projects/portfolio-image.jpg",
    title: "Мой сайт портфолио",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP"],
  },
  {
    id: 2,
    href: "https://dmitryoverkin.github.io/Let-s-Fly/",
    bgImageSrc: "/projects/lets-fly-image.jpg",
    title: "Сайт компании «Let's Fly»",
    technologies: ["JavaScript", "GSAP", "Scss", "Prepros"],
  },
  {
    id: 3,
    href: "https://dmitryoverkin.github.io/YourTour-SNP_FE_intership/",
    bgImageSrc: "/projects/your-tour-image.jpg",
    title: "Сайт компании «YourTour»",
    technologies: ["JavaScript", "Scss", "HTML", "Gulp"],
  },
];
