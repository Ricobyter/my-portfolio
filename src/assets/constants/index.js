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
        description: "Experience seamless real-time communication with MERN Chat App, a robust and feature-rich chat application built with MongoDB, Express, React, and Node.js.",
        tech: ['ReactJS', 'NodeJS', 'MongoDB', 'Socket.io', 'React-Styled-Elements', 'React-Toastify', 'CryptoJS'],
    },
    {
        title: "Realtime-Youtube Clone",
        img: chatapp,
        description: "Discover and enjoy videos with YouTube Clone, a fully-functional video streaming platform that replicates the core features of YouTube.",
        tech: ['ReactJS', 'TaillWindCSS', 'Youtube-API','React-Redux', 'Netlify'],
    },
    {
        title: "React-ChatBot",
        img: chatapp,
        description: " Enhance customer interactions with Chatbot, an intelligent virtual assistant made with the help of OpenAI designed to provide instant support and streamline communication",
        tech: ['ReactJS', 'Chat-Ui-Kit', 'TailWindCSS', 'Netlify', 'Chatbot'],
    },
    {
        title: "Snippet Generator",
        img: chatapp,
        description: "Quickly create and manage reusable code snippets with VsCode Snippet Generator, the ultimate tool for developers to boost productivity and efficiency",
        tech: ['ReactJS', 'TailwindCSS', 'React Hooks'],
    },
    {
        title: "QuizMantra",
        img: chatapp,
        description: " Test your knowledge and have fun with QuizMantra, an engaging platform offering a variety of quizzes on numerous topics for all ages.",
        tech: ['ReactJS', 'Typescript', 'React Hooks', 'TailwindCSS'],
    },
    {
        title: "SnakeGame",
        img: chatapp,
        description: " Test your knowledge and have fun with QuizMantra, an engaging platform offering a variety of quizzes on numerous topics for all ages.",
        tech: ['HTML', 'CSS', 'VanilaJS'],
    },
    {
        title: "Solar System",
        img: chatapp,
        description: " Explore the cosmos with 3D Solar System, an interactive model of our solar system created using Three.js, bringing space to life in stunning detail.",
        tech: ['ThreeJS', '3-D Project', 'Responsive'],
    }
]
export {fskills, bskills, oskills, projects}