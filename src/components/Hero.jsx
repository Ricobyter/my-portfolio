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



export default function Hero() {

  const [text] = useTypewriter({
    words: ['Student', 'MERN Developer', 'Tech Enthusiast'],
    loop: {},
  })
  return (
    <div className='min-h-screen w-[90vw] lg:w-[1100px] tracking-wider text-white '>
      <div className='flex flex-col gap-2'>

      
      <div className='w-full flex justify-between mt-4 lg:mt-6 '>
        <h1 className='text-2xl md:text-2xl lg:text-3xl bg-gradient-to-r from-[#ff49db] to-[#7e5bef] bg-clip-text text-transparent'>Rico.dev</h1>
        <a href="#contacts">
          <button className='bg-gradient-to-r from-[#103CE7] to-[#C820EE] via-[#6157] font-montserrat text-white px-2 md:px-3 py-1 md:py-2 rounded-xl neon-purple
        '>Contact Me</button>
        </a>
     
      </div>

      <div className=' h-[90vh] flex items-center justify-center'>
        <div className=''>
        <div className='flex flex-col lg:flex-row w-full  justify-center lg:pt-0  max-lg:h-[70vh]  items-center gap-16 md:gap-0'>
        <div className='w-[85vw] justify-center lg:justify-start lg:w-[75%] flex flex-row '>
          <div className=' w-full lg:w-4/5'>
            <h1 className='text-2xl md:text-2xl lg:text-3xl font-semibold mb-1 font-montserrat'>Hello! It's me <span className='bg-gradient-to-l from-[#ff49db] to-purple-500 bg-clip-text text-transparent '> Dhruv Anand Singh. </span>
            </h1>
            <span className=' text-3xl md:text-3xl lg:text-4xl font-semibold mb-1 font-montserrat'>
              <h1>
              
            I am a <span className='bg-gradient-to-l from-[#ff49db] to-purple-500 bg-clip-text text-transparent'>
               {text}
              </span>
              <span className='text-purple-700'>

              <Cursor />
              </span>
              </h1>
            </span>
            

            <div className='flex gap-5  items-center mt-3'>
              <div className='flex gap-3 mt-2 h-[30px] justify-center items-center'>
                <a href="https://www.linkedin.com/in/dhruv-anand-singh-b1b60426b/">
                  <img src={linkedn} alt="linkedn" className='h-[30px]' />
                </a>

                <img src={gmail} alt="gmail" className='h-[30px]' />

                <a href="https://github.com/Ricobyter">
                  <img src={github} alt="github" className='h-[30px]' />
                </a>
                <div className='ml-5 '>
                  <a href="Resume.pdf" download='Resume.pdf'><button className='bg-gradient-to-r from-[#6157ff] to-[#EE49FD] py-1 px-2 rounded-lg text-xl neon-purple hover:scale-110 duration-150 ease-in-out'>Resume</button></a>

                </div>
              </div> 
              

             </div> 

          </div>

        </div>
        <div className="lg:w-[25%] mt-4 md:mt-0 w-[95vw] flex justify-center items-center">
          <div className="blob bg-[url('src/assets/images/linkednprofile.jpeg')] neon-purple max-md:w-[200px] max-md:h-[200px]" >

          </div>

        </div>
        </div>
         <div className='text-white flex mt-2 lg:mt-0  items-center'>
                <h1 className=' text-md lg:text-xl font-semibold hidden md:block text-gray-300'>Tech Stack</h1>
                <p className='hidden text-gray-300 md:block ml-2'> | </p>
                <div className='ml-3 flex gap-3 max-lg:w-full justify-center items-center'>
                  <img src={Next} alt="" className='h-[30px] lg:h-[50px]'/>
                  <img src={Reactimg} alt="" className='h-[30px] lg:h-[40px]'/>
                  <img src={Tailwind} alt="" className='h-[30px] lg:h-[40px]'/>
                  <img src={MongoDB} alt="" className='h-[30px] lg:h-[40px]'/>
                  <img src={Typescript} alt="" className='h-[30px] lg:h-[40px]'/>
                  <img src={NodeJs} alt="" className='h-[30px] lg:h-[40px]'/>
                  <img src={Firebase} alt="" className='h-[30px] lg:h-[40px]'/>
                </div>

            </div> 
            </div>

      </div>



      </div>

    </div>
  )
}

