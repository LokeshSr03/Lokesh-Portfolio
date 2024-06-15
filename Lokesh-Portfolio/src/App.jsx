import About from "./components/About";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import { DarkModeProvider } from "./global store/DarkModeContext";

const App = () => {
  return (
    <DarkModeProvider>
      <Header />
      <HeroSection />
      <About />
      <Skills />
    </DarkModeProvider>
  );
};

export default App;
