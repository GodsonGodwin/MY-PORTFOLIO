import React, {useContext} from "react";
import { 
    HeroWrapper,
    InfoText,
    MyInfo,
    Button,
    MediaImage,
 } from './HeroStyle'

 import Vector1 from '../../img/Vector1.png';
 import Profile from '../../img/Profile.png';
 import {themeContext} from '../../Context';
 import {Link} from 'react-scroll';




const Hero = () => {
const theme = useContext(themeContext);
const darkMode = theme.state.darkMode;
  
  return (
    <HeroWrapper>
        <InfoText>
            <MyInfo>
                <span 
                 style={{
                  color: darkMode ? 'var(--gold)' : 'var(--black)',
                }}
                className='Text1'>Hi! I Am</span>
                <span className='Text2'> Benjamin Godwin</span>
                <span 
                 style={{
                  color: darkMode ? 'aliceblue' : '',
                }}
                className='Text3'> Front-end developer with super creative ideas in graphics design</span>
            </MyInfo>

            <Link spy={true} to='Contact' smooth={true} >
            <Button> Hire me</Button>
            </Link>

           
        </InfoText>

        
        <MediaImage>        
        <img className='image1' src={Vector1} alt='Background Graphics'/>
        <img className='image2' src={Profile} alt="My Profile"/>
        </MediaImage>


    </HeroWrapper>
  )
}

export default Hero
