import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import './index.css'
import Navbar from "./components/Navbar/Navbar.jsx";
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Projects from './components/Projects/Projects'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <About />
      <Projects />
      <Contact />
    </BrowserRouter>  
  </React.StrictMode>
);
