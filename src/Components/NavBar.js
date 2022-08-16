import React, { useState,useContext,useEffect } from 'react'
import {Link} from 'react-scroll'
import * as Scroll from 'react-scroll';
import { motion, useAnimation } from "framer-motion";
import {FaBars,FaTimes, FaGithub,FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill,} from 'react-icons'
import Logo from '../Assets/w (1).png'
import { BlurContext } from '../App'

const NavBar = () => {
    let startingScroll = 0
    const context = useContext(BlurContext)

    const handleClick = () => context.setOpenPhoneMenu(!context.openPhoneMenu)

    const variant = {
        visible: {opacity:1, transform:'translateX(0vw)',
                transition: {duration:0.5,  ease: [0.545,0.045,0.355,1]  }
                 },
        hidden: {opacity:0, transform:'translateX(100vw)'},
    }


    const [scrollDir, setScrollDir] = useState("scrolling up");

    useEffect(() => {
      const threshold = 0;
      let lastScrollY = window.pageYOffset;
      let ticking = false;
    
      const updateScrollDir = () => {
        const scrollY = window.pageYOffset;
    
        if (Math.abs(scrollY - lastScrollY) < threshold) {
          ticking = false;
          return;
        }
        setScrollDir(scrollY > lastScrollY ? "scrolling down" : "scrolling up");
        lastScrollY = scrollY > 0 ? scrollY : 0;
        ticking = false;
      };
    
      const onScroll = () => {
        if (!ticking) {
          window.requestAnimationFrame(updateScrollDir);
          ticking = true;
        }
      };
    
      window.addEventListener("scroll", onScroll);
      console.log(scrollDir);
    
      return () => window.removeEventListener("scroll", onScroll);
    }, [scrollDir]);





  return (
    <div className='h-[80px] text-gray-300  w-full overflow-hidden  flex justify-between items-center px-4  bg-[#0a193f] flex-col z-10' 
    
    
    style={{position:scrollDir === 'scrolling up' ? 'fixed' : 'relative', top:0,boxShadow: '5px 5px 7px 2px #000000'}}
    
    
    >
        <div className='flex justify-between items-center w-full h-[80px] '>
            <img src={Logo} alt='Logo Image' style={{width:'80px'}} />
        
            <ul className='hidden md:flex'>
                <li className='font-nav-bar relative px-[1rem] cursor-pointer' id='home'>
                    <Link to='home-page' smooth={true} duration={500}>Home</Link>

                </li>
                <li className='font-nav-bar px-[1rem] relative z-10 cursor-pointer' id='about'> <Link to='about-page' offset={-100} smooth={true} duration={500} >About</Link></li>
                <li className='font-nav-bar px-[1rem] relative z-10 cursor-pointer' id='skills'> <Link to='skills-page' offset={-100} smooth={true} duration={500}>Skills</Link></li>
                <li className='font-nav-bar px-[1rem] relative z-10 cursor-pointer' id='work'> <Link to='projects' offset={-100} smooth={true} duration={500}>Work</Link></li>
                <li className='font-nav-bar px-[1rem] relative z-10 cursor-pointer' id='contact'> <Link to='contact-page' offset={-100} smooth={true} duration={500}>Contact</Link></li>
            </ul>
     
        {/*Hamburger menu  */}
        <div className='md:hidden z-10 cursor-pointer  ' onClick={handleClick}>
            {!context.openPhoneMenu && <FaBars style={{fontSize:'25px'}}/> }
        </div>
        </div>

        {/* menu items */}
     

        {/*Mobile Menu */}
       
                 <ul 
                 id='mobile-menu'
                 className={context.openPhoneMenu ? 'flex flex-col items-center fixed top-0 bottom-0 right-0 justify-center  w-[100%] h-screen  bg-[#0a193f] z-10 touch-none  translate-x-0    ' : ' translate-x-[50vw] ' }>
                    <FaTimes style={{position:'absolute',top:25,right:15,fontSize:'25px',cursor:'pointer',}} onClick={handleClick}/>
                <li className='py-6 text-2xl font-nav-bar cursor-pointer '> <Link to='home-page' smooth={true} duration={500} onClick={handleClick}>Home</Link></li>
                <li className='py-6 text-2xl font-nav-bar  cursor-pointer'><Link to='about-page' offset={-100} smooth={true} duration={500} onClick={handleClick} >About</Link></li>
                <li className='py-6 text-2xl font-nav-bar cursor-pointer'><Link to='skills-page' offset={-100} smooth={true} duration={500} onClick={handleClick}>Skills</Link></li>
                <li className='py-6 text-2xl font-nav-bar cursor-pointer'><Link to='projects' offset={-100} smooth={true} duration={500} onClick={handleClick}>Work</Link></li>
                <li className='py-6 text-2xl font-nav-bar cursor-pointer'><Link to='contact-page' offset={-100} smooth={true} duration={500} onClick={handleClick}>Contact</Link></li>
                <div className='flex flex-col fixed bottom-[30px] gap-5' >
                <div className='flex justify-center items-center gap-5 ' >
               
                    <li>
                         <a target='_blank' href='https://github.com/jeremychiaaaaa'  >
                         <svg style={{width:25,height:25}}  xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </a> 
                    </li>
                    <li >
                         <a target='_blank' href='https://www.instagram.com/jeremyychiaaaaa/'   >
                         <svg style={{width:25,height:25}} xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram"><title>Instagram</title><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </a> 
                    </li>
                    <li >
                         <a target='_blank' href='https://twitter.com/jemm111112'   >
                         <svg style={{width:25,height:25}} xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter"><title>Twitter</title><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                    </a> 
                    </li>
                    <li >
                         <a target='_blank' href='https://www.linkedin.com/in/jeremy-chia-650b64248/'  >
                         <svg  style={{width:25,height:25}} xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin"><title>LinkedIn</title><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </a> 
                    </li>
           
                  
                
            </div>
            <li>

            <a style={{margin:'20px auto', padding:10, fontSize:12, letterSpacing:'0.25em',}} className='font-nav-bar ' href='mailto: chiajeremy1@gmail.com'>chiajeremy1@gmail.com</a>
            </li>
                </div>
            </ul>
            


      
        
        {/*Social Menu*/}
            <div className='fixed w-[40px] bottom-0 left-[40px] z-[10]' id='social-media'>
                <ul className='md:flex flex-col items-center m-0 p-0 list-none hidden'>
                    <li className='hover:translate-y-[-3px] duration-[350ms] z-10 px-10  '>
                         <a target='_blank' href='https://github.com/jeremychiaaaaa' style={{padding:0}} className='icon' >
                         <svg style={{width:20,height:20}}  xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </a> 
                    </li>
                    <li className='hover:translate-y-[-3px] duration-[350ms]'>
                         <a target='_blank' href='https://www.instagram.com/jeremyychiaaaaa/'  style={{padding:10}}  className='icon'>
                         <svg style={{width:20,height:20}} xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram"><title>Instagram</title><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </a> 
                    </li>
                    <li className='hover:translate-y-[-3px] duration-[350ms]'>
                         <a target='_blank' href='https://twitter.com/jemm111112' style={{padding:0}}  className='icon'>
                         <svg style={{width:20,height:20}} xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter"><title>Twitter</title><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                    </a> 
                    </li>
                    <li className='linkedin-after' >
                    <a target='_blank' href='https://www.linkedin.com/in/jeremy-chia-650b64248/' style={{padding:10}}  className='icon'>
                    <svg  style={{width:20,height:20}} xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin"><title>LinkedIn</title><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </a> 
                    </li>
           
                  
                </ul>
            </div>

        {/*Email*/}
            <div   className='fixed w-[40px] bottom-0 right-[40px] z-10 hidden md:flex   ' id='email'>
                <div className='email'>
                    <a style={{margin:'20px auto', padding:10, fontSize:12, letterSpacing:'0.25em', writingMode:'vertical-rl'}} className='emaill' href='mailto: chiajeremy1@gmail.com'>chiajeremy1@gmail.com</a>
                </div>
            </div>

    </div>
  )
}

export default NavBar