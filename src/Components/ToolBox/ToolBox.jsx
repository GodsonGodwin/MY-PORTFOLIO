import React, { useContext } from "react";
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
import { themeContext } from "../../Context";

import Figma from '../../img/Figma3.png';
import HTML from '../../img/html.png';
import CSS from '../../img/css3.png';
import Tools from '../../img/toolbox.png';
import Jscript from '../../img/JS.png';
import ReactIcon from '../../img/react.png';
import Adobe from '../../img/adobe.png';
import Jquery from '../../img/jquery.png';
import Bootstrap from '../../img/boot.png';
import Experience from './Experience/Experience';


const ToolBox = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  

  return (
    <BoxWrapper>
    <Header>
    <span
    style={{color: darkMode?'var(--emerald)':''}} 
    className='Text1'>Skills & Tools</span>
    <span 
    style={{color: darkMode?'var(--gold)':'var(--emerald)'}} 
    className='Text2'>The skills, tools and technologies I use to bring your products and idea to life...</span>
    <div className="blur t-blur1" style={{ background: "#90e476" }}></div>
    </Header>
    
    <ToolBoxWrapper>
        
    <ExperienceInfo>
      <Experience/>
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
    

    <IconCircle style={{height: '7.5rem', width: '7.5rem', top:'5rem', left:'5rem'}}>
        <img src={Tools} alt='icons'/>
    </IconCircle>

    <IconCircle style={{top:'7rem', right:'-2rem'}}>
        <img src={Bootstrap} alt='icons'/>
    </IconCircle>

    <IconCircle style={{top:'1rem', right:'1rem'}}>
        <img src={Jscript} alt='icons'/>
    </IconCircle>
</CircleWrapper>
</ToolsWrapper>

</ToolBoxWrapper>
    
    <Button>Download CV</Button>
    </BoxWrapper>
    
  )
}

export default ToolBox