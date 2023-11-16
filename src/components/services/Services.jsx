import React from 'react'
import './Services.css'

import Card from '../card/Card'
import Resume from './RaihanResume.pdf';
import { motion } from "framer-motion";

const Services = () => {
  const transition = {
    duration: 1,
    type: "spring",
  };
  return (
    <div className="services" id='services'>
        {/* services left side */}
        <div className="awesome">
           <span>My Awesome</span>
           <span>Services</span>
           <span>
           Lorem ispum is simpley dummy text of printing of printing Lorem<br/>
           ispum is simpley dummy text of printing
           </span>
           <a href={Resume} download>
           <button className="button cv-button">Download Cv</button>
           </a>
           

        </div>
        {/* services right side */}
        <div className="cards">
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
            
          <div className='card1'>
                <Card
                 heading={'Design'}
                 detail={"Figma, Sketch, Photoshop, Adobe, Adobexd"}
                />
          </div>
          </motion.div>
          {/* card 2 start */}
          <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <div className="card2">
          <Card
            
            heading={"Developer"}
            detail={"Html, Css, JavaScript, React, Nodejs, MongoDB"}
          />
          </div>
          </motion.div>
          {/* card 3 start */}

          <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <div className="card3">
          <Card
            
            heading={"Ui/Ux"}
            detail={"Designed and implemented web-based user interface using Html, CSS, JavaScript"}
          />
          </div>
          </motion.div>
          

            
        </div>
    </div>
  )
}

export default Services
