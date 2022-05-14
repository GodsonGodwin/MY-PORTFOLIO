import React from 'react'
import styled from 'styled-components'
// import {motion} from 'framer-motion';
import Card from './MobileDataCard';

import Figma from '../../../img/figma.png';
import Logo from '../../../img/logo5.png';
import Web from '../../../img/web.png';

export const CardContainer = styled('div')`
display: none;

@media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    
}
`

const ServiceCards = styled('div')`

@media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
    
}

`

const MobileCard = () => {
  return (
      <CardContainer>
    <ServiceCards >
           <Card
           img = {Web}
           heading={"Developer"}
           detail={"HTML, CSS, Email Developer, Javascript, Jquery, React.JS"}
           />
       </ServiceCards>

       <ServiceCards>
           <Card
           img = {Figma}
           heading={"UI/UX Designer "}
           detail={"Figma"}
           />
       </ServiceCards>

       <ServiceCards>
           <Card
           img = {Logo}
           heading={"Design"}
           detail={"Figma, Photoshop, Corel Draw"}
           />
       </ServiceCards>
       </CardContainer>
  )
}

export default MobileCard