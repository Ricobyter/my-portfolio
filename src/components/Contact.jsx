// import dotenv from 'dotenv'  
// require(dotenv).config();
import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos'
import 'aos/dist/aos.css'

function Contact() {
  useEffect(() => {
    AOS.init({duration:2000}),
    AOS.refresh()
   }, [])
  const form = useRef();
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const toastOptions = {
    position: 'bottom-right',
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: 'dark'
  }

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current,  import.meta.env.VITE_PUBLIC_KEY)
    .then((result) => {
        console.log(result.text);
        toast.success('Message successfully sent', toastOptions);
        setFormValues({ name: '', email: '', message: '' }); // Reset form values
      })
      .catch((error) => {
        console.error(error.text);
        toast.error('An error occurred while sending the message', toastOptions);
      });
  };

  return (
    <div className=' flex flex-col justify-center items-center text-white w-[90vw] lg:w-[1150px] h-[100vh] ' data-aos='once'>
      <div className='flex flex-col gap-2 ' data-aos='zoom-in'>
        
      <h1 className='text-sm text-center font-montserrat text-white'>Get in Touch </h1>
      <h1 className='text-3xl md:text-4xl lg:text-5xl text-center'>Contact Me</h1>
      </div>

      < div className='pt-12 flex lg:flex-row-reverse flex-col ' data-aos='fade-up'>
        <div className='max-md:w-full max-md:flex max-md:justify-center max-md:items-center '>
          <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-2 w-[80vw] lg:w-[35vw]'>
            <label className= "text-md md:text-lg lg:text-xl">Name</label>
            <input type="text" required value={formValues.name} name="name" onChange={handleChange} className='rounded-md text-gray-300 py-2  border-[#1B1A55]  px-3 outline-none  bg-[#1B1A55]'/>
            <label className= "text-md md:text-lg lg:text-xl">Email</label >
            <input type="email" required value={formValues.email} name="email" onChange={handleChange} className='rounded-md text-gray-300 py-2  border-[#1B1A55]  px-3 outline-none  bg-[#1B1A55]' />
            <label className= "text-md md:text-lg lg:text-xl">Message</label >
            <textarea name="message" required value={formValues.message} onChange={handleChange} className='h-[180px] text-gray-300 rounded-md py-2  bg-[#1B1A55] border-[#1B1A55]  px-3 outline-none  '/>
            <input type="submit" value="Send" className='bg-gradient-to-r from-[#103CE7] to-[#C820EE] mt-1  text-white rounded-xl py-2 cursor-pointer'/>
          </form>
        </div>
      </ div>
      <ToastContainer 
      closeOnClick
      autoClose={true}/>
    </div>
  );
}

export default Contact;
