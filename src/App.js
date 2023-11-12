import React from 'react'
import Navbar from './components/navbar/navbar'
import './App.css';
import Intro from './components/intro/Intro';
import Services from './components/services/Services';
import Experience from './components/experience/Experience';
import Portfolio from './components/portfolio/Portfolio';


const App = () => {
  return (
    <div>
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
      <Portfolio/>
      
    </div>
  )
}

export default App;

