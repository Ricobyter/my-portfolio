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



function hero() {
  return (
    <div className='min-h-screen w-[90vw] lg:w-[1100px]  text-white '>
      <div className='flex flex-col gap-2'>

      
      <div className='w-full flex justify-between mt-4 lg:mt-6 '>
        <h1 className='text-2xl md:text-2xl lg:text-3xl bg-gradient-to-r from-[#ff49db] to-[#7e5bef] bg-clip-text text-transparent'>Rico.dev</h1>
        <button className='bg-gradient-to-r from-[#ed5b5b] to-[#410bf1] font-montserrat text-white px-2 md:px-3 py-1 md:py-2 rounded-xl neon-purple
        '>Contact Me</button>
     
      </div>

      <div className=' h-[90vh]'>
        <div className='flex flex-col lg:flex-row w-full  justify-center max-md:h-[70vh] items-center gap-20'>
        <div className='w-[80vw] justify-center lg:justify-start lg:w-4/5 flex flex-row items-center'>
          <div className=' w-full lg:w-3/5'>
            <h1 className='text-2xl md:text-2xl lg:text-3xl font-semibold mb-1 font-montserrat'>Hi! I am <span className='bg-gradient-to-l from-[#ff49db] to-purple-500 bg-clip-text text-transparent '>Dhruv Anand Singh</span></h1>
            <p className='text-sm md:text-xl lg:text-2xl'>I am a passionate MERN Developer from India who loves to explore new things.</p>
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
                  <a href="Resume.pdf" download='Resume.pdf'><button className='bg-gradient-to-r from-[#ff49db] to-[#7e5bef] py-1 px-2 rounded-lg text-xl neon-purple'>Resume</button></a>

                </div>
              </div> 
              

             </div> 
            {/* <div className='text-white flex mt-[3rem] justify-between items-center'>
                <h1 className=' text-sm lg:text-xl font-semibold'>Tech Stack</h1>
                <p> | </p>
                <div className='ml-3 flex gap-3'>
                  <img src={Next} alt="" className='h-[30px] lg:h-[50px]'/>
                  <img src={Reactimg} alt="" className='h-[30px] lg:h-[40px]'/>
                  <img src={Tailwind} alt="" className='h-[30px] lg:h-[40px]'/>
                  <img src={MongoDB} alt="" className='h-[30px] lg:h-[40px]'/>
                  <img src={Typescript} alt="" className='h-[30px] lg:h-[40px]'/>
                  <img src={NodeJs} alt="" className='h-[30px] lg:h-[40px]'/>
                  <img src={Firebase} alt="" className='h-[30px] lg:h-[40px]'/>
                </div>

            </div> */}
          

          </div>

        </div>
        <div className="lg:w-1/5 mt-4 md:mt-0 w-[95vw] flex justify-center items-center">
          <div className="blob bg-[url('src/assets/images/linkednprofile.jpeg')] neon-purple max-md:w-[200px] max-md:h-[200px]" >

          </div>

        </div>
        </div>
         <div className='text-white flex mt-[3rem]  items-center'>
                <h1 className=' text-sm lg:text-xl font-semibold hidden md:block'>Tech Stack</h1>
                <p className='hidden md:block'> | </p>
                <div className='ml-3 flex gap-3'>
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
  )
}

export default hero
