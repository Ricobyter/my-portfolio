import project1 from '../assets/images/project1.png'
import project2 from '../assets/images/pro2.png'
import project3 from '../assets/images/pro3.png'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

function Projects() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"]
  })

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1])
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1])
  return (
    <div className='py-10 text-white w-[90vw] h-full lg:w-[1100px] flex tracking-wide flex-col items-center justify-center max-sm:mt-20' >
      <motion.div
        ref={ref}
        style={{
          scale: scaleProgress,
          opacity: opacityProgress
        }}
      >
        <motion.h1 className='text-sm text-center '>Browse My Recent</motion.h1>
        <motion.h1 className='text-5xl mt-2'>Projects</motion.h1>
      </motion.div>

      <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 lg:mt-12'>
        <motion.div
          className='h-[390px] px-2 w-[300px] border-2 rounded-2xl flex flex-col justify-center items-center'
          ref={ref}
          style={{
            scale: scaleProgress,
            opacity: opacityProgress
          }}>
          <img src={project1} alt="" className='object-cover bg-cover rounded-xl w-[230px] h-[65%] border-2 border-white' />
          <motion.div className='mt-8 flex justify-around gap-2'>
            <a href="https://github.com/Ricobyter/YoutubeClone.git">
              <button className='bg-gradient-to-r from-[#103CE7] to-[#C820EE] hover:scale-105 duration-200 flex py-2 justify-center items-center w-[120px] border-2 rounded-3xl'>Github</button>
            </a>
            <a href="https://youtube-clone-woad-eight.vercel.app/">
              <button className='bg-gradient-to-r from-[#103CE7] to-[#C820EE] hover:scale-105 duration-200 flex py-2 justify-center items-center w-[120px] border-2 rounded-3xl'>Website</button>
            </a>
          </motion.div>

        </motion.div>
        <motion.div className='h-[390px] px-2 w-[300px] border-2 rounded-2xl flex flex-col justify-center items-center'
          ref={ref}
          style={{
            scale: scaleProgress,
            opacity: opacityProgress
          }}
          viewport={{
            once: true
          }}>
          <img src={project2} alt="" className='object-cover bg-cover rounded-xl w-[250px] h-[65%] border-2 border-white' />
          <div className='mt-8 flex justify-around gap-2'>
            <a href="https://github.com/Ricobyter/react-chatbot.git">
              <button className='bg-gradient-to-r from-[#103CE7] to-[#C820EE] hover:scale-105 duration-200 flex py-2 justify-center items-center w-[120px] border-2 rounded-3xl'>Github</button>
            </a>
            <a href="https://prismatic-narwhal-de80c0.netlify.app/">
              <button className='flex py-2 justify-center items-center w-[120px] border-2 rounded-3xl bg-gradient-to-r from-[#103CE7] to-[#C820EE] hover:scale-105 duration-200'>Website</button>
            </a>
          </div>

        </motion.div>
        <motion.div className='h-[390px] px-2 w-[300px] border-2 rounded-2xl flex flex-col justify-center items-center'
          ref={ref}
          style={{
            scale: scaleProgress,
            opacity: opacityProgress
          }}
          viewport={{
            once: true
          }}>
          <img src={project3} alt="" className='object-cover bg-cover rounded-xl w-[250px] h-[65%] border-2 border-white' />
          <div className='mt-8 flex justify-around gap-2'>
            <a href="https://github.com/Ricobyter/Chat-app.git">
              <button className='bg-gradient-to-r from-[#103CE7] to-[#C820EE] hover:scale-105 duration-200 flex py-2 justify-center items-center w-[120px] border-2 rounded-3xl'>Github</button>
            </a>
            <a href="#">
              <button className='bg-gradient-to-r from-[#103CE7] to-[#C820EE] hover:scale-105 duration-200 flex py-2 justify-center items-center w-[120px] border-2 rounded-3xl'>Website</button>
            </a>
          </div>

        </motion.div>
      </div>

    </div>
  )
}




export default Projects
