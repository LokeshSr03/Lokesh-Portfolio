import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import { DarkModeProvider } from "./global store/DarkModeContext";

const App = () => {
  return (
    <DarkModeProvider>
      <Header />
      <HeroSection />
    </DarkModeProvider>
  );
};

export default App;
