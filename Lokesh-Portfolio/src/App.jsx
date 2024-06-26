import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import { DarkModeProvider } from "./global store/DarkModeContext";

const App = () => {
  return (
    <DarkModeProvider>
      <Header />
      <HeroSection />
      <About />
      <Skills />
      <Portfolio />
      <Experience />
      <Contact />
    </DarkModeProvider>
  );
};

export default App;
