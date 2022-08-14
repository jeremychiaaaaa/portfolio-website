import React, {useState,useEffect,useContext} from 'react'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Profile from '../Assets/IMG_0193.JPG'
import { BlurContext } from '../App'
const AboutPage = () => {
    const context = useContext(BlurContext)
      const control = useAnimation()
      const [ref,inView] = useInView()
      
      const variant = {
        visible: {opacity:1,scale:1,transition: {duration:0.5,
        ease: [0.545,0.045,0.355,1]  
        
        },},
        hidden: {opacity:0,scale:0},
      }

      useEffect(() => {
        if(inView){
            control.start('visible')
        }
      },[control,inView])
  return (
    <div
    className='w-full h-screen bg-[#0a193f] text-gray-300   px-[30px]  mx-0 my-auto  '
   name='about-page'
   
    >

    
        <motion.div 
        
        variants={variant}
        initial='hidden'
        ref={ref}
        animate={control}
        
          transition={{ease: [0.545,0.045,0.355,1]  }}
        className='md:max-w-[80rem]  md:grid md:grid-cols-[60%_30%] md:px-[100px] md:gap-[60px] flex flex-col items-center justify-center ' style={{margin:'0 auto'}}>
       
       
         {/*About Me Section*/}
        <div className=' h-[100%] flex flex-col items-start justify-start relative w-[100%]'>
            <h2 className='text-4xl font-bold inline border-b-4 border-pink '>About Me</h2>
            <p className=' my-4 text-xl font-body md:w-[85%]'>
            Hello! I'm Jeremy and started programming from November 2021. I enjoy programming greatly as I enjoy tackling the various challenges while trying to built something from scratch.  <br/><br/>
             I specialize in creating Web and Mobile applications mainly focusing on the front-end. My main focus these days are on picking up more projects to improve my skills and at the same time learn new technologies. 
             <br/><br/>
             

            </p>
        </div>
        {/*Image Section*/}
        <div className='md:w-[100%] md:max-w-[400px] w-[70%] md:h-[300px] h-[100%] flex justify-center items-center relative  '>
        {/*Background absolute Image Section*/}
        <div className='absolute w-[100%] md:h-[300px] h-[100%] top-[20px] left-[20px] bg-[transparent] border-2 bg-[#333] border-[transparent] rounded-[8px]'>
 
        </div>
        {/*Actual Image Section*/}
        <div className='w-[100%]  rounded-[8px] relative overflow-hidden'> 
            <img src={Profile} className='w-[100%] md:h-[300px] h-[100%] object-cover object-top'  />
        </div>
        </div>
       
        </motion.div>

    </div>
  )
}

export default AboutPage