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
    <div className='min-h-screen w-[1100px]  text-white '>
      <div className='w-full flex justify-between mt-2 lg:mt-4 '>
        <h1 className='text-3xl '>Rico.dev</h1>
        <button className='bg-blue-700 text-white px-3 py-2 rounded-xl'>Contact Me</button>
     
      </div>

      <div className='flex w-full justify-between items-center h-[90vh]'>
        <div className='w-4/5 flex items-center '>
          <div className='w-3/5'>
            <h1 className='text-3xl font-semibold mb-1 font-montserrat'>Hi! My name is <span className='bg-gradient-to-r from-[#ff49db] to-[#7e5bef] bg-clip-text text-transparent'>Dhruv Anand Singh</span></h1>
            <p className='text-2xl'>I am a passionate MERN Developer from India who loves to explore new things.</p>
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
                  <a href="Resume.pdf" download='Resume.pdf'><button className='bg-gradient-to-r from-[#ff49db] to-[#7e5bef] py-1 px-2 rounded-lg text-xl'>Resume</button></a>

                </div>
              </div>
              

            </div>
            <div className='text-white flex mt-[3rem] justify-between items-center'>
                <h1 className='text-xl font-semibold'>Tech Stack</h1>
                <p> | </p>
                <div className='ml-3 flex gap-3'>
                  <img src={Next} alt="" className='h-[50px]'/>
                  <img src={Reactimg} alt="" className='h-[40px]'/>
                  <img src={Tailwind} alt="" className='h-[40px]'/>
                  <img src={MongoDB} alt="" className='h-[40px]'/>
                  <img src={Typescript} alt="" className='h-[40px]'/>
                  <img src={NodeJs} alt="" className='h-[40px]'/>
                  <img src={Firebase} alt="" className='h-[40px]'/>
                </div>

            </div>
          

          </div>

        </div>
        <div className="w-1/5">
          <div className="blob bg-[url('src/assets/images/linkednprofile.jpeg')] neon-purple" >

          </div>

        </div>

      </div>



    </div>
  )
}

export default hero
