import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion';
import Card from './DesktopDataCard';

import Figma from '../../../img/figma.png';
import Logo from '../../../img/logo5.png';
import Web from '../../../img/web.png';

export const CardContainer = styled('div')`
position: relative;
margin-left: 5rem;


div {
  position: absolute;
}

@media screen and (max-width: 1024px){
    margin-left: 13rem;
}

@media screen and (max-width: 680px){
   display: none;
}

`

const ServiceCards = styled(motion.div)`
display: flex;
flex-direction: column;


@media screen and (max-width: 480px) {
    display: none;
    
}

`

const DesktopCard = () => {
    const transition = {duration:2, type: 'spring'};
  return (
      <CardContainer>
    <ServiceCards 
       drag
       dragConstraints={{left: -300, top: -150, right:0, bottom: 30 }}
       dragElastic={0.7}
       initial={{left:'30%'}} 
       whileInView = {{left: '9rem'}}
       transition = {transition}
       style={{left: '9rem'}}>
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
        whileInView = {{left: '-7rem', top: '15rem'}}
        transition = {transition}
        style={{left: '-9rem', top:'15rem'}}>
           <Card
           img = {Figma}
           heading={"UI/UX Designer "}
           detail={"Figma"}
           />
       </ServiceCards>

       <ServiceCards 
        drag
        dragConstraints={{left: -600, top: -280, right:0, bottom: 30 }}
        dragElastic={0.7}
        initial={{top:'19rem', left:'25rem'}} 
        whileInView = {{left: '9rem'}}
        transition = {transition}
        style={{left: '9rem', top:'19rem'}}>
           <Card
           img = {Logo}
           heading={"Design"}
           detail={"Figma, Photoshop, Corel Draw"}
           />
       </ServiceCards>
       </CardContainer>
  )
}

export default DesktopCard