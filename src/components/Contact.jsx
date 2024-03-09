import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sticker from '../assets/images/sticker1.png';

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

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cpeiaiv', 'template_1oop11r', form.current, '8bzCTOWR7dwKClKgd')
      .then((result) => {
        console.log(result.text);
        toast.success('Message successfully sent', {
          position: "bottom-right",
          autoClose: 500, // Set to 5000 milliseconds (5 seconds)
          hideProgressBar: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          closeOnClick: true,
          transition: "bounce",
        });
        setFormValues({ name: '', email: '', message: '' }); // Reset form values
      })
      .catch((error) => {
        console.error(error.text);
        toast.error('An error occurred while sending the message');
      });
  };

  return (
    <div className=' mt-20 text-white w-[90vw] lg:w-[1150px] h-[100vw]'>
      <div className='flex flex-col gap-2 '>

      <h1 className='text-md text-center font-montserrat'>Get in Touch </h1>
      <h1 className='text-5xl text-center'>Contact Me</h1>
      </div>
      <div className='mt-20 flex flex-row justify-between'>
        <div>
          <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-3 w-[40vw]'>
            <label>Name</label>
            <input type="text" value={formValues.name} name="name" onChange={handleChange} className='rounded-xl text-gray-300 py-1 border-4 border-[#1B1A55]  px-2 outline-none  bg-transparent'/>
            <label>Email</label>
            <input type="email" value={formValues.email} name="email" onChange={handleChange} className='rounded-xl text-gray-300 py-1 border-4 border-[#1B1A55]  px-2 outline-none  bg-transparent' />
            <label>Message</label>
            <textarea name="message" value={formValues.message} onChange={handleChange} className='h-[200px] text-gray-300 rounded-xl py-1 border-4 border-[#1B1A55]  px-2 outline-none  bg-transparent'/>
            <input type="submit" value="Send" className='bg-gradient-to-r from-[#103CE7] to-[#C820EE]  text-white rounded-2xl py-2 cursor-pointer'/>
          </form>
        </div>
        <div>
          <img src={Sticker} alt="Sticker" className='h-[300px]'/>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Contact;
