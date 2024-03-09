import project1 from '../assets/images/project1.png'
import project2 from '../assets/images/project2.png'
import project3 from '../assets/images/project3.png'
import React from 'react'

function Projects() {
  return (
    <div className='py-10 text-white w-[90vw] h-full lg:w-[1100px] flex tracking-wide flex-col items-center justify-center'>
      <h1 className='text-md text-center font-semibold'>Browse My Recent</h1>
      <h1 className='text-5xl mt-2'>Projects</h1>

      <div className='flex gap-10 mt-12'>
        <div className='h-[420px] w-[320px] border-2 rounded-2xl flex flex-col justify-center items-center'>
          <img src={project1} alt="" className='object-cover bg-cover rounded-xl w-[250px] h-[65%] border-2 border-white'/>
           <div className='mt-8 flex justify-around gap-8'>
              <button className='flex py-2 justify-center items-center w-[120px] border-2 rounded-3xl'>Github</button>
              <button className='flex py-2 justify-center items-center w-[120px] border-2 rounded-3xl'>Live Demo</button>
           </div>

        </div>
        <div className='h-[420px] w-[320px] border-2 rounded-2xl flex flex-col justify-center items-center'>
          <img src={project2} alt="" className='object-cover bg-cover rounded-xl w-[250px] h-[65%] border-2 border-white'/>
           <div className='mt-8 flex justify-around gap-8'>
              <button className='flex py-2 justify-center items-center w-[120px] border-2 rounded-3xl'>Github</button>
              <button className='flex py-2 justify-center items-center w-[120px] border-2 rounded-3xl'>Live Demo</button>
           </div>

        </div>
        <div className='h-[420px] w-[320px] border-2 rounded-2xl flex flex-col justify-center items-center'>
          <img src={project3} alt="" className='object-cover bg-cover rounded-xl w-[250px] h-[65%] border-2 border-white'/>
           <div className='mt-8 flex justify-around gap-8'>
              <button className='flex py-2 justify-center items-center w-[120px] border-2 rounded-3xl'>Github</button>
              <button className='flex py-2 justify-center items-center w-[120px] border-2 rounded-3xl'>Live Demo</button>
           </div>

        </div>
      </div>
      
    </div>
  )
}




export default Projects
