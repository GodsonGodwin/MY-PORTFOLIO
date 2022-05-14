import React from 'react'
import { FooterContent, FooterIcons, FooterWrapper } from './FooterStyle'

import FooterBackground from "../../img/footer.png";

import Instagram from '@iconscout/react-unicons/icons/uil-linkedin';
import Github from '@iconscout/react-unicons/icons/uil-github';
const Footer = () => {

  return (
   <FooterWrapper>
        <img src={FooterBackground} alt="" style={{ width: "100%" }} />
        <FooterContent>
        <span>Email: godsongodwinsaben1998@gmail.com</span>
        
        <FooterIcons>
            <Instagram color='white' size='2.5rem'/>
            <Github color='white' size='2.5rem'/>
        </FooterIcons>

        </FooterContent>

   </FooterWrapper>
  )
}

export default Footer