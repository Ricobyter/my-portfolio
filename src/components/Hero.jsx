import React from 'react'
import '../assets/css/profile.css'
import Nav from './Nav'
import gmail from '../assets/images/gmail.svg'
import linkedn from '../assets/images/linkedn.svg'
import github from '../assets/images/github.svg'


function hero() {
  return (
    <div className='min-h-screen w-[1100px]  text-white'>
      <div>
        <Nav />
      </div>

      <div className='flex gap-2 justify-around items-center h-[90vh]'>
        <div className='w-4/5 flex justify-center items-center '>
          <div className='w-3/5'>
            <h1 className='text-3xl font-semibold mb-1'>Hi! My name is <span className='bg-gradient-to-r from-[#ff49db] to-[#7e5bef] bg-clip-text text-transparent'>Dhruv Anand Singh</span></h1>
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
              <div className='ml-5'>
                <a href="Resume.pdf" download='Resume.pdf'><button className='bg-blue-700 py-1 px-2 rounded-md text-xl'>Resume</button></a>
                
              </div>
</div>

            </div>

          </div>



        </div>
        <div className="w-1/5 ml-0">
          <div className="blob bg-[url('src/assets/images/linkednprofile.jpeg')]" >

          </div>

        </div>

      </div>



    </div>
  )
}

export default hero
