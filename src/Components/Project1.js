import React, {useState,useEffect} from 'react'
import { motion, useAnimation } from "framer-motion";


import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

import KynHomeScreen from '../Assets/KynHomeScreen.png'
import KynManifesto from '../Assets/KynManifesto.png'
import KynSanctuary from '../Assets/KynSanctuary.png'
import FireBase from '../Assets/firebase.png'

import Redux from '../Assets/react-redux-1.png'
import ReactPicture from '../Assets/react.png'
import KynArt from '../Assets/KynArtPage.png'
import KynTeam from '../Assets/KynTeam.png'
import KynDreamMap from '../Assets/KynDreamMap.png'


export const Project1 = () => {
    const[phone,setPhone] = useState(window.matchMedia("(max-width: 768px)").matches)

    useEffect(() => {
      
      window.matchMedia("(max-width: 768px)").addEventListener('change', e => setPhone(e.matches))
    },[])


        return(
            <div className='lg:w-full w-screen px-[15px] pp:h-screen h-full pp:grid-cols-[100%] pp:grid-rows-[35%_60%]  grid grid-cols-[75%] grid-rows-[60vh_40vh]  lg:grid lg:grid-cols-12  lg:gap-x-[2rem] my-4 lg:h-[75vh]  pb-[40px] border-b-2 border-gray-600 overflow-hidden' >
           <div className='w-full mx-auto sp:row-span-8 lg:h-[65vh] lg:col-span-8  flex justify-start items-center
            bg-[rgb(173,216,230)]'>
            <Carousel
                        animation= 'slide'
                        duration={400}
                        navButtonsAlwaysVisible={true}
                        stopAutoPlayOnHover={false}
                        autoPlay={false}
                        swipe={true}
                 
            >

                    <div className='w-full h-full flex flex-col justify-center items-center'>

                    <div className='w-[100%] lg:w-full h-full md:pt-[7%] px-4 pt-6 '>
                     <img src={KynHomeScreen} alt='screen shot KynHomeScreen' className='object-cover lg:object-contain h-[100%] ' />
                </div>
 
                   
                 </div>
                 <div className='w-full h-full flex flex-col justify-center items-center'>

                 <div className='w-[100%] lg:w-full h-full md:pt-[7%] px-4 pt-6 '>
                     <img src={KynArt} className='object-cover lg:object-contain h-[100%]  ' alt='screen shot KynArt'/>
                </div>



                </div>
                  <div className='w-full h-full flex flex-col justify-center items-center'>

                <div className='w-[100%] lg:w-full h-full md:pt-[7%] px-4 pt-6 '>
                     <img src={KynManifesto} className='object-cover lg:object-contain h-[100%] ' alt='screen shot KynManifesto'/>
                </div>



                </div>
                <div className='w-full h-full flex flex-col justify-center items-center'>

                <div className='w-[100%] lg:w-full h-full md:pt-[7%] px-4 pt-6 '>
                     <img src={KynSanctuary} className='object-cover lg:object-contain h-[100%] ' alt='screen shot KynSanctuary' />
                </div>



                </div>
                <div className='w-full h-full flex flex-col justify-center items-center'>

                <div className='w-[100%] lg:w-full h-full md:pt-[7%] px-4 pt-6 '>
                     <img src={KynDreamMap} className='object-cover lg:object-contain h-[100%] ' alt='screen shot KynDreamMap' />
                </div>



                </div>
                <div className='w-full h-full flex flex-col justify-center items-center'>

                <div className='w-[100%] lg:w-full h-full md:pt-[7%] px-4 pt-6 '>
                     <img src={KynTeam} className='object-cover h-[100%] lg:object-contain ' alt='screen shot KynTeam' />
                </div>



                </div>      

               



               
            </Carousel>

            
           </div>
           <div className='w-full sp:w-[75%] col-span-4 h-full flex flex-col justify-start items-start relative sp:my-4'>
                <div className='flex justify-between items-center w-full md:my-0 my-4 px-[15px] md:px-0'>
                <h2 className='md:text-4xl text-2xl font-bold flex  gap-3  '><span className='md:text-4xl text-pink '>01.</span> KYN</h2>

                <div className='flex'>
                   
                <a  className='flex px-[10px] py-[10px]' style={{cursor: 'pointer',zIndex:9}} target="_blank" href='https://github.com/jeremychiaaaaa/deploymentw' id='icon'>
                 <svg xmlns="http://www.w3.org/2000/svg" style={{height:25,width:25,}} role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>  
                </a>
                <a className='flex px-[10px] py-[10px]' style={{cursor: 'pointer',zIndex:9}} target="_blank" href='https://kynnft.com' id='icon'>
                <svg xmlns="http://www.w3.org/2000/svg" style={{height:25,width:25,}} role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                 </a>
                 </div>
                </div>
                <div className='sp:flex  sp:items-center   '>
                    <p className='font-body md:my-10 leading-[30px] px-[15px] md:px-0 sp:w-[90%]' >
              KYN is an NFT project where as  tech lead I am responsible for both the website and the smart contracts used during minting in the future. 
              For this website, I used <span className='font-name text-pink font-bold text-2xl'>React</span> with react-router-dom to create a multi-tab website where each page showcases different aspects of the project.
              
               <br/><br/>
               
                
                </p>
               
          
               
                
                </div>
            </div>
        </div>
        )




}