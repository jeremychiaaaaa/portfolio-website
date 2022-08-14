import React, {useState,useEffect} from 'react'
import { motion, useAnimation } from "framer-motion";
import ReactPlayer from 'react-player'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import {BsPlayBtn,BsPauseBtn,BsStopBtn} from 'react-icons/bs'


import FireBase from '../Assets/firebase.png'
import HomeScreenVideo from '../Videos/home-screen-recording.mp4'
import AddReviewVideo from '../Videos/add-review-recording.mp4'
import ProductScreenVideo from '../Videos/product-screen-recording.mp4'
import CheckOutRecording from '../Videos/check-out-recording.mp4'
import ReactPicture from '../Assets/react.png'

import HomeScreen from '../Assets/e-home-screen.png'
import HomeScreen2 from '../Assets/e-home-screen02.png'
import AddReview from '../Assets/e-add-review.png'
import AllProduct from '../Assets/e-all-product.png'
import CheckOut02 from '../Assets/e-checkout02.png'
import CheckOut01 from '../Assets/e-checkout01.png'
import DiscoverScreen from '../Assets/e-discover-screen.png'
import InstaStory from '../Assets/e-insta-story.png'
import PastOrderScreen from '../Assets/e-past-order-screen.png'
import ProductDetails from '../Assets/e-product-details.png'
import ProductReview from '../Assets/e-product-review.png'
import ProductScreen from '../Assets/e-product-screen.png'
import Profile from '../Assets/e-profile.png'

import Redux from '../Assets/react-redux-1.png'

export const Project3 = () => {
    const[phone,setPhone] = useState(window.matchMedia("(max-width: 768px)").matches)
  
    const [playing,setPlaying] = useState(-1)
    const [light,setLight] = useState(true)
    const [clickImage,setClickImage] = useState(false)

    const videoStyle = {
        transform: 'translateX(-10px)'
    }
    const placeHolderStyle = {
        transform: 'translateY(5px) scale(1.02)'
    }
    useEffect(() => {
      
      window.matchMedia("(max-width: 768px)").addEventListener('change', e => setPhone(e.matches))
    },[])


    return(
        <div className='lg:w-full lg:h-[80vh] w-screen px-[15px] pp:h-screen h-full pp:grid-cols-[100%] pp:grid-rows-[50%_40%]  grid grid-cols-[75%] grid-rows-[60vh_40vh]  lg:grid lg:grid-cols-12  lg:gap-x-[2rem] my-4   pb-[40px] border-b-2 border-gray-600 overflow-hidden' >
        <div className='w-full mx-auto sp:row-span-8 lg:h-[75vh] lg:col-span-8   flex justify-start items-center
         bg-[rgb(173,216,230)]'>
         <Carousel
                     animation= {phone ? 'slide' :'fade' }
                     duration={400}
                     navButtonsAlwaysVisible={true}
                     stopAutoPlayOnHover={false}
                     autoPlay={false}
                     swipe={true}
              
         >
              <div className='w-full h-full relative flex flex-col justify-center items-center '>
                
                <div className='w-[100%] lg:w-full mx-auto h-full grid  grid-cols-3 md:gap-[10px] md:px-[10%] md:py-9 ' >

                {fashionScreenShot.filter((i,index)=>index<3&&index>=0).map((i,index) => (
                     <div className='flex flex-col justify-center items-center h-full '>
                     <span className='md:text-2xl text-md text-black font-footer md:pb-4 pp:my-2 flex items-center gap-2 cursor-pointer ' 
                     onClick={() => {
                       playing === -1 ? setPlaying(index) : setPlaying(-1)
                        console.log(playing)
                     }}
                     
                     >{i.title} {index === 1 ? playing === 1 ? <BsStopBtn /> : <BsPlayBtn /> : null }</span>
                    
                     {index === 1 ? 
                     
                      <ReactPlayer url={i.video} playing={playing === 1 ? true : false} loop={true}
                         width={'100%'}  height={phone  ? playing === index ? '95%' : '62%' : '65%'}
                        light={playing === index ? '' : i.src}
                            
                        
                         style={phone ? playing === 1 ? videoStyle : placeHolderStyle:''}
                        /> :     
                         <img src={i.src} alt='screenshot' className='object-contain h-[65%] w-[95%] pp:w-[90%] pp:pt-2 ' style={{filter: playing === 1 ? 'blur(4px)' : 'blur(0)', transform: playing === 1 ? 'scale(0.8)' : 'scale(1)'}} />  }
                     </div>
                ))}

                
                </div>
                </div>
                <div className='w-full h-full relative flex flex-col justify-center items-center '>
                
                <div className='w-[100%] lg:w-full mx-auto h-full grid  grid-cols-3 md:gap-[10px] md:px-[10%] md:py-9 ' >

                {fashionScreenShot.filter((i,index)=>index<6&&index>=3).map((i,index) => (
                     <div className='flex flex-col justify-center items-center h-full '>
                     <span className='md:text-2xl text-md text-black font-footer md:pb-4 pp:my-2 flex items-center gap-2 cursor-pointer ' 
                     onClick={() => {
                       playing === -1 ? setPlaying(3) : setPlaying(-1)
                        console.log(playing)
                     }}
                     
                     >{i.title} {index === 1 ? playing === 3 ? <BsStopBtn /> : <BsPlayBtn /> : null }</span>
                    
                     {index === 1 ? 
                     
                      <ReactPlayer url={i.video} playing={playing === 3 ? true : false} loop={true}
                         width={'100%' } height={phone  ? playing === 3 ? '95%' : '62%' : '65%'}
                        light={playing === 3 ? '' : i.src}
                        style={phone ? playing === 3 ? videoStyle : placeHolderStyle:''}
                        
                        /> :     
                         <img src={i.src} alt='screenshot' className='object-contain h-[65%] w-[95%] pp:w-[90%] pp:pt-2 ' style={{filter: playing === 3 ? 'blur(4px)' : 'blur(0)', transform: playing === 3 ? 'scale(0.8)' : 'scale(1)'}} />  }
                     </div>
                ))}

                
                </div>
                </div>
                <div className='w-full h-full relative flex flex-col justify-center items-center '>
                
                <div className='w-[100%] lg:w-full mx-auto h-full grid  grid-cols-3 md:gap-[10px] md:px-[10%] md:py-9 ' >

                {fashionScreenShot.filter((i,index)=>index<9&&index>=6).map((i,index) => (
                     <div className='flex flex-col justify-center items-center h-full '>
                     <span className='md:text-2xl text-md text-black font-footer md:pb-4 pp:my-2 flex items-center gap-2 cursor-pointer ' 
                     onClick={() => {
                       playing === -1 ? setPlaying(2) : setPlaying(-1)
                        console.log(playing)
                     }}
                     
                     >{i.title} {index === 1 ? playing === 2 ? <BsStopBtn /> : <BsPlayBtn /> : null }</span>
                    
                     {index === 1 ? 
                     
                      <ReactPlayer url={i.video} playing={playing === 2 ? true : false} loop={true}
                         width={'100%'}  height={phone  ? playing === 2 ? '95%' : '62%' : '65%'}
                        light={playing === 2 ? '' : i.src}
                         
                        style={phone ? playing === 2 ? videoStyle : placeHolderStyle:''}
                        
                        /> :     
                         <img src={i.src} alt='screenshot' className='object-contain h-[65%] w-[95%] pp:w-[90%] pp:pt-2 ' style={{filter: playing === 2 ? 'blur(4px)' : 'blur(0)', transform: playing === 2 ? 'scale(0.8)' : 'scale(1)'}} />  }
                     </div>
                ))}

                
                </div>
                </div>
                <div className='w-full h-full relative flex flex-col justify-center items-center '>
                
                <div className='w-[100%] lg:w-full mx-auto h-full grid  grid-cols-3 md:gap-[10px] md:px-[10%] md:py-9 ' >

                {fashionScreenShot.filter((i,index)=>index<12&&index>=9).map((i,index) => (
                     <div className='flex flex-col justify-center items-center h-full '>
                     <span className='md:text-2xl text-md text-black font-footer md:pb-4 pp:my-2 flex items-center gap-2 cursor-pointer ' 
                     onClick={() => {
                       playing === -1 ? setPlaying(4) : setPlaying(-1)
                        console.log(playing)
                     }}
                     
                     >{i.title} {index === 1 ? playing === 4 ? <BsStopBtn /> : <BsPlayBtn /> : null }</span>
                    
                     {index === 1 ? 
                     
                      <ReactPlayer url={i.video} playing={playing === 4 ? true : false} loop={true}
                         width={'100%'} height={phone  ? playing === 4 ? '95%' : '62%' : '65%'}
                        light={playing === 4 ? '' : i.src}
                        
                        style={phone ? playing === 4 ? videoStyle : placeHolderStyle:''}
                       
                        
                        
                        /> :     
                         <img src={i.src} alt='screenshot' className='object-contain h-[65%] w-[95%] pp:w-[90%] pp:pt-2 ' style={{filter: playing === 4 ? 'blur(4px)' : 'blur(0)', transform: playing === 4 ? 'scale(0.8)' : 'scale(1)'}} />  }
                     </div>
                ))}

                
                </div>
                </div>
         </Carousel>
         
        </div>
        <div className='w-full sp:w-[75%] col-span-4 h-full flex flex-col justify-start items-start relative sp:my-4'>
             <div className='flex justify-between items-center w-full md:my-0 my-4 px-[15px] md:px-0'>
             <h2 className='md:text-4xl text-2xl font-bold flex  gap-3  '><span className='md:text-4xl text-pink '>03.</span> FASHION</h2>
             <div className='flex'>
             <a  className='flex px-[10px] py-[10px]' style={{cursor: 'pointer',zIndex:9}} id='icon'  target="_blank" href='https://github.com/jeremychiaaaaa/ecomerce-app-'>
              <svg xmlns="http://www.w3.org/2000/svg" style={{height:25,width:25,}} role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>  
             </a>
            
              </div>
             </div>
             <div className='sp:flex  sp:items-center   '>
                 <p className='font-body md:my-10 leading-[30px] px-[15px] md:px-0 sp:w-[90%]' >
             FASHION is a full-stack mock-up of ecommerce apps such as ASOS and ZALORA .  
             FASHION was built using<br/> <span className='font-name text-pink font-bold text-2xl'>React Native</span>&nbsp; framework  with a heavier emphasis on the functionality of the app rather than the UI.<br/>
            <span className='font-name text-pink font-bold text-2xl'>FireBase</span>&nbsp;was used in this app for storing user data such as user authentication, cart items, addresses, credit cards etc with the help of Firestore functions.
            
             
             
             
             <br/><br/>
        
             
             
             </p>
            {/*   <div className='flex flex-col lg:my-4 sp:w-[25%] sp:gap-3 sp:ml-1 translate-y-[-30px] '>
          
                <div className='flex sp:flex-col gap-2 pp:my-8 pp:ml-4 '>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 px-2 z-10 my-2 pp:w-[25%] pp:py-4'>
            <img src={ReactPicture} className='lg:w-20 mx-auto lg:my-4 sp:w-9 ' alt='HTML Icon' />
            <h2 className='lg:my-4 font-body font-bolder tracking-[0.3rem] pp:text-[14px] w-[100%] text-center sp:my-2'>React Native</h2>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 z-10 my-2 px-2 pp:w-[25%] pp:py-4'>
            <img src={FireBase} className='lg:w-20 mx-auto lg:my-4 sp:w-9 ' alt='HTML Icon' />
            <h2 className='lg:my-4 font-body font-bolder tracking-[0.3rem] pp:text-[14px] text-center sp:my-2'>Firebase</h2>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 z-10 my-2 px-2 pp:w-[25%] pp:py-4'>
            <img src={Redux} className='lg:w-20 mx-auto lg:my-4 sp:w-9 ' alt='HTML Icon' />
            <h2 className='lg:my-4 font-body font-bolder tracking-[0.3rem] pp:text-[14px] text-center sp:my-2 '>Redux</h2>
          </div>
                </div>
               </div> */}
             
             </div>
         </div>
     </div>
    )


}


const fashionScreenShot = [
    {
        id:'1',
        src:HomeScreen2,
        title:'Explore'
    },
    {
        id:'2',
        src:HomeScreen,
        title:'Home',
        video:HomeScreenVideo
    },
    {
        id:'3',
        src:DiscoverScreen,
        title:'Discover'
    },
    {
        id:'4',
        src:InstaStory,
        title:'Stories'
    },
    {
        id:'5',
        src:ProductScreen,
        title:'Products',
        video:ProductScreenVideo
    },
    {
        id:'6',
        src:ProductDetails,
        title:'Details'
    },
    {
        id:'7',
        src:ProductReview,
        title:'Reviews',
        
    },
    {
        id:'8',
        src:CheckOut01,
        title:'CheckOut',
        video:CheckOutRecording
    },
    {
        id:'9',
        src:CheckOut02,
        title:'CheckOut(2)',
       
    },
    {
        id:'10',
        src:AddReview,
        title:'Rate'
    },

    {
        id:'11',
        src:PastOrderScreen,
        title:'Orders',
         video:AddReviewVideo
    },

    {
        id:'12',
        src:Profile,
        title:'Profile'
    },

    
]