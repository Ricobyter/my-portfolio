import React from 'react'
import hello from '../assets/images/robot.gif'

function About() {
  return (
    <div className='text-white h-[100vh] w-[1100px] '>
      <div className='flex gap-2'>
      <h1 className='text-5xl text-left font-montserrat'>About Me </h1>
      <div className='border-white border-b-2 w-[800px] opacity-30'></div>

      </div>

      <div className='flex  h-full items-center justify-center'>
        <div className='w-2/5'>
       <img src={hello} alt="" className='h-[500px] '/>
        </div>
        <div className='w-3/5'>
        <p className='text-2xl '>
          Hey there! I'm Dhruv Anand Singh. You can also call me <span className='text-blue-500'>Rico</span>. I'm just your friendly neighborhood <span className='text-pink-600'>MERN</span> Stack Developer. 
          I get a kick out of building awesome web apps. When I'm not in coding mode, you might find me hustling on the <span className='text-red-600'>badminton</span> court or just chilling with my favorite tunes .
          <br />

I'm an absolute <span className='text-green-500'>Pokemon </span>geek! The Pokémon world is like my escape pod. Let's team up, bring some cool ideas to life, and enjoy the journey together. Can't wait to chat and create something <span className='text-orange-600'>amazing!</span> 🌟🎸
         </p>
        </div>

      </div>
    </div>
  )
}

export default About
