import React, {useState,useEffect} from 'react'
import { motion, useAnimation } from "framer-motion";
import {BsPlayBtn} from 'react-icons/bs'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import ReactPlayer from 'react-player'
import FireBase from '../Assets/firebase.png'
import ReactPicture from '../Assets/react.png'
import Video1 from '../Videos/trial1.mp4'
import Redux from '../Assets/react-redux-1.png'
import ProfilePage from '../Assets/profile_page_ss.png'
import ViewAppointment from '../Assets/view_appointments_ss.png'
import BookAppointment from '../Assets/book_appt_ss.png'
import LandingPage from '../Assets/landing_ss.png'
import DoctorPage from '../Assets/doctor_page_ss.png'
import EHomeScreen from '../Assets/home_screen_ss.png'
import TravelHub1 from '../Assets/travelhub-1.png'
import TravelHub2 from '../Assets/travelhub-2.png'
import TravelHub3 from '../Assets/travelhub-3.png'
export const Project2 = () => {

    const[phone,setPhone] = useState(window.matchMedia("(max-width: 768px)").matches)
    
    const [playing,setPlaying] = useState(-1)
    const [light,setLight] = useState(true)
    const [clickImage,setClickImage] = useState(false)
    const blurStyle = {
        filter: 'blur(4px)',
      transform: 'scale(0.8) translateX(10px)'
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
                  
                    <div style={{width:'100%',height:'100%',position:'absolute',top:'7%',display:'flex', flexDirection:'column'}}>
                    <div className='w-[100%] lg:w-full mx-auto h-full grid  grid-cols-3 md:gap-[10px] md:px-[10%] md:py-9 '>
                

                    {doctorApp.filter((i,index) => index<3 && index >=0).map((i,index) => (
                        <div className='flex flex-col justify-center items-center '>
                        <span className='md:text-2xl text-md text-black font-footer md:pb-4 pp:my-2 flex justify-center items-center cursor-pointer' 
                        onClick={() => {
                            setClickImage(!clickImage)
                           playing === -1 ? setPlaying(index) : setPlaying(-1)
                            
                        }}>
                            {i.title}
                            <BsPlayBtn className='ml-4'  /> 
                        </span>
                        <ReactPlayer url={i.video} playing={playing === index ? true : false} loop={true}
                         width={'100%'} height={'100%'} 
                        light={playing === index ? '' : i.src}
                         style={clickImage ? playing === index ? '' : blurStyle : ''}   
                        /> 
                       </div>
    
                    ))}


                  
                   </div>
                </div>
                   
                  

               
               
                <div className='w-full h-full flex flex-col justify-center items-center '>
               
                <div className='w-[100%] lg:w-full mx-auto h-full grid  grid-cols-3 md:gap-[10px] md:px-[10%] md:py-9 ' >
                {doctorApp.filter((i,index)=>index<3&&index>=0).map((i,index) => (
                     <div className='flex flex-col justify-center items-center '>
                     <span className='md:text-2xl text-md text-black font-footer md:pb-4 pp:my-2 '>{i.title}</span>
                     <img src={i.src} alt='screenshot' className='object-cover w-[95%] pp:w-[90%] pp:pt-2 '  />  
                     </div>
                ))}

                
                </div>
                </div>
                <div className='w-full h-full flex flex-col justify-center items-center '>
               
               <div className='w-[100%] lg:w-full mx-auto h-full grid  grid-cols-3 md:gap-[10px] md:px-[10%] md:py-9 ' >
               {doctorApp.filter((i,index)=>index<6 && index >= 3).map((i,index) => (
                    <div className='flex flex-col justify-center items-center '>
                    <span className='md:text-2xl text-md text-black font-footer md:pb-4 pp:my-2 '>{i.title}</span>
                    <img src={i.src} alt='screenshot' className='object-cover w-[95%] pp:w-[90%] pp:pt-2 '  />  
                    </div>
               ))}

               
               </div>
               </div>
                
               <div className='w-full h-full flex flex-col justify-center items-center '>
               
               <div className='w-[100%] lg:w-full mx-auto h-full grid  grid-cols-3 md:gap-[10px] md:px-[10%] md:py-9 ' >
               {doctorApp.filter((i,index)=>index<9&&index>=6).map((i,index) => (
                    <div className='flex flex-col justify-center items-center '>
                    <span className='md:text-2xl text-md text-black font-footer md:pb-4 pp:my-2 '>{i.title}</span>
                    <img src={i.src} alt='screenshot' className='object-cover w-[95%] pp:w-[90%] pp:pt-2 '  />  
                    </div>
               ))}

               
               </div>
               </div>
               
            </Carousel>
            
           </div>
           <div className='w-full sp:w-[75%]  col-span-4 h-full flex flex-col justify-start items-start relative sp:my-4'>
                <div className='flex justify-between items-center w-full md:my-0 my-4 px-[15px] md:px-0'>
                <h2 className='md:text-4xl text-2xl font-bold flex  gap-3  '><span className='md:text-4xl text-pink '>02.</span> MEDAPP</h2>
                <div className='flex'>
                <a  className='flex px-[10px] py-[10px]' style={{cursor: 'pointer',zIndex:9}} id='icon' target="_blank" href='https://github.com/jeremychiaaaaa/medical-app' >
                 <svg xmlns="http://www.w3.org/2000/svg" style={{height:25,width:25,marginLeft:30}} role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>  
                </a>
              
                 </div>
                </div>
                <div className='sp:flex  sp:items-center   '>
                    <p className='font-body md:my-10 leading-[30px] px-[15px] md:px-0 sp:w-[90%]' >
                MEDAPP is an app used to book doctor appointments online as well as an all-in-one travel hub . FASHION was built with<br/> <span className='font-name text-pink font-bold text-2xl'>React Native</span> &nbsp; to showcase my front-end development understanding of mobile app design. 
                I used &nbsp;  <span className='font-name text-pink font-bold text-2xl'>FireBase</span>&nbsp;  for user authentication and for storing user data such as appointments booked and documents uploaded. I also used  &nbsp; <span className='font-name text-pink font-bold text-2xl'>Redux</span> &nbsp; to help manage my state variables globally as 
                this project has many interconnected component stacks.
                
                
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



const doctorApp = [
    {
        id:'1',
        src:LandingPage,
        title:'Welcome',
        video:Video1,
    },
    {
        id:'2',
        src:EHomeScreen,
        title:'Home',
        video:Video1,
    },
    {
        id:'3',
        src:DoctorPage,
        title:'Doctor',
        video:Video1,
    },
    {
        id:'4',
        src:ProfilePage,
        title:'Profile'
    },
    {
        id:'5',
        src:BookAppointment,
        title:'Booking'
    },
    {
        id:'6',
        src:ViewAppointment,
        title:'Appointment'
    },
    {
        id:'7',
        src:TravelHub1,
        title:'Travel Hub(1)'
    },
    {
        id:'8',
        src:TravelHub2,
        title:'Travel Hub(2)'
    },
    {
        id:'9',
        src:TravelHub3,
        title:'Travel Hub(3)'
    },
]