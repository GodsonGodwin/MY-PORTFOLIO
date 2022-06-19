import React, { useContext } from "react";
import { FooterContent, FooterIcons, FooterWrapper, Links } from './FooterStyle'

import FooterBackground from "../../img/footer.png";
import DarkFooterBackground from "../../img/footer4.png";

import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin';
import Github from '@iconscout/react-unicons/icons/uil-github';
import Twitter from '@iconscout/react-unicons/icons/uil-twitter';
import Whatsapp from '@iconscout/react-unicons/icons/uil-whatsapp';
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
        <Links href='https://github.com/GodsonGodwin' target='_blank'> <Github color='white' size='2rem'/></Links>
        <Links href='https://twitter.com/IAmGodsonGodwin' target='_blank'><Twitter color='white' size='2rem'/></Links> 
        <Links href='https://api.whatsapp.com/send?phone=2347050797450' target='_blank'> <Whatsapp color='white' size='2rem'/></Links>
        <Links href='https://www.linkedin.com/in/benjamin-ohiani-godwin-a20b73171/' target='_blank'> <Linkedin color='white' size='2rem'/></Links>
        
        </FooterIcons>

        </FooterContent>

   </FooterWrapper>
  )
}

export default Footer