import React from 'react'
import '../assets/css/profile.css'
import Nav from './Nav'
import gmail from '../assets/images/gmail.svg'
import linkedn from '../assets/images/linkedn.svg'
import github from '../assets/images/github.svg'
import Next from '../assets/images/nextjs.png'
import Reactimg from '../assets/images/react.png'
import Tailwind from '../assets/images/tailwind.png'
import NodeJs from '../assets/images/nodejs.svg'
import MongoDB from '../assets/images/mongodb.svg'
import Firebase from '../assets/images/firebase.svg'
import Typescript from '../assets/images/typescript.png'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { motion } from 'framer-motion'



export default function Hero() {

  const textVariant = {
    initial: {
      x: -700,
      opacity: 0
    },
    animate: {
      x:0,
      opacity: 1,
      transition: {
        duration: 1.5,
        staggerChildren: 0.2
      }
    }
  }
  const slideVariant = {
    initial: {
      x: 700,
      opacity: 0
    },
    animate: {
      x:0,
      opacity: 1,
      transition: {
        duration: 2,
      }
    }
  }

  const upperVariant = {
    initial: {
      y: 300,
      opacity: 0
    },
    animate: {
      y:0,
      opacity: 1,
      transition: {
        duration: 1.5,
        staggerChildren: 0.2
      }
    }
  }

  const [text] = useTypewriter({
    words: ['Student', 'MERN Developer', 'Tech Enthusiast'],
    loop: {},
  })
  return (
    <div className='min-h-screen w-[90vw] lg:w-[1100px] tracking-wider text-white h-full overflow-hidden'>
      <div className='flex flex-col '>

      
      <div className='w-full flex justify-between mt-4 lg:mt-6 '>
        <h1 className='text-2xl md:text-2xl lg:text-3xl bg-gradient-to-r from-[#ff49db] to-[#7e5bef] bg-clip-text text-transparent'>Rico.dev</h1>
        <a href="#contacts">
          <button className='bg-gradient-to-r from-[#103CE7] to-[#C820EE]  font-montserrat text-white px-2 md:px-3 py-1 md:py-2 rounded-xl neon-purple hover:scale-105 duration-200 ease-in-out
        '>Contact Me</button>
        </a>
     
      </div>

      <div className=' h-[90vh] flex items-center justify-center'>
        <div className=''>
        <div className='flex flex-col lg:flex-row w-full  justify-center lg:pt-0  max-lg:h-[70vh]  items-center gap-16 md:gap-0'>
        <div className='w-[85vw] justify-center lg:justify-start lg:w-[75%] flex flex-row '>
          <motion.div className=' w-full lg:w-4/5' variants={textVariant} initial="initial" animate = "animate">
            <motion.h1 variants={textVariant} className='text-2xl md:text-2xl lg:text-3xl font-semibold mb-1 font-montserrat'>Hello! It's me 
            <motion.span className='bg-gradient-to-l from-[#ff49db] to-purple-500 bg-clip-text text-transparent ' variants={textVariant}> Dhruv Anand Singh. </motion.span>
            </motion.h1>
            < motion.span variants={textVariant} className=' text-xl md:text-3xl lg:text-3xl font-semibold mb-1 font-montserrat'>
              <motion.h1>
              
            I am a <motion.span className=' text-2xl md:text-3xl lg:text-4xl bg-gradient-to-l from-[#ff49db] to-purple-500 bg-clip-text text-transparent'>
               {text}
              </motion.span>
              <motion.span className='text-purple-700'>

              <Cursor />
              </motion.span>
              </motion.h1>
            </motion.span>
            

            <motion.div variants={textVariant} className='flex gap-5  items-center mt-3'>
              <motion.div variants={textVariant} className='flex gap-3 mt-2 h-[30px] justify-center items-center'>
                <a  href="https://www.linkedin.com/in/dhruv-anand-singh-b1b60426b/">
                  <motion.img variants={textVariant}  src={linkedn} alt="linkedn" className='h-[30px]' />
                </a>

                <motion.img variants={textVariant} src={gmail} alt="gmail" className='h-[30px]' />

                <a href="https://github.com/Ricobyter">
                  <motion.img variants={textVariant} src={github} alt="github" className='h-[30px]' />
                </a>
                <motion.div variants={textVariant} className='ml-5 '>
                  <a href="Resume.pdf" download='Resume.pdf'>
                    <button  className='bg-gradient-to-r from-[#6157ff] to-[#EE49FD] py-1 px-2 rounded-lg text-xl neon-purple hover:scale-110 duration-150 ease-in-out'>Resume</button></a>
                </motion.div>
              </motion.div> 
             </motion.div> 

          </motion.div>

        </div>
        <div className="lg:w-[25%] mt-4 md:mt-0 w-[95vw] flex justify-center items-center relative">

        <motion.div variants={slideVariant} initial="initial" animate="animate"
        >
          <motion.div variants={slideVariant} className="blob  neon-purple max-md:w-[200px] max-md:h-[200px] bg-[url('../assets/images/myImage.png')]" >
          </motion.div>

        </motion.div>
          </div>
        </div>
         <motion.div className='text-white flex mt-2 lg:mt-0  items-center' variants={upperVariant} initial="initial" animate="animate">
                <motion.h1 variants={upperVariant}  className=' text-md lg:text-xl font-semibold hidden md:block text-gray-300'>Tech Stack</motion.h1>
                <motion.p variants={upperVariant}  className='hidden text-gray-300 md:block ml-2'> | </motion.p>
                <motion.div variants={upperVariant}  className='ml-3 flex gap-3 max-lg:w-full justify-center items-center'>
                  <motion.img variants={upperVariant}  src={Next} alt="" className='h-[30px] lg:h-[50px]'/>
                  <motion.img variants={upperVariant}  src={Reactimg} alt="" className='h-[30px] lg:h-[40px]'/>
                  <motion.img variants={upperVariant}  src={Tailwind} alt="" className='h-[30px] lg:h-[40px]'/>
                  <motion.img variants={upperVariant}  src={MongoDB} alt="" className='h-[30px] lg:h-[40px]'/>
                  <motion.img variants={upperVariant}  src={Typescript} alt="" className='h-[30px] lg:h-[40px]'/>
                  <motion.img  variants={upperVariant} src={NodeJs} alt="" className='h-[30px] lg:h-[40px]'/>
                  <motion.img  variants={upperVariant} src={Firebase} alt="" className='h-[30px] lg:h-[40px]'/>
                </motion.div>

            </motion.div> 
            </div>

      </div>



      </div>

    </div>
  )
}

