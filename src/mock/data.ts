//! Header Navbar Items 
export interface navbarLinks {
    name: string;
    hash: string;
}

export const navbarLinks: navbarLinks[] = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Tech Stack",
        hash: "#techstack",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Contact",
        hash: "#contact",
    }
];


//! Technologies 
export interface technologiesData {
    technology: string;
    documentation: string;
    logo: string;
}

export const technologiesData: technologiesData[] = [
    {
        technology: "Git",
        documentation: "https://git-scm.com/",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    },
    {
        technology: "HTML5",
        documentation: "https://www.w3.org/html/",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    },
    {
        technology: "CSS3",
        documentation: "https://www.w3schools.com/css/",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    },
    {
        technology: "SCSS",
        documentation: "https://sass-lang.com",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",
    },
    {
        technology: "Tailwind CSS",
        documentation: "https://tailwindcss.com/",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
        technology: "JavaScript",
        documentation: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    },
    {
        technology: "Vite",
        documentation: "https://vitejs.dev/",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
    },
    {
        technology: "React",
        documentation: "https://react.dev/",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    {
        technology: "Next.js",
        documentation: "https://nextjs.org/",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    },
    {
        technology: "Redux",
        documentation: "https://redux.js.org",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
    }
];


//! Projects

export const projectsData = [
    {
        image: "https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141352.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1712880000&semt=ais",
        name: "Foody Project",
        technologies: " NextJS , Typescipt, Tailwind",
        githubLink: "https://github.com/ramalabbasov044/foody",
        vercelLink: "https://foody-m5tik6ojc-ramalabbasov044s-projects.vercel.app/"
    }
]