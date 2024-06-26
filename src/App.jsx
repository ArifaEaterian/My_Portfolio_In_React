// eslint-disable-next-line no-unused-vars
import React from 'react';
import './App.css'
import Header from './components/header/Header';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Qualification from './components/qualification/qualification';
import Project from './components/project/Project';
import Certification from './components/certification/Certification';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Skills from './components/skills/Skills';

function App() {

  return (
    <div className="App">
      <Header/>
      <About/>
      <Qualification/>
      <Skills/>
      <Experience/>
      <Project/>
      <Certification/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
