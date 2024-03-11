import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sticker from '../assets/images/giphy.gif';
import {motion, useScroll, useTransform} from 'framer-motion'



function Contact() {
  const ref = useRef(null)
const {scrollYProgress} = useScroll({
  target: ref,
  offset: ["0 1", "1.33 1"]
})

const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1])

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

    emailjs.sendForm('service_cpeiaiv', 'template_1oop11r', form.current, '8bzCTOWR7dwKClKgd')
      .then((result) => {
        console.log(result.text);
        toast.success('Message successfully sent', toastOptions);
        setFormValues({ name: '', email: '', message: '' }); // Reset form values
      })
      .catch((error) => {
        console.error(error.text);
        toast.error('An error occurred while sending the message');
      });
  };

  return (
    <div className=' flex flex-col justify-center items-center text-white w-[90vw] lg:w-[1150px] h-[100vh] '>
      <div className='flex flex-col gap-2 '>

      <h1 className='text-sm text-center font-montserrat '>Get in Touch </h1>
      <h1 className='text-5xl text-center'>Contact Me</h1>
      </div>
      <motion.div className='pt-20 flex lg:flex-row-reverse flex-col '
         ref={ref}
         style={{
            scale:scaleProgress,
            opacity:opacityProgress
         }}
         viewport={{
          once: true
         }}>
        <div className='max-md:w-full max-md:flex max-md:justify-center max-md:items-center '>
          <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-2 w-[80vw] lg:w-[35vw]'>
            <label>Name</label>
            <input type="text" required value={formValues.name} name="name" onChange={handleChange} className='rounded-md text-gray-300 py-2  border-[#1B1A55]  px-3 outline-none  bg-[#1B1A55]'/>
            <label>Email</label>
            <input type="email" required value={formValues.email} name="email" onChange={handleChange} className='rounded-md text-gray-300 py-2  border-[#1B1A55]  px-3 outline-none  bg-[#1B1A55]' />
            <label>Message</label>
            <textarea name="message" required value={formValues.message} onChange={handleChange} className='h-[180px] text-gray-300 rounded-md py-2  bg-[#1B1A55] border-[#1B1A55]  px-3 outline-none  '/>
            <input type="submit" value="Send" className='bg-gradient-to-r from-[#103CE7] to-[#C820EE] mt-1  text-white rounded-xl py-2 cursor-pointer'/>
          </form>
        </div>
      </motion.div>
      <ToastContainer 
      closeOnClick
      autoClose={true}/>
    </div>
  );
}

export default Contact;
