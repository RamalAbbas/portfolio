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
        vercelLink: "https://foody-ten-mu.vercel.app/"
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
        image: "https://sup.vc/images/slider/bg.jpg",
        name: "Sup.vc",
        technologies: " Html5 , Css3 , Javascript ",
        githubLink: "https://github.com/rahimlisarkhan/sub.az",
        vercelLink: "https://sup.vc/"
    },
]