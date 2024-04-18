//! Header Navbar Items 
export interface navbarLinks {
    name: string;
    hash: string;
}

export const navbarLinks: navbarLinks[] = [
    {
        name: "Home",
        hash: "#",
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

export interface projectsData {
    image: string,
    name: string,
    technologies: string,
    githubLink: string,
    vercelLink: string,
}

export const projectsData: projectsData[] = [
    {
        image: "https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141352.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1712880000&semt=ais",
        name: "Foody Project",
        technologies: " NextJS , Typescipt, Tailwind",
        githubLink: "https://github.com/ramalabbasov044/foody",
        vercelLink: "https://foody-m5tik6ojc-ramalabbasov044s-projects.vercel.app/"
    },


    {
        image: "https://images.ctfassets.net/hrltx12pl8hq/6TIZLa1AKeBel0yVO7ReIn/1fc0e2fd9fcc6d66b3cc733aa2547e11/weather-images.jpg?fit=fill&w=1200&h=630",
        name: "Weather App",
        technologies: " Redux , React , Styled-Components , React-Dom ",
        githubLink: "https://github.com/ramalabbasov044/redux-weather-app",
        vercelLink: "https://redux-weather-app-seven.vercel.app/"
    },


    {
        image: "https://miro.medium.com/v2/resize:fit:800/1*5_u3kPo3s12FR1BHS5rTaQ.png",
        name: "React Color App",
        technologies: " Redux , React , Styled-Components , React-Dom , React-Toastfiy",
        githubLink: "https://github.com/ramalabbasov044/react-color-app",
        vercelLink: "https://react-color-app-red.vercel.app/"
    },


    {
        image: "https://cdn.vox-cdn.com/thumbor/9vV8SbBMxnaIYaiGNhoRyys2OpY=/0x0:2429x2396/1200x0/filters:focal(0x0:2429x2396):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/3488502/shutterstock_106919999.0.jpg",
        name: "Rock Paper Scissors Game",
        technologies: " Html5 , Css3 , Javascript",
        githubLink: "https://github.com/ramalabbasov044/Rock-Paper",
        vercelLink: "https://rock-paper-blond.vercel.app/"
    },


    {
        image: "https://www.parliament.uk/contentassets/aa8b9933d3cb4364b827e7a60ea898e0/hl_library_roger-harris2022.jpg?width=1000&quality=85",
        name: "Library",
        technologies: " Html5 , Css3 , Javascript , Firebase",
        githubLink: "https://github.com/ramalabbasov044/library-app",
        vercelLink: "https://library-app-delta-drab.vercel.app/"
    },


    {
        image: "data:image/jpeg;base64,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",
        name: "Chat App",
        technologies: " React , Typescript , Styled-Components , Axios",
        githubLink: "https://github.com/RamalAbbas/react-chat",
        vercelLink: "https://react-chat-sand.vercel.app/"
    },
]