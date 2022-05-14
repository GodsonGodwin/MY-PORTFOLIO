import React from 'react';
import { 
    ToolBoxWrapper, 
    BoxWrapper,
    Button,
    ToolsWrapper,
    CircleWrapper,
    IconCircle,
    ExperienceInfo,
    Header,
} from './ToolStyle';

import Figma from '../../img/Figma3.png';
import HTML from '../../img/html.png';
import CSS from '../../img/css3.png';
import Tools from '../../img/toolbox.png';
import Jscript from '../../img/JS.png';
import ReactIcon from '../../img/react.png';
import Adobe from '../../img/adobe.png';
import Jquery from '../../img/jquery.png';
import Bootstrap from '../../img/boot.png';
import Experience from '../Experience/Experience';


const ToolBox = () => {
  return (
    <BoxWrapper>
    <Header>
    <span className='Text1'>Skills & Tools</span>
    <span className='Text2'><i></i>The skills, tools and technologies I use to bring your products and idea to life...</span>
    <div className="blur t-blur1" style={{ background: "#8da5da" }}></div>
    <div className="blur t-blur2" style={{ background: "#90e476" }}></div>
    </Header>
    
    <ToolBoxWrapper>
    <ExperienceInfo>
      <Experience/>

    <div className="blur blur1" style={{ background: "#ABF1FF94" }}></div>
 </ExperienceInfo>

<ToolsWrapper>

<CircleWrapper
animate={{rotate: 360}}
whileHover={{rotate: 0, scale: 1.1}}
viewport={{margin: '-40px'}}
transition={{duration: 15, ease: "linear", loop: Infinity}}
>

    <IconCircle style={{top:'-2rem', left:'7rem'}}>
        <img src={Figma} alt='icons'/>
    </IconCircle>

    <IconCircle style={{top:'1rem', left:'1rem'}}>
        <img src={HTML} alt='icons'/>
    </IconCircle>

    <IconCircle style={{top:'7rem', left:'-2rem', justifyContent:'center', position:'absolute'}}>
        <img src={ReactIcon} alt='icons'/>
   </IconCircle>

   <IconCircle style={{bottom:'1rem', left:'0.8rem'}}>
        <img src={Adobe} alt='icons'/>
    </IconCircle>

    

    <IconCircle style={{bottom:'-1.5rem', left:'7rem'}}>
        <img src={CSS} alt='icons'/>
    </IconCircle>

   
    <IconCircle style={{bottom:'1rem', right:'0.8rem'}}>
        <img src={Jquery} alt='icons'/>
    </IconCircle>
    

    <IconCircle style={{height: '6rem', width: '6rem', top:'6rem', left:'6rem'}}>
        <img src={Tools} alt='icons'/>
    </IconCircle>

    <IconCircle style={{top:'7rem', right:'-2rem'}}>
        <img src={Bootstrap} alt='icons'/>
    </IconCircle>

    <IconCircle style={{top:'1rem', right:'1rem'}}>
        <img src={Jscript} alt='icons'/>
    </IconCircle>
</CircleWrapper>

<Button>Download CV</Button>
</ToolsWrapper>

    </ToolBoxWrapper>
    </BoxWrapper>
    
  )
}

export default ToolBox