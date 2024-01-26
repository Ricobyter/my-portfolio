import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sticker from '../assets/images/sticker1.png'


function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cpeiaiv', 'template_1oop11r', form.current, '8bzCTOWR7dwKClKgd')
      .then((result) => {
          console.log(result.text);
          toast('Message successfully sent', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
            });
      }, (error) => {
          console.log(error.text);
          toast('An error occurred while sending the message');
      });
  };
  //template_5vh6jir

  return (
    <div className=' mt-20 text-white w-[850px] h-[95vw]'>
      <h1 className='text-3xl text-center font-montserrat'>Connect With<span className='text-red-600'> Me</span> </h1>
      <div className='mt-20 flex flex-row justify-between'>
        <div>
        <form ref={form} onSubmit={sendEmail} className='flex flex-col w-[500px]'>
      <label>Name</label>
      <input type="text" name="user_name" className='rounded-lg mb-3 py-1 px-2 outline-none text-black'/>
      <label>Email</label>
      <input type="email" name="user_email" className='rounded-lg mb-3 py-1 px-2 outline-none text-black' />
      <label>Message</label>
      <textarea name="message" className='h-[200px] rounded-lg py-1 px-2 outline-none mb-2 text-black'/>
      <input type="submit" value="Send" className='bg-red-400 text-white rounded-lg py-1 cursor-pointer'/>
    </form>

        </div>
        <div>
          <img src={Sticker} alt="Sticker" className='h-[300px]'/>
        </div>
      
      </div>
      <ToastContainer/>

    </div>
  )
}

export default Contact
