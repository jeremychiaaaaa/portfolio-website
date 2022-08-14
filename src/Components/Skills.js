import React, {useState,useEffect} from 'react'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CSS from '../Assets/css.png'
import FireBase from '../Assets/firebase.png'
import Html from '../Assets/html.png'
import JavaScript from '../Assets/javascript.png'
import Node from '../Assets/node.png'
import ReactPicture from '../Assets/react.png'
import Solidity from '../Assets/solidity.png'
import SQL from '../Assets/sql.png'

function Skills() {
  const control = useAnimation()
  const [ref,inView] = useInView()
  
  const variant = {
    visible: {opacity:1,scale:1,transition: {duration:0.25,
    ease: [0.545,0.045,0.355,1]  
    
    },},
    hidden: {opacity:0,scale:0},
  }
  const variant1 = {
    visible: {opacity:1,scale:1,transition: {duration:0.25,
      delay:0.1,
      ease: [0.545,0.045,0.355,1]  
      
      },},
      hidden: {opacity:0,scale:0},
  }
  const variant2 = {
    visible: {opacity:1,scale:1,transition: {duration:0.25,
      delay:0.2,
      ease: [0.545,0.045,0.355,1]  
      
      },},
      hidden: {opacity:0,scale:0},
  }
  const variant3 = {
    visible: {opacity:1,scale:1,transition: {duration:0.25,
      delay:0.3,
      ease: [0.545,0.045,0.355,1]  
      
      },},
      hidden: {opacity:0,scale:0},
  }
  const variant4 = {
    visible: {opacity:1,scale:1,transition: {duration:0.25,
      delay:0.4,
      ease: [0.545,0.045,0.355,1]  
      
      },},
      hidden: {opacity:0,scale:0},
  }
  const variant5 = {
    visible: {opacity:1,scale:1,transition: {duration:0.25,
      delay:0.5,
      ease: [0.545,0.045,0.355,1]  
      
      },},
      hidden: {opacity:0,scale:0},
  }
  const variant6 = {
    visible: {opacity:1,scale:1,transition: {duration:0.25,
      delay:0.6,
      ease: [0.545,0.045,0.355,1]  
      
      },},
      hidden: {opacity:0,scale:0},
  }
  const variant7 = {
    visible: {opacity:1,scale:1,transition: {duration:0.25,
      delay:0.7,
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
    <div name='skills-page' className=' bg-[#0a193f] text-gray-300 px-[30px] py-[40px]  '>
        <motion.div className=' md:h-screen h-screen top-[30px] md:top-[0] md:px-[100px] relative md:max-w-[80rem] md:mx-auto flex-col flex justify-start items-start'>
           <h2 className='text-4xl font-bold inline border-b-4 border-pink  '>My Skills</h2>
          <h4 className='text-xl font-body text-left my-2'>// These are the skills and frameworks I have worked with..</h4>
      
 
         <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <motion.div 
          variants={variant}
          animate={control}
          initial='hidden'
          ref={ref}
          className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 z-9 relative' >
            <img src={Html} className='w-20 mx-auto my-4' alt='HTML Icon' />
            <h2 className='my-4 font-body font-bolder tracking-[0.3rem] '>HTML</h2>
           
          </motion.div>

          <motion.div
          variants={variant1}
          animate={control}
          initial='hidden'
          ref={ref}

          className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 z-9 relative'>
            <img src={CSS} className='w-20 mx-auto my-4' alt='HTML Icon' />
            <h2 className='my-4 font-body font-bolder tracking-[0.3rem] '>CSS</h2>
            
          </motion.div>
          <motion.div
          variants={variant2}
          animate={control}
          initial='hidden'
          ref={ref}
          className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 z-9'>
            <img src={JavaScript} className='w-20 mx-auto my-4' alt='HTML Icon' />
            <h2 className='my-4 font-body font-bolder tracking-[0.3rem] '>Java Script</h2>
          </motion.div>
          <motion.div 
          variants={variant3}
          animate={control}
          initial='hidden'
          ref={ref}
          className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 z-9'>
            <img src={Node} className='w-20 mx-auto my-4' alt='HTML Icon' />
            <h2 className='my-4 font-body font-bolder tracking-[0.3rem] '>Node js</h2>
          </motion.div>
          <motion.div
          variants={variant4}
          animate={control}
          initial='hidden'
          ref={ref}
          className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 z-9'>
            <img src={FireBase} className='w-20 mx-auto my-4 ' alt='HTML Icon' />
            <h2 className='my-4 font-body font-bolder tracking-[0.3rem] '>Firebase</h2>
          </motion.div>
          <motion.div 
          variants={variant5}
          animate={control}
          initial='hidden'
          ref={ref}
          className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 z-9'>
            <img src={Solidity} className='w-20 mx-auto my-4 h-20' alt='HTML Icon' />
            <h2 className='my-4 font-body font-bolder tracking-[0.3rem] '>Solidity</h2>
          </motion.div>
          <motion.div 
          variants={variant6}
          animate={control}
          initial='hidden'
          ref={ref}
          className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 z-9'>
            <img src={SQL} className='w-20 mx-auto my-4' alt='HTML Icon' />
            <h2 className='my-4 font-body font-bolder tracking-[0.3rem] '>SQL</h2>
          </motion.div>
          <motion.div 
          variants={variant7}
          animate={control}
          initial='hidden'
          ref={ref}
          className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 z-9'>
            <img src={ReactPicture} className='w-20 mx-auto my-4' alt='HTML Icon' />
            <h2 className='my-4 font-body font-bolder tracking-[0.3rem] '>React</h2>
          </motion.div>

         </div>
        </motion.div>
        


    </div>
  )
}

export default Skills