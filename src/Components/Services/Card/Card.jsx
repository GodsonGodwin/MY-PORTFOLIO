import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion';
import Card from './CardData';

import Figma from '../../../img/figma.png';
import Logo from '../../../img/logo5.png';
import Web from '../../../img/web.png';

export const CardContainer = styled('div')`
display: flex;
margin-left: 4rem;

@media screen and (max-width: 1100px) {
  margin-left: 0rem;
}
`

const ServiceCards = styled(motion.div)`
display: flex;
gap: 2rem;

.card1{
  display: flex;
  align-items: center;
}
.card2{
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

@media screen and (max-width: 1100px) {
    flex-direction: row-reverse;
    
    
    .card2{
  flex-direction: row;
  gap: 2rem;
}
}

@media screen and (max-width: 600px){
  flex-direction:column;
  margin: 0 auto;

  .card2{
  flex-direction: column;
  margin: 0 auto;
  }
}

`

const DesktopCard = () => {
    const transition = {duration:2, type: 'spring'};
  return (
      <CardContainer>
    <ServiceCards>
    <div className='card1'>
           <Card
           img = {Web}
           heading={"Developer"}
           detail={"HTML, CSS, Email Developer, Javascript, Jquery, React.JS"}/>
           </div>

           <div className='card2'>
           <Card
           img = {Figma}
           heading={"UI/UX Designer "}
           detail={"Figma"}/>

           <Card
           img = {Logo}
           heading={"Design"}
           detail={"Figma, Photoshop, Corel Draw"}/>
           </div>
       </ServiceCards>
       </CardContainer>
  )
}

export default DesktopCard