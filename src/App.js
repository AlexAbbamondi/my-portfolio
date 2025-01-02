import { useState } from "react";

import Header from "./components/Header"
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

import './styles/reset.css';
import './styles/App.css';

const App = () => {
  const [isBlurred, setIsBlurred] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
    setIsBlurred(!isBlurred);
  };

  const handleMainClick = () => {
    if (showNavbar) {
      setShowNavbar(false);
      setIsBlurred(false);
    }
  };

  return (
    <div className="App">
      <Header onToggle={handleShowNavbar} showNavbar={showNavbar} />
      <main className={`main ${isBlurred ? 'blur' : ''}`} onClick={handleMainClick}>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
