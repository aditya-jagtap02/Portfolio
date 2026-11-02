import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-sky-500/30 selection:text-white">
      <Navbar />

      <main>
        <section id="home" className="relative">
          <Hero />
        </section>

        <section id="projects" className="relative">
          <Projects />
        </section>

        <section id="skills" className="relative">
          <Skills />
        </section>

        <section id="experience" className="relative">
          <Experience />
        </section>

        <section id="about" className="relative">
          <About />
        </section>
      </main>

      <section id="contact" className="relative">
        <Contact />
      </section>
    </div>
  );
}

export default App;
