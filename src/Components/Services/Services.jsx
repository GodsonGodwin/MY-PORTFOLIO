import React from 'react'
import Card from './Card'
import { 
    ServiceWrapper,
    ServiceInfo,
    ServiceCards,
    Button,
    CardWrapper,
 } from './ServiceStyle';
 import Figma from '../../img/figma.png';
 import Logo from '../../img/logo5.png';
 import Web from '../../img/web.png';
 

 



const Services = () => {
    const transition = {duration:2, type: 'spring'};
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

        <CardWrapper>
       <ServiceCards 
       drag
       dragConstraints={{left: -300, top: -150, right:0, bottom: 30 }}
       dragElastic={0.7}
       initial={{left:'25%'}} 
       whileInView = {{left: '14rem'}}
       transition = {transition}
       style={{left: '14rem'}}>
           <Card
           img = {Web}
           heading={"Developer"}
           detail={"HTML, CSS, Email Developer, Javascript, Jquery, React.JS"}
           />
       </ServiceCards>

       <ServiceCards 
        drag
        dragConstraints={{left: -400, top: -150, right: 80, bottom: 150 }}
        dragElastic={0.7}
        initial={{left:'11rem', top:'12rem'}} 
        whileInView = {{left: '-4rem'}}
        transition = {transition}
        style={{left: '-4rem', top:'12rem'}}>
           <Card
           img = {Figma}
           heading={"UI/UX "}
           detail={"Figma"}
           />
       </ServiceCards>

       <ServiceCards 
        drag
        dragConstraints={{left: -600, top: -280, right:0, bottom: 30 }}
        dragElastic={0.7}
        initial={{top:'19rem', left:'25rem'}} 
        whileInView = {{left: '12rem'}}
        transition = {transition}
        style={{left: '14rem', top:'19rem'}}>
           <Card
           img = {Logo}
           heading={"Design"}
           detail={"Figma, Photoshop, Corel Draw"}
           />
       </ServiceCards>
       </CardWrapper>

   </ServiceWrapper>
  )
}

export default Services