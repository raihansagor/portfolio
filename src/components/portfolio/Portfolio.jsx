import React from 'react'
import './Portfolio.css'
import {Swiper,SwiperSlide} from 'swiper/react'
import projectImage1 from '../../assets/projectImage1.png'
import projectImage2 from '../../assets/projectImage2.png'
import projectImage3 from '../../assets/projectImage3.png'
import 'swiper/css'




const Portfolio = () => {
  return (
    <div className="portfolio">
      <span>Recent Projects</span>
      <span>Portfolio</span>
      <Swiper
       spaceBetween={30}
       slidesPerView={3}
       grabCursor={true}
       className="portfolio-slider"
      >
        <SwiperSlide>
            <img src={projectImage1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img  src={projectImage2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={projectImage3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={projectImage3} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Portfolio;


