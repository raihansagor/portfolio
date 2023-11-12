import React from 'react'
import './Services.css'
import Card from '../card/Card'
import Resume from './raihanCv.pdf';

const Services = () => {
  return (
    <div className="services">
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
            
          <div className='card1'>
                <Card
                 heading={'Design'}
                 detail={"Figma, Sketch, Photoshop, Adobe, Adobexd"}
                />
          </div>
          <div className="card2">
          <Card
            
            heading={"Developer"}
            detail={"Html, Css, JavaScript, React, Nodejs, MongoDB"}
          />
          </div>
          <div className="card3">
          <Card
            
            heading={"Ui/Ux"}
            detail={"Designed and implemented web-based user interface using Html, CSS, JavaScript"}
          />
          </div>
          

            
        </div>
    </div>
  )
}

export default Services
