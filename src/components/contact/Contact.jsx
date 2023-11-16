import React from 'react'
import './Contact.css'
import  { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    
    const form = useRef();
    const [done, setDone] = useState(false)
    const showToastMessage = () => {
        toast.success("Sent your mail !", {
          position: toast.POSITION.TOP_RIGHT,
        });
      };

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ztqyfgj', 'template_1euq3ax', form.current, '1T4h0OxK7V_sBdTDV')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };



  return (
    <div className="contact-form" id="contact">
   
    <div className="w-left">
      <div className="awesome">
        {/* darkMode */}
        <span>Get in Touch</span>
        <span>Contact me</span>
        
      </div>
    </div>
    {/* right side form */}
    <div className="c-right">
      <form ref={form} onSubmit={sendEmail }>
        <input type="text" name="user_name" className="user"  placeholder="Name"/>
        <input type="email" name="user_email" className="user" placeholder="Email"/>
        <textarea name="message" className="user" placeholder="Message"/>
        <input onClick={showToastMessage} type="submit" value="Send" className="button"/>
        <span className='span'>{done && "Thanks for Contacting me"}</span>
        
        
        
      </form>
    </div>
    <ToastContainer
       
      />
      
  </div>
  )
}

export default Contact
