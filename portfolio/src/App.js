//import logo from './logo.svg';
//import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import About from './components/About/About.js';
import Home from './components/Home/Home.js';
import Skills from './components/Skills/Skills.js';
import Contact from './components/Contact/Contact.js';

const App = ()  => {
  return (
    <div className="App">
     <NavBar />
     <About />
     <Home />
     <Skills />
     <Contact />
    </div>
  );
}

export default App;
