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
 import Profile from '../../img/Profile.png';
 import shape from '../../img/shape2.png';

 


const Hero = () => {
    const transition = {duration:2, type: 'spring'};
  return (
    <HeroWrapper>
        {/* <div><img className='blurBackground'src={shape} alt='Background Graphics'/></div> */}
        <InfoText>
            <MyInfo>
                <span className='Text1'>Hi! I Am</span>
                <span className='Text2'> Benjamin Godwin</span>
                <span className='Text3'> Front-end developer with super creative ideas in graphics design</span>
            </MyInfo>

            <Button> Hire me</Button>

            {/* <IconWrapper>
                <img className='icon' src={Github} alt='My GitHub Account'/>
                <img className='icon' src={LinkedIn} alt="My LinkedIn Account"/>
                <img className='icon' src={LinkedIn} alt="My LinkedIn Account"/>
            </IconWrapper> */}
        </InfoText>

        
        <MediaImage>        
        <img className='image2' src={Vector1} alt='Background Graphics'/>
        <img className='image3' src={Profile} alt="My Profile"/>
        </MediaImage>


    </HeroWrapper>
  )
}

export default Hero
