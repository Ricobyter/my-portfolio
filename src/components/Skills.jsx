import React, { useRef } from 'react'
import { Tabs, Tab } from './Tabs.jsx';
import CSS from '../assets/images/css.svg'
import Bootstrap from '../assets/images/bootstrap.svg'
import MaterialUi from '../assets/images/material-ui.svg'
import Javascript from '../assets/images/javascript.svg'
import Reactimg from '../assets/images/react.png'
import Mysql from '../assets/images/mysql.png'
import NodeJs from '../assets/images/nodejs.svg'
import MongoDB from '../assets/images/mongodb.svg'
import Firebase from '../assets/images/firebase.svg'
import Typescript from '../assets/images/typescript.png'
import Tailwind from '../assets/images/tailwind.png'
import PHP from '../assets/images/php.png'
import NextJS from '../assets/images/nextjs.png'
import Express from '../assets/images/express.png'
import VsCode from '../assets/images/vscode.png'
import Jupyter from '../assets/images/jupyter.png'
import Eclipse from '../assets/images/eclipse.png'
import Vercel from '../assets/images/vercelr.png'
import Figma from '../assets/images/figma.svg'
import Github from '../assets/images/github.svg'
import Git from '../assets/images/git.svg'
import Netlify from '../assets/images/netlify.svg'
import { motion, useScroll, useTransform } from 'framer-motion'


