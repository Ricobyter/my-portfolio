import React from 'react'
import hello from '../assets/images/robot.gif'
import profileimg from '../assets/images/profileimg.jpg'

function About() {
  return (
    <div className='lg:w-[1100px] w-[85vw] py-20 text-white'>
      <div className='flex lg:flex  gap-10 '>
        <div className='w-[50vw]'>
          <img src={profileimg} alt="" className='bg-center w-full  object-cover h-[350px]  rounded-lg border-2 neon-purple' />
        </div>
        <div className=' '>
          <h1 className='text-5xl  mb-8'>About Me</h1>
          <div className='tracking-wide leading-relaxed'>
            <p className='mb-2'>
              I am a Sophomore year CSE student from from IIITDM Jabalpur. I hail from the religious capital of India, Varanasi.
            </p>
            <p className='mb-2'>
              I am a passionate developer who loves to code and learn new technologies. I am a quick learner and a team player. I am always open to new ideas and love to work on new projects.
            </p>
            <p >
              Coding isn't just a profession for me; it's a canvas where I blend logic with creativity to craft solutions. Whether it's tinkering with front-end designs or diving deep into back-end algorithms, every line of code I write is a step towards innovation and problem-solving.
            </p>
            <div className='mt-3'>

              <button className='rounded-lg px-2 py-1 text-md border-2 capitalize border-purple-600'>Download CV</button>
            </div>
          </div>
        </div>


      </div>
      <div className='w-full flex flex-grow justify-between mt-6'>
        <div>
          <div className='flex flex-grow justify-between mb-1 text-white'>

            <p className='capitalize'>Hard Work</p>
            <p className='text-gray-100'>75%</p>
          </div>
          <div className='bg-gray-700 w-[400px] h-[4px] border-1 rounded-lg my-3'>
            <div className='bg-purple-600 h-full w-[75%]'></div>
          </div>
        </div>
        <div>
          <div className='flex justify-between mb-1 text-white'>

            <p className='capitalize'>Web Development</p>
            <p className='text-gray-100'>85%</p>
          </div>
          <div className='bg-gray-700 w-[400px] h-[4px] border-1 rounded-lg my-3'>
            <div className='bg-purple-600 h-full w-[69%]'></div>
          </div>
        </div>
      </div>
      <div className='w-full flex flex-grow justify-between'>
        <div>
          <div className='flex justify-between mb-1 text-white'>

            <p className='capitalize'>Creativity</p>
            <p className='text-gray-100'>79%</p>
          </div>
          <div className='bg-gray-700 w-[400px] h-[4px] border-1 rounded-lg my-3'>
            <div className='bg-purple-600 h-full w-[79%]'></div>
          </div>
        </div>
        <div>
          <div className='flex justify-between mb-1 text-white'>

            <p className='capitalize'>Fun Loving</p>
            <p className='text-gray-100'>90%</p>
          </div>
          <div className='bg-gray-700 w-[400px] h-[4px] border-1 rounded-lg my-3'>
            <div className='bg-purple-600 h-full w-[90%] rounded-lg border-1'></div>
          </div>
        </div>
      </div>


    </div >
  )
}

export default About
