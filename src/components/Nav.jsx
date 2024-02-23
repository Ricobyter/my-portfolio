import React from 'react'
import {BiHomeAlt, BiUser, } from 'react-icons/bi'
import { BsBriefcase, BsChatHeart } from 'react-icons/bs'
import '../assets/css/nav.css'

import {Link} from 'react-scroll'

const Nav = () => {
    return (


<nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50 text-white/50'>
    <div className='container mx-auto'>

    <div className='flex w-full bg-black/20 h-[66px] backdrop-blur-2xl rounded-full max-w-[450px] mx-auto justify-between  text-2xl px-5'>
        <Link activeClass='active'
        spy={true}
        smooth={true}
        to='/'  
        className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:p-[1rem] hover:rounded-full hover:bg-pink-500 hover:text-white'><BiHomeAlt /></Link>

        <Link activeClass='active'
        spy={true}
        smooth={true}
        to='about' 
        className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:p-[1rem] hover:rounded-full hover:bg-pink-500 hover:text-white'><BiUser/></Link>

        <Link activeClass='active'
        spy={true}
        smooth={true}
        to='projects'

        className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:p-[1rem] hover:rounded-full hover:bg-pink-500 hover:text-white'><BsBriefcase/></Link>

        <Link activeClass='active'
        spy={true}
        smooth={true}
        to='contacts' 
        className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:p-[1rem] hover:rounded-full hover:bg-pink-500 hover:text-white'><BsChatHeart/></Link>
        
    </div>
    </div>



</nav>

    )
}

export default Nav

