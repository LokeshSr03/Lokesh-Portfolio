import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import { DarkModeProvider } from "./global store/DarkModeContext";
import Education from "./components/Education";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1500, offset: 200 });
  }, []);
  return (
    <DarkModeProvider>
      <Header />
      <HeroSection />
      <About />
      <Skills />
      <Portfolio />
      <Education />
      <Experience />
      <Contact />
      <Footer />
    </DarkModeProvider>
  );
};

export default App;
