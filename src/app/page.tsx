"use client"; 

import React, { useState }  from 'react';
import Navbar from '@/app/components/Navbar/Navbar';
import HeroSection from '@/app/components/HeroSection/HeroSection';
import AboutMeSection from '@/app/components/AboutMe/AboutMe';
import ContactSection from '@/app/components/Contact/Contact';
import Projects from '@/app/components/Projects/Projects';


const Home = () => {
  return (
    <div>
      <Navbar />
      <main>
        <section id="hero">
          <HeroSection />
        </section>
        <section id="about-me">
          <AboutMeSection />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <ContactSection />
        </section> 
      </main>
    </div>
  );
};

export default Home;
