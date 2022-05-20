import React, { useContext } from "react";

import { 
    ServiceWrapper,
    ServiceInfo,
    Button,
 } from './ServiceStyle';
 
 import { themeContext } from "../../Context";
import DesktopCard from './DesktopCard/DesktopCard';
import MobileCard from './MobileCard/MobileCard';
 

 



const Services = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

    
  return (
   <ServiceWrapper id='Services'>
       <ServiceInfo>
           <span 
           style={{ color: darkMode ? "var(--gold)" : "" }}
           className='Text1'> My Ingenius </span>
           <span className='Text2'> Services</span>
           <span 
           style={{ color: darkMode ? "aliceblue" : "" }}
           className='Text3'> With an eye for creative and modern design,
           my services are flawless and of high quality with keen attention to details </span>
        <a href={'/'} download>
        <Button>Download CV</Button>
        </a> 

        <div className="blur blur1" style={{ background: "#ABF1FF94" }}></div>
       </ServiceInfo>

    
       <MobileCard/>
       <DesktopCard/>


   </ServiceWrapper>
  )
}

export default Services