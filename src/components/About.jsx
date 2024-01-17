import React from 'react'
import pokemon from '../assets/images/lucario.gif'

function About() {
  return (
    <div className='text-white h-[100vh] pt-4'>
      <h1 className='text-3xl text-center'>About Me</h1>
      <div className='flex gap-4 h-full justify-center items-center'>
        <div className='w-2/5'>
       <img src={pokemon} alt="" className='h-[300px]'/>
        </div>
        <div className='w-3/5'>
        <p className='text-2xl'>
          Hey there! I'm Dhruv Anand Singh. You can also call me Rico. I'm just your friendly neighborhood MERN Stack Developer. I get a kick out of building awesome web apps with MongoDB, Express.js, React, and Node.js. When I'm not in coding mode, you might find me hustling on the badminton court or just chilling with my favorite tunes .

And here's the fun part, I'm an absolute Pokémon geek! The Pokémon world is like my escape pod. Let's team up, bring some cool ideas to life, and enjoy the journey together. Can't wait to chat and create something amazing! 🌟🎸
         </p>
        </div>

      </div>
    </div>
  )
}

export default About
