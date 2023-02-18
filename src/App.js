import "./App.css";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </div>
  );
}

export default App;
