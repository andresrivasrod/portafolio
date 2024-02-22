
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Outlet } from "react-router-dom";
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

function App() {

  return (
    <main>
      <About />
      <Projects />
      <Contact />
   </main>
  )
}

export default App
