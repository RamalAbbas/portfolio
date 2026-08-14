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
        image: "https://rhyswear.vercel.app/BgPhoto.jpg",
        name: "Rhyswear",
        technologies: " Axios , Firebase , Styled-Components , NextJS",
        githubLink: "https://github.com/RamalAbbas/rhyswear",
        vercelLink: "https://rhyswear.vercel.app/"
    },


    {
        image: "https://pulpal.vercel.app/images/modern.png",
        name: "Pul Pal",
        technologies: " Axios , Swiper , Zustand , React , Styled-Components",
        githubLink: "https://github.com/RamalAbbas/pulpal",
        vercelLink: "https://pulpal.vercel.app/"
    },


    {
        image: "https://framerusercontent.com/images/Nx4Os4OzmDrbsnu4Xb9KJxC36I.jpg?scale-down-to=4096&width=6960&height=3904",
        name: "Sup.vc",
        technologies: " Html5 , Css3 , Javascript",
        githubLink: "https://github.com/rahimlisarkhan/sub.az",
        vercelLink: "https://sup.vc/"
    },


    {
        image: "https://sipner-square.vercel.app/src/assets/images/logo/white.svg",
        name: "Sipner Square",
        technologies: " Html5 , Css3 , Javascript , Tailwind",
        githubLink: "https://github.com/RamalAbbas/sipner-square",
        vercelLink: "https://sipnersquare.com/"
    },


    {
        image: "https://zody-app.vercel.app/logo/main.svg",
        name: "Zody",
        technologies: " Axios , I18n , Swiper , React , Styled-Components",
        githubLink: "https://github.com/RamalAbbas/zody-app",
        vercelLink: "https://zody-app.vercel.app/?LNG=en"
    },
]