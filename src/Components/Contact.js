import React, {useRef,useState,useEffect} from 'react'
import {AiOutlineSend} from 'react-icons/ai'
import {TiTick} from 'react-icons/ti'
import emailjs from '@emailjs/browser';
const Contact = () => {
    const form = useRef()
    const [showResult,setShowResult] = useState(false)
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_p71vicl', 'template_8jnhi0h', form.current, 'OaW7W4uzcp9i7rINB')
          .then((result) => {
            
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
        setShowResult(true)
          
          console.log(showResult)
      };

    useEffect(() => {
        if(showResult === true) {
          let timeout =  setTimeout(() => {
                setShowResult(false)
            },4000)
     
        }
  
    },[showResult])
     
  return (
    <div name='contact-page' className='w-full h-screen bg-[#0a193f]  flex justify-center items-center relative'>
         {
            showResult ? (
                <div className='absolute top-[20%] right-0 w-[full] pl-4   bg-gray-300 flex justify-center items-center  '>
                    <TiTick className='text-[rgb(255,87,51)] text-[50px] bg-white rounded-md]'  /> 
                <span className='font-body text-xl w-[100%] mx-4  py-4 '>Thankyou for your message. <br/> I will get back to you shortly !</span>
                </div>
            ) : <div/>
        }
        <form ref={form} onSubmit={sendEmail} className='flex flex-col sp:px-[100px] pp:mx-[30px]   max-w-[900px] w-full relative'>
            <div className='pb-8 text-gray-300'>
                <h2 className='text-4xl font-bold inline border-b-4 border-pink '>Contact</h2>
                <p className=' my-4 text-xl font-body md:w-[85%] '>// Feel free to submit the form below or contact me at my email : chiajeremy1@gmail.com </p>
            </div>
            <input className='bg-[#ccd6f6] p-2 font-body z-9' type='text' placeHolder='Name' name='fullName'   />
            <input className='bg-[#ccd6f6] p-2 font-body my-4 z-9' type='email' placeHolder='Email' name='email' />
            <textarea  className='bg-[#ccd6f6] p-2 font-body z-9 ' name='message' rows='10' placeHolder='Message' />

            <button className='text-white border-2 my-4 flex font-body text-xl  items-center bg-pink border-transparent rounded-[5px] px-4 py-3 mx-auto z-9 justify-center'>Send Message <AiOutlineSend className='ml-2 top-[2px] relative ' /></button>
           
        </form>

    </div>
  )
}



export default Contact