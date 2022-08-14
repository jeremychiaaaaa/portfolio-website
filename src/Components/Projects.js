import React, {} from 'react'
import { motion, useAnimation } from "framer-motion";
import { Element } from 'react-scroll';
import { Project1 } from './Project1';
import { Project2 } from './Project2';
import { Project3 } from './Project3';
function Projects() {




    






  return (
    <Element name='projects' className='bg-[#0a193f] text-gray-300  '>
        <motion.div className='w-full h-fit flex flex-col justify-start items-start md:w-full md:max-w-[90rem] mx-auto md:px-[100px] relative top-[30px] md:top-0 scroll-smooth '>
        <h2 className='text-4xl font-bold inline border-b-4 border-pink mx-[30px]  '>My Work</h2>
        <h4 className='text-xl font-body text-left my-2 mx-[30px] '>// These are some of the past projects that I have worked on in the past couple months </h4>
        <Project1/>

        <Project2 />
       
        <Project3 />
       
        </motion.div>


    </Element>
  )
}

export default Projects













