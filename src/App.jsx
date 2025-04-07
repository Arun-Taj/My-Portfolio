import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import ThreeScene from './components/ThreeScene';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="relative">
      
      <Navbar />
      {/* <ThreeScene /> */}
      <main className="pt-10">
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default App;