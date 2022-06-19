import React, { useContext } from "react";
import { 
    ProjectWrapper, 
    ProjectInfo,
    Button,
    CircleWrapper,
    BrandWrapper,
    IconCircle,
    BackgroundCircle,
} from './ProjectStyle';
import Upwork from '../../img/Upwork.png';
import Fiverr from '../../img/fiverr.png';
import Amazon from '../../img/amazon.png';
import Moonsat from '../../img/moon.png';
import Clique from '../../img/Clique.png';
import { themeContext } from "../../Context";

const Project = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

  return (
    <ProjectWrapper>
<ProjectInfo>
    <span 
     style={{ color: darkMode ? "var(--gold)" : "" }}
    className='Text1'> Works for all these </span>
    <span className='Text2'> Brand & Clients</span>
    <span 
     style={{ color: darkMode ? "aliceblue" : "" }}
    className='Text3'> Working as a freelancer, I have delivered a quality and efficient work output to these
    clients.
     
     <br/><br/>
     I focused more on turning your idea into a highly functional, flexible and user friendly experience for your clients. 
      </span>
 
 <div className="blur blur1" style={{ background: "#ABF1FF94" }}></div>
 </ProjectInfo>

<BrandWrapper>
<CircleWrapper
animate={{rotate: 360}}
whileHover={{rotate: 0, scale: 1.1}}
viewport={{margin: '-40px'}}
transition={{duration: 15, ease: "linear", loop: Infinity}}
>
    <IconCircle className='icon1'>
        <img src={Upwork} alt='icons'/>
    </IconCircle>

    <IconCircle className='icon2'>
        <img src={Fiverr} alt='icons'/>
   </IconCircle>

    <IconCircle className='icon3'>
        <img src={Moonsat} alt='icons'/>
    </IconCircle>

    <IconCircle className='icon4'>
        <img src={Clique} alt='icons'/>
    </IconCircle>

    <IconCircle className='icon5'>
        <img src={Amazon} alt='icons'/>
    </IconCircle>
</CircleWrapper>

<BackgroundCircle 
style={{background: darkMode?'var(--gold)':''}}
className='circle1'/>
<BackgroundCircle className='circle2'/>
</BrandWrapper>
    </ProjectWrapper>
    
  )
}

export default Project