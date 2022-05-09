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
 import Vector2 from '../../img/Vector2.png';
 import boy from '../../img/Profile.png';


const Hero = () => {
  return (
    <HeroWrapper>
        <InfoText>
            <MyInfo>
                <span className='Text1'>Hi! I Am</span>
                <span className='Text2'> Benjamin Godwin</span>
                <span className='Text3'> Front-end developer with super creative ideas in graphics design</span>
            </MyInfo>

            <Button> Hire me</Button>

            <IconWrapper>
                <img src={Github} alt='My GitHub Account'/>
                <img src={LinkedIn} alt="My LinkedIn Account"/>
            </IconWrapper>
        </InfoText>

        <MediaImage>
        <img className='image1'src={Vector2} alt='Background Graphics'/>
        <img className='image2' src={Vector1} alt='Background Graphics'/>
        <img className='image3' src={boy} alt="My Profile"/>
        </MediaImage>


    </HeroWrapper>
  )
}

export default Hero