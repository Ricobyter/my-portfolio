import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sticker from '../assets/images/giphy.gif';

function Contact() {
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
    <div className=' mt-20 text-white w-[90vw] lg:w-[1150px] h-[100vh] lg:h-[100vh]'>
      <div className='flex flex-col gap-2 '>

      <h1 className='text-md text-center font-montserrat'>Get in Touch </h1>
      <h1 className='text-5xl text-center'>Contact Me</h1>
      </div>
      <div className='mt-20 flex lg:flex-row-reverse flex-col justify-around'>
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
        <div className='hidden md:block  justify-center items-center'>
          <img src={Sticker} alt="Sticker" className='h-[400px]'/>
        </div>
      </div>
      <ToastContainer 
      closeOnClick
      autoClose={true}/>
    </div>
  );
}

export default Contact;
