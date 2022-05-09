import React from "react";
import './App.css';
import Hero from "./Components/Hero/Hero";
import NavBar from "./Components/NavBar/NavBar";
import Services from "./Components/Services/Services";


function App() {
  return (
    <div className="App">
     <NavBar/>
     <Hero/>
     <Services/>
    </div>
  );
}

export default App;
