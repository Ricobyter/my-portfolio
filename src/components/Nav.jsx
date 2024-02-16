import React from 'react'
import {BiHomeAlt, BiUser, } from 'react-icons/bi'
import {BsClipboard, BsBriefcase, BsChatHeart } from 'react-icons/bs'

import {Link} from 'react-scroll'

const Nav = () => {
    return (


<nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50 text-white'>
    <div className='container mx-auto'>

    <div className='flex w-full bg-black/20 h-[66px] backdrop-blur-2xl rounded-full max-w-[450px] mx-auto justify-between items-center text-2xl px-5'>
        <a href="/" className='hover:text-[#8A2BE2] hover:border-b-2 hover:border-purple-600'><BiHomeAlt /></a>
        <a href="#about" className='hover:text-[#8A2BE2] hover:border-b-2 hover:border-purple-600'><BiUser /></a>
        <a href="#Projects" className='hover:text-[#8A2BE2] hover:border-b-2 hover:border-purple-600'><BsBriefcase /></a>
        <a href="#contact" className='hover:text-[#8A2BE2] hover:border-b-2 hover:border-purple-600'><BsChatHeart /></a>
    </div>
    </div>



</nav>

    )
}

export default Nav

