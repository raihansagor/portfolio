import React from 'react'
import Navbar from './components/navbar/navbar'
import './App.css';
import Intro from './components/intro/Intro';
import Services from './components/services/Services';
import Experience from './components/experience/Experience';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonial/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';


const App = () => {
  return (
    <div>
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>
      
    </div>
  )
}

export default App;

