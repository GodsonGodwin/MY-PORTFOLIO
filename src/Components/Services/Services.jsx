import React from 'react'

import { 
    ServiceWrapper,
    ServiceInfo,
    Button,
 } from './ServiceStyle';
 
import DesktopCard from './DesktopCard/DesktopCard';
import MobileCard from './MobileCard/MobileCard';
 

 



const Services = () => {
    
  return (
   <ServiceWrapper id='Services'>
       <ServiceInfo>
           <span className='Text1'> My Ingenius </span>
           <span className='Text2'> Services</span>
           <span className='Text3'> With an eye for creative and modern design, <br/>
           my services are flawless and of high quality with <br/> 
           keen attention to details </span>
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