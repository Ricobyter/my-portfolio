import project1 from '../assets/images/project1.png'
import project2 from '../assets/images/pro2.png'
import project3 from '../assets/images/pro3.png'
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'

function Projects() {
  useEffect(() => {
    AOS.init({duration:1000}),
    AOS.refresh()
   }, [])

  return (
    <div className='py-10 text-white w-[90vw] h-full lg:w-[1100px] flex tracking-wide flex-col items-center justify-center max-sm:mt-20'  data-aos-once="true">
      < div data-aos='zoom-in'
      >
        < h1 className='text-sm text-center '>Browse My Recent</ h1>
        < h1 className='text-5xl mt-2'>Projects</ h1>
      </ div>

      <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 lg:mt-12' data-aos='fade-up' >
        < div
          className='h-[390px] px-2 w-[300px] border-2 rounded-2xl flex flex-col justify-center items-center'
          >
          <img src={project1} alt="" className='object-cover bg-cover rounded-xl w-[230px] h-[65%] border-2 border-white' />
          < div className='mt-8 flex justify-around gap-2'>
            <a href="https://github.com/Ricobyter/YoutubeClone.git">
              <button className='bg-gradient-to-r from-[#103CE7] to-[#C820EE] hover:scale-105 duration-200 flex py-2 justify-center items-center w-[120px] border-2 rounded-3xl'>Github</button>
            </a>
            <a href="https://youtube-clone-woad-eight.vercel.app/">
              <button className='bg-gradient-to-r from-[#103CE7] to-[#C820EE] hover:scale-105 duration-200 flex py-2 justify-center items-center w-[120px] border-2 rounded-3xl'>Demo</button>
            </a>
          </ div>

        </ div>
        < div className='h-[390px] px-2 w-[300px] border-2 rounded-2xl flex flex-col justify-center items-center'
          >
          <img src={project2} alt="" className='object-cover bg-cover rounded-xl w-[250px] h-[65%] border-2 border-white' />
          <div className='mt-8 flex justify-around gap-2'>
            <a href="https://github.com/Ricobyter/react-chatbot.git">
              <button className='bg-gradient-to-r from-[#103CE7] to-[#C820EE] hover:scale-105 duration-200 flex py-2 justify-center items-center w-[120px] border-2 rounded-3xl'>Github</button>
            </a>
            <a href="https://prismatic-narwhal-de80c0.netlify.app/">
              <button className='flex py-2 justify-center items-center w-[120px] border-2 rounded-3xl bg-gradient-to-r from-[#103CE7] to-[#C820EE] hover:scale-105 duration-200'>Demo</button>
            </a>
          </div>

        </ div>
        < div className='h-[390px] px-2 w-[300px] border-2 rounded-2xl flex flex-col justify-center items-center'
          >
          <img src={project3} alt="" className='object-cover bg-cover rounded-xl w-[250px] h-[65%] border-2 border-white' />
          <div className='mt-8 flex justify-around gap-2'>
            <a href="https://github.com/Ricobyter/Chat-app.git">
              <button className='bg-gradient-to-r from-[#103CE7] to-[#C820EE] hover:scale-105 duration-200 flex py-2 justify-center items-center w-[120px] border-2 rounded-3xl'>Github</button>
            </a>
            <a href="#">
              <button className='bg-gradient-to-r from-[#103CE7] to-[#C820EE] hover:scale-105 duration-200 flex py-2 justify-center items-center w-[120px] border-2 rounded-3xl'>Demo</button>
            </a>
          </div>

        </ div>
      </div>
      <div className='mt-8'>
        <Link to= "/projects">
        <button className='bg-gradient-to-r from-[#103CE7] to-[#C820EE] hover:from-[#C820EE] hover:to-[#103CE7] hover:scale-105 duration-200 text-xl px-4  flex py-2 justify-center items-center  rounded-xl'>More Projects</button>
        </Link>
      </div>

    </div>
  )
}




export default Projects
