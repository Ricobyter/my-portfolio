import React from 'react'

const Nav = () => {
    return (


<nav className='flex pt-4 justify-between w-[1200px]'>
    <h1 className='text-3xl text-blue-600 font-bold'>Rico.dev</h1>

    <div className='flex gap-10 text-xl'>
        <a href="/" className='hover:text-[#8A2BE2] hover:border-b-2 hover:border-purple-600'>Portfolio</a>
        <a href="#about" className='hover:text-[#8A2BE2] hover:border-b-2 hover:border-purple-600'>About Me</a>
        <a href="#Projects" className='hover:text-[#8A2BE2] hover:border-b-2 hover:border-purple-600'>Projects</a>
        <a href="#contact" className='hover:text-[#8A2BE2] hover:border-b-2 hover:border-purple-600'>Contact Me</a>
    </div>



</nav>

    )
}

export default Nav

