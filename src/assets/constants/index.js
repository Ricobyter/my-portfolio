import { chatapp, css, express, figma, firebase, git, javascript, jupyter, materialui, mongodb, mysql, netlify, nodejs, php, reactimg, tailwindcss, typescript, vercel, vscode } from "../images/index.js";


const fskills = [
    {
        img: reactimg,
        title: 'ReactJS',
        style : 'border-[#719fd7]'

    },
    {
        img: typescript,
        title: 'Typescript',
        style: 'border-[#1c9cec]'
    },
    {
        img: tailwindcss,
        title: 'TailwindCSS',
        style: 'border-[#03a1fc]'
    },
    {
        img: materialui,
        title: 'Material-UI',
        style: 'border-[#1cacec]'
    },
    {
        img: javascript,
        title: "Javascript",
        style: 'border-[#fbd304]'
    },
    {
        img: css,
        title: 'CSS',
        style: 'border-[#0494e4]'
    }
]

const bskills = [
    {
        img: mongodb,
        title: 'MongoDB',
        style : 'border-[#64bc64]'

    },
    {
        img: firebase,
        title: 'Firebase',
        style: 'border-yellow-600'
    },
    {
        img: nodejs,
        title: 'NodeJS',
        style: 'border-[#4aa950] '
    },
    {
        img: express,
        title: 'ExpressJS',
        style: 'border-indigo-600'
    },
    {
        img: mysql,
        title: "MySQL",
        style: 'border-[#fc9403]'
    },
    {
        img: php,
        title: 'PHP',
        style: 'border-[#b4a4cc]'
    }
]
const oskills = [
    {
        img: git,
        title: 'Git',
        style : 'border-[#f8541c]'

    },
    {
        img: vscode,
        title: 'VsCode',
        style: 'border-[#148cdc]'
    },
    {
        img: jupyter,
        title: 'Jupyter Notebook',
        style: 'border-[#f49c04]'
    },
    {
        img: vercel,
        title: 'Vercel',
        style: 'border-[#d8d8d8]'
    },
    {
        img: netlify,
        title: "Netlify",
        style: 'border-[#34b0bc]'
    },
    {
        img: figma,
        title: 'Figma',
        style: 'border-[#e44c1c]'
    }
]

const projects = [
    {
        title: "Realtime-ChatApp",
        img: chatapp,
        description: "A chat application that lets you have realtime communication with your friends and anyone around the world. FOr user security, there is also end-to-end encryption",
        tech: ['ReactJS', 'NodeJS', 'MongoDB', 'Socket.io', 'React-Styled-Elements', 'React-Toastify', 'CryptoJS'],
    },
    {
        title: "Realtime-Youtube Clone",
        img: chatapp,
        description: "A chat application that lets you have realtime communication with your friends and anyone around the world. FOr user security, there is also end-to-end encryption",
        tech: ['ReactJS', 'TaillWindCSS', 'Youtube-API','React-Redux', 'Netlify'],
    },
    {
        title: "React-ChatBot",
        img: chatapp,
        description: "A chat application that lets you have realtime communication with your friends and anyone around the world. FOr user security, there is also end-to-end encryption",
        tech: ['ReactJS', 'Chat-Ui-Kit', 'TailWindCSS', 'Netlify', 'Chatbot'],
    },
    {
        title: "Snippet Generator",
        img: chatapp,
        description: "A chat application that lets you have realtime communication with your friends and anyone around the world. FOr user security, there is also end-to-end encryption",
        tech: ['ReactJS', 'TailwindCSS', 'React Hooks'],
    },
    {
        title: "QuizMantra",
        img: chatapp,
        description: "A chat application that lets you have realtime communication with your friends and anyone around the world. FOr user security, there is also end-to-end encryption",
        tech: ['ReactJS', 'Typescript', 'React Hooks', 'TailwindCSS'],
    },
    {
        title: "Solar System",
        img: chatapp,
        description: "A chat application that lets you have realtime communication with your friends and anyone around the world. FOr user security, there is also end-to-end encryption",
        tech: ['ThreeJS', '3-D Project', 'Responsive'],
    }
]
export {fskills, bskills, oskills, projects}