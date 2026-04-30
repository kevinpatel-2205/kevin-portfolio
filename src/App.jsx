import { ThemeProvider, useTheme } from "./context/ThemeContext";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";

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
      {["projects", "education", "experience", "contact"].map((id) => (
        <section
          key={id}
          id={id}
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "2rem",
            fontFamily: "Georgia, serif",
            color: isDark ? "rgba(201,168,76,0.08)" : "rgba(139,105,20,0.06)",
            textTransform: "capitalize",
          }}
        >
          {id}
        </section>
      ))}
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
