import React from 'react'
import  './Intro.css'
import { ImGithub } from "react-icons/im";
import {
  FaFacebookF,
  FaTwitter,
  
} from "react-icons/fa";

import vector from '../../assets/vector.png';
import raihan2 from '../../assets/raihan2.png';
const Intro = () => {
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>HI! I AM</span>
                <span>ABU RAIHAN</span>
                <span> Frontend Developer with mid level of experience in web designing
                and development, producting the Quality work</span>
            </div>
            <button className="button i-button">Hire me</button>
            <div className="i-logo">
              <a href="https://www.facebook.com/raihan.7189">
              <FaFacebookF className="facebook"/>
              </a>
              
              <FaTwitter className='twitter'/>
              <ImGithub className="github"/>
              
              
            </div>
        </div>
        <div className="i-right">
           
            <img className='vector' src={vector} alt="" />
            <img className='image' src={raihan2} alt="" />
          
        </div>
    </div>
  )
}

export default Intro;


