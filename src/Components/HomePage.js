import React, { useState,useContext, useEffect } from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { BlurContext } from '../App'
import {Link} from 'react-scroll'
import AnimatedLetters from './AnimatedLetters'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
const HomePage = () => {
    const context = useContext(BlurContext)
    const [letterClass,setLetterClass] = useState('text-animate')
    const nameArray = ['J','e','r','e','m','y',' ','C','h','i','a']
    



    useEffect(() => {
           setTimeout(() => {
          return setLetterClass('text-animate-hover')
        },3000)
        console.log(letterClass)
    },[])
    
  return (    
    
    <div  
    name='home-page'
    
    className='bg-[#0a193f] w-full h-screen relative px-[30px] py-0 mx-0 my-auto '>
  
      
       
        <div id='container' className='flex  max-w-[90rem] md:px-[100px]   justify-center items-center mx-0 my-auto   '>
           
           
            <div  className='md:w-[80%] h-screen flex flex-col justify-center items-start'>
                <h1 id='hi'>
                  <span className='text-pink md:text-[1.6rem] font-hey text-[1.4rem] ' style={{letterSpacing:'0.04em'}}>Hey, my name is</span> 
                <br/>

                <AnimatedLetters  letterClass={letterClass} strArray={nameArray} idx={19}  />
                </h1>
               
                

                <span id='label' className='my-[15px] text-[#8892b0] font-bold text-[1.7rem] md:text-4xl'>I'm A Full Stack Developer</span>
                <p id='description' className='md:w-[55%] font-body text-[#8892b0]'>I'm a self-taught full stack developer that mainly specialize in front-end development both on mobile and the web. Currently, I'm focused on building more full-stack applications to add to my portfolio !</p>
                <div className='my-3' id='home-button'>
                  <Link to='projects' spy={true} smooth={true} duration={500} >
                  <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink hover:border-pink rounded-md' >View Work 
                  <span className='group-hover:rotate-90 duration-300'> {/*group is used on the button here to ensure animation happens across the box */}
                  <HiArrowNarrowRight className='ml-3 '/>
                  </span>
                  </button>
                  </Link>
                </div>
            </div>
        </div>     
  
    </div>
  )
}

export default HomePage