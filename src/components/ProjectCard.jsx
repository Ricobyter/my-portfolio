import React from 'react'

export default function ProjectCard({title, description, img, tech}) {
  return (
    <div className='bg-black px-3 py-4 flex flex-col w-[25vw] rounded-md shadow-xl'>
        <div className='h-[190px]'>
        <img src={img} alt="" className='w-full h-full cover bg-no-repeat'/>
        </div>
        <div className='flex flex-col justify-center items-center h-full'>

        <p className='text-sm'>{description}</p>
        <div className='flex gap-1 flex-wrap mt-2'>
            {tech.map((t) => (
                <p className='px-2 py-1 bg-gray-800 rounded-xl text-sm'>{t}</p>
            ))}

      </div>
            </div>
    </div>
  )
}
