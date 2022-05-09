import React from 'react'
import Card from './Card'
import { 
    ServiceWrapper,
    ServiceInfo,
    ServiceCards,
    Button,
 } from './ServiceStyle';
 import Figma from '../../img/figma.png';
 import Logo from '../../img/logo5.png';
 import Web from '../../img/web.png';



const Services = () => {
  return (
   <ServiceWrapper>
       <ServiceInfo>
           <span className='Text1'> My Ingenius </span>
           <span className='Text2'> Services</span>
           <span className='Text3'> With an eye for creative and modern design, my services are flawless <br/>
        
            and of high quality with keen attention to details </span>
        <a href={'/'} download>
        <Button>Download CV</Button>
        </a> 
        
       </ServiceInfo>

       <ServiceCards style={{left: '14rem'}}>
           <Card
           img = {Web}
           heading={"Developer"}
           detail={"HTML, CSS, Email Developer, Javascript, Jquery, React.JS"}
           />
       </ServiceCards>

       <ServiceCards style={{left: '-4rem', top:'12rem'}}>
           <Card
           img = {Figma}
           heading={"UI/UX "}
           detail={"Figma"}
           />
       </ServiceCards>

       <ServiceCards style={{left: '12rem', top:'19rem'}}>
           <Card
           img = {Logo}
           heading={"Design"}
           detail={"Figma, Photoshop, Corel Draw"}
           />
       </ServiceCards>

   </ServiceWrapper>
  )
}

export default Services