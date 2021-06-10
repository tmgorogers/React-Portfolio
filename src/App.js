//import logo from './logo.svg';
//import './App.css';
//import { useMediaQuery } from 'react-responsive'
import NavBar from './components/NavBar/NavBar.js';
import About from './components/About/About.js';
import Home from './components/Home/Home.js';
import Skills from './components/Skills/Skills.js';
import Projects from './components/Projects/Projects.js';
import Contact from './components/Contact/Contact.js';


//const Example = () => {
  //const isDesktopOrLaptop = useMediaQuery({
   // query: '(min-device-width: 1224px)'
  //})
  //const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' })
  //const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  //const isTabletOrMobileDevice = useMediaQuery({
    //query: '(max-device-width: 1224px)'})


const App = ()  => {
  return (
    <div className="App">
     <NavBar />
     <Home />
     <About />
     <Skills />
     <Projects />
     <Contact />
    </div>
  );
}

export default App;
