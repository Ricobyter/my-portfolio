import React from 'react'

const SkillCard = ({img, title, style}) => {
  return (
    <div className={`border-b-4 w-[38vw] md:w-[27vw] lg:w-[20vw] bg-[#111826] mt-4 h-[18vh] md:h-[20vh] lg:h-[240px]  shadow-sm ${style} rounded-lg flex flex-col justify-center items-center`}>
      <img src={img} alt="my skill"  className='h-50px'/>
        <h1 className='mt-2 lg:text-xl md:text-lg text-md font-semibold'>{title}</h1>
    </div>
//     <div className='h-[450px] border-2 border-black rounded-xl w-[300px] flex flex-col justify-center items-center'>
//     <div className='flex justify-center items-center w-full'>
//         <img src={img} alt="an image" width={20} height={20}/>
//     </div>
//     <h3 className='text-3xl'>{title}</h3>
// </div>
  )
}

export default SkillCard
