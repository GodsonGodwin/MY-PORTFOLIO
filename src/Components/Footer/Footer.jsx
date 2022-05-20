import React, { useContext } from "react";
import { FooterContent, FooterIcons, FooterWrapper } from './FooterStyle'

import FooterBackground from "../../img/footer.png";
import DarkFooterBackground from "../../img/footer4.png";

import Instagram from '@iconscout/react-unicons/icons/uil-linkedin';
import Github from '@iconscout/react-unicons/icons/uil-github';
import { themeContext } from "../../Context";

const Footer = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    
   <FooterWrapper>
     {darkMode ? (<img src={DarkFooterBackground} alt="" style={{ width: "100%" }} />) : 
     (<img src={FooterBackground} alt="" style={{ width: "100%" }} />)  }
        
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