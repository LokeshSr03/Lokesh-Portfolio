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
