import { ThemeProvider, useTheme } from "./context/ThemeContext";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Education from "./components/sections/Education";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";

const AppContent = () => {
  const { isDark } = useTheme();
  return (
    <div
      style={{
        minHeight: "100vh",
        background: isDark ? "#0a0804" : "#f5ead2",
        transition: "background 0.5s ease",
      }}
    >
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Experience />
      <Contact />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
