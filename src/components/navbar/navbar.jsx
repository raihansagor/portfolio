import React from 'react'
import "./navbar.css"
import { Link } from "react-scroll";


const Navbar = () => {
  return (
   <div className="n-wrapper" id='Navbar'>
    <div className="n-left">
        <div className="n-name">Raihan</div>
        {/* <span>Toogle</span> */}
    </div>
    <div className="n-right">
        <div className="n-list">
            <ul>
                <li>
                <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
                </li>
                <li>
                <Link to="services" spy={true} smooth={true}>
                Serivces
              </Link>
                </li>
                <li>
                <Link to="experience" spy={true} smooth={true}>
                Experience
              </Link>

                </li>
                <li>
                <Link to="portfolio" spy={true} smooth={true}>
                Protfolio
              </Link>
                </li>
                <li>
                <Link to="testimonial" spy={true} smooth={true}>
                Testimonial
              </Link>
                </li>
                
            </ul>
        </div>
        <button className="button n-button"> 
        <Link to="contact" spy={true} smooth={true}>
                Contact
              </Link>
        </button>

    </div>
   
   </div>
  )
}

export default Navbar;
