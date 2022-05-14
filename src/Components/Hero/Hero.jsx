import React from 'react'
import { 
    HeroWrapper,
    InfoText,
    MyInfo,
    Button,
    IconWrapper,
    MediaImage,
 } from './HeroStyle'
 import Github from '../../img/git1.png';
 import LinkedIn from '../../img/in1.png';
 import Vector1 from '../../img/Vector1.png';
 import Profile from '../../img/Profile.png';


const Hero = () => {
    const transition = {duration:2, type: 'spring'};
  return (
    <HeroWrapper>
        <InfoText>
            <MyInfo>
                <span className='Text1'>Hi! I Am</span>
                <span className='Text2'> Benjamin Godwin</span>
                <span className='Text3'> Front-end developer with super creative ideas in graphics design</span>
            </MyInfo>

            <Button> Hire me</Button>
        </InfoText>

        
        <MediaImage>        
        <img className='image1' src={Vector1} alt='Background Graphics'/>
        <img className='image2' src={Profile} alt="My Profile"/>
        </MediaImage>


    </HeroWrapper>
  )
}

export default Hero
