import React from 'react'
import './Footer.css'
import wave from '../../assets/wave1.png'
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
   <div className="footer">
    
    
    <img className="wave" src={wave} alt="" style={{width: '100%' }} />
    <div className="f-content">
        <span>mdraihansagor7@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.linkedin.com/in/abu-raihan7189     ">
          <LinkedIn color="white" size={"3rem"} />
          </a>

          <a href="https://www.facebook.com/raihan.7189">
          <Facebook color="white" size={"3rem"} />
          </a>

          <a href="https://github.com/raihansagor">
          <Gitub color="white" size={"3rem"} />
          </a>
          
          
          
        </div>
      </div>

   </div>
   
  )
}

export default Footer