function Skills() {
  const textVariant = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 2,
        staggerChildren: 0.2
      }
    }
  }

  const ref = useRef(null)
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["end end", "end start"]
  })
  
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1])
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1.1])

  return (
    <div className='relative'>
      <div>
        <div className='flex gap-2 mb-20 text-white relative'>
          <motion.div className='w-full '
            // variants={textVariant} initial='initial' animate='animate'>
            ref={ref}
            style={{
               scale:scaleProgress,
               opacity:opacityProgress
            }}>
            <motion.h1 className='text-center text-sm mb-2 tracking-wide'>Learn more about</motion.h1>
            <motion.h1 className='text-4xl font-thin mb-2 text-center text-white tracking-wide'>My Skills </motion.h1>
          </motion.div>

        </div>
        <Tabs>
          <Tab label="FrontEnd" className='w-full'>
            <div className='grid-cols-2 md:grid-cols-3 lg:grid-cols-3 grid gap-x-10'>
              <div className='border-b-4 w-[38vw] md:w-[27vw] lg:w-[20vw] bg-[#111826] mt-4 h-[18vh] md:h-[20vh] lg:h-[240px]  shadow-sm border-[#1c9cec] rounded-lg flex flex-col justify-center items-center'>
                <img src={Typescript} alt="" className='h-[50px]' />
                <h1 className='mt-2 text-xl font-semibold'>Typescipt</h1>

              </div>

              <div className='border-b-4 w-[38vw] md:w-[27vw] lg:w-[20vw] bg-[#111826] mt-4 h-[18vh] md:h-[20vh] lg:h-[240px]  shadow-sm border-[#719fd7] rounded-lg flex flex-col justify-center items-center'>
                <img src={Reactimg} alt="" className='h-[50px]' />
                <h1 className='mt-2 text-xl font-semibold'>REACTJS</h1>
              </div>

              <div className='border-b-4 w-[38vw] md:w-[27vw] lg:w-[20vw] bg-[#111826] mt-4 h-[18vh] md:h-[20vh] lg:h-[240px]  shadow-sm border-[#cfcfcf] rounded-lg flex flex-col justify-center items-center'>
                <img src={NextJS} alt="" className='h-[50px]' />
                <h1 className='mt-2 text-xl font-semibold'>NextJS</h1>
              </div>

              <div className='border-b-4 w-[38vw] md:w-[27vw] lg:w-[20vw] bg-[#111826] mt-4 h-[18vh] md:h-[20vh] lg:h-[240px]  shadow-sm border-indigo-600 rounded-lg flex flex-col justify-center items-center'>
                <img src={Tailwind} alt="" className='h-[50px]' />
                <h1 className='mt-2 text-xl font-semibold'>TailwindCSS</h1>
              </div>

              <div className='border-b-4 w-[38vw] md:w-[27vw] lg:w-[20vw] bg-[#111826] mt-4 h-[18vh] md:h-[20vh] lg:h-[240px]  shadow-sm border-[#7c54bc] rounded-lg flex flex-col justify-center items-center'>
                <img src={Bootstrap} alt="" className='h-[50px]' />
                <h1 className='mt-2 text-xl font-semibold'>Bootstrap</h1>
              </div>


              <div className='border-b-4 w-[38vw] md:w-[27vw] lg:w-[20vw] bg-[#111826] mt-4 h-[18vh] md:h-[20vh] lg:h-[240px]  shadow-sm border-[#1cacec] rounded-lg flex flex-col justify-center items-center'>
                <img src={MaterialUi} alt="" className='h-[50px]' />
                <h1 className='mt-2 text-xl font-semibold'>MaterialUi</h1>
              </div>

              <div className='border-b-4 w-[38vw] md:w-[27vw] lg:w-[20vw] bg-[#111826] mt-4 h-[18vh] md:h-[20vh] lg:h-[240px]  shadow-sm border-[#fbd304] rounded-lg flex flex-col justify-center items-center'>
                <img src={Javascript} alt="" className='h-[50px]' />
                <h1 className='mt-2 text-xl font-semibold'>JavaScript</h1>
              </div>

              <div className='border-b-4 w-[38vw] md:w-[27vw] lg:w-[20vw] bg-[#111826] mt-4 h-[18vh] md:h-[20vh] lg:h-[240px]  shadow-sm border-[#0494e4] rounded-lg flex flex-col justify-center items-center'>
                <img src={CSS} alt="" className='h-[50px]' />
                <h1 className='mt-2 text-xl font-semibold'>CSS</h1>
              </div>

            </div>

          </Tab>
          <Tab label="Backend">
            <div className='grid-cols-2 md:grid-cols-3 lg:grid-cols-3 grid gap-x-10'>
              <div className='border-b-4 w-[38vw] md:w-[27vw] lg:w-[20vw] bg-[#111826] mt-4 h-[18vh] md:h-[20vh] lg:h-[240px]  shadow-sm border-[#64bc64] rounded-lg flex flex-col justify-center items-center'>
                <img src={MongoDB} alt="" className='h-[50px]' />
                <h1 className='mt-2 text-xl font-semibold'>MongoDB</h1>
              </div>

              <div className='border-b-4 w-[38vw] md:w-[27vw] lg:w-[20vw] bg-[#111826] mt-4 h-[18vh] md:h-[20vh] lg:h-[240px]  shadow-sm border-[#ffc404] rounded-lg flex flex-col justify-center items-center'>
                <img src={Firebase} alt="" className='h-[50px]' />
                <h1 className='mt-2 text-xl font-semibold'>Firebase</h1>
              </div>

              <div className='border-b-4 w-[38vw] md:w-[27vw] lg:w-[20vw] bg-[#111826] mt-4 h-[18vh] md:h-[20vh] lg:h-[240px]  shadow-sm border-[#4aa950] rounded-lg flex flex-col justify-center items-center'>
                <img src={NodeJs} alt="" className='h-[50px]' />
                <h1 className='mt-2 text-xl font-semibold'>NodeJS</h1>
              </div>

              <div className='border-b-4 w-[38vw] md:w-[27vw] lg:w-[20vw] bg-[#111826] mt-4 h-[18vh] md:h-[20vh] lg:h-[240px]  shadow-sm border-indigo-600 rounded-lg flex flex-col justify-center items-center'>
                <img src={Express} alt="" className='h-[50px]' />
                <h1 className='mt-2 text-xl font-semibold'>Express</h1>
              </div>


              <div className='border-b-4 w-[38vw] md:w-[27vw] lg:w-[20vw] bg-[#111826] mt-4 h-[18vh] md:h-[20vh] lg:h-[240px]  shadow-sm border-indigo-600 rounded-lg flex flex-col justify-center items-center'>
                <img src={Mysql} alt="" className='h-[50px]' />
                <h1 className='mt-2 text-xl font-semibold'>MySQL</h1>
              </div>

              <div className='border-b-4 w-[38vw] md:w-[27vw] lg:w-[20vw] bg-[#111826] mt-4 h-[18vh] md:h-[20vh] lg:h-[240px]  shadow-sm border-[#b4a4cc] rounded-lg flex flex-col justify-center items-center'>
                <img src={PHP} alt="" className='h-[50px]' />
                <h1 className='mt-2 text-xl font-semibold'>PHP</h1>
              </div>

            </div>
          </Tab>
          <Tab label="Tools">
            <div className='grid-cols-2 md:grid-cols-2 lg:grid-cols-3 grid gap-x-10'>
              <div className='border-b-4 w-[38vw] md:w-[27vw] lg:w-[20vw] bg-[#111826] mt-4 h-[18vh] md:h-[20vh] lg:h-[240px]  shadow-sm border-[#f8541c] rounded-lg flex flex-col justify-center items-center'>
                <img src={Git} alt="" className='h-[50px]' />
                <h1 className='mt-2 text-xl font-semibold'>Git</h1>

              </div>
              <div className='border-b-4 w-[38vw] md:w-[27vw] lg:w-[20vw] bg-[#111826] mt-4 h-[18vh] md:h-[20vh] lg:h-[240px]  shadow-sm border-[#4cd4e4] rounded-lg flex flex-col justify-center items-center'>
                <img src={Github} alt="" className='h-[50px]' />
                <h1 className='mt-2 text-xl font-semibold'>Github</h1>

              </div>
              <div className='border-b-4 w-[38vw] md:w-[27vw] lg:w-[20vw] bg-[#111826] mt-4 h-[18vh] md:h-[20vh] lg:h-[240px]  shadow-sm border-[#148cdc] rounded-lg flex flex-col justify-center items-center'>
                <img src={VsCode} alt="" className='h-[50px]' />
                <h1 className='mt-2 text-xl font-semibold'>VsCode</h1>

              </div>
              <div className='border-b-4 w-[38vw] md:w-[27vw] lg:w-[20vw] bg-[#111826] mt-4 h-[18vh] md:h-[20vh] lg:h-[240px]  shadow-sm border-[#f49c04] rounded-lg flex flex-col justify-center items-center'>
                <img src={Jupyter} alt="" className='h-[50px]' />
                <h1 className='mt-2 text-xl font-semibold'>Jupyter Notebook</h1>

              </div>
              <div className='border-b-4 w-[38vw] md:w-[27vw] lg:w-[20vw] bg-[#111826] mt-4 h-[18vh] md:h-[20vh] lg:h-[240px]  shadow-sm border-[#f4cc84] rounded-lg flex flex-col justify-center items-center'>
                <img src={Eclipse} alt="" className='h-[50px]' />
                <h1 className='mt-2 text-xl font-semibold'>EclipseIDE</h1>

              </div>
              <div className='border-b-4 w-[38vw] md:w-[27vw] lg:w-[20vw] bg-[#111826] mt-4 h-[18vh] md:h-[20vh] lg:h-[240px]  shadow-sm border-[#d8d8d8] rounded-lg flex flex-col justify-center items-center'>
                <img src={Vercel} alt="" className='h-[50px]' />
                <h1 className='mt-2 text-xl font-semibold'>Vercel</h1>

              </div>
              <div className='border-b-4 w-[38vw] md:w-[27vw] lg:w-[20vw] bg-[#111826] mt-4 h-[18vh] md:h-[20vh] lg:h-[240px]  shadow-sm border-[#34b0bc] rounded-lg flex flex-col justify-center items-center'>
                <img src={Netlify} alt="" className='h-[50px]' />
                <h1 className='mt-2 text-xl font-semibold'>Netlify</h1>

              </div>
              <div className='border-b-4 w-[38vw] md:w-[27vw] lg:w-[20vw] bg-[#111826] mt-4 h-[18vh] md:h-[20vh] lg:h-[240px]  shadow-sm border-[#e44c1c] rounded-lg flex flex-col justify-center items-center'>
                <img src={Figma} alt="" className='h-[50px]' />
                <h1 className='mt-2 text-xl font-semibold'>Figma</h1>

              </div>

            </div>
          </Tab>
        </Tabs>
      </div>
    </div>

  )
}

export default Skills
