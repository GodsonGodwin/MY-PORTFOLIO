import React, {useContext} from "react";
import './App.css';
import Contact from "./Components/Contacts/Contact";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import NavBar from "./Components/NavBar/NavBar";
import Project from "./Components/Projects/Project";
import Services from "./Components/Services/Services";
import Testimonial from "./Components/Testimonial/Testimonial";
import Portfolio from "./Portfolio/Portfolio";
import {themeContext} from './Context';
import ToolBox from "./Components/ToolBox/ToolBox";
import ProjectModal from "./Portfolio/ProjectModal/ProjectModal";



function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
    style={{
      background : darkMode ? '#020c1b' : '',
      color: darkMode ? 'white' : '',
    }}>
      
     <NavBar/>
     <Hero/>
     <Services/>
     <ToolBox/>
     <Project/>
     <Portfolio/>
     <Testimonial/>'
     <Contact/>
     <Footer/>
     {/* <ProjectModal/> */}
    </div>
  );
}

export default App;
