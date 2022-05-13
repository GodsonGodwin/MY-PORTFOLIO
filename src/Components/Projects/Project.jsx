import React from 'react';
import { 
    ProjectWrapper, 
    ProjectInfo,
    Button,
    CircleWrapper,
    BrandWrapper,
    IconCircle,
    BackgroundCircle1,
    BackgroundCircle2,
    BackgroundCircle,
} from './ProjectStyle';
import Upwork from '../../img/Upwork.png';
import Fiverr from '../../img/fiverr.png';
import Amazon from '../../img/amazon.png';
import Moonsat from '../../img/moon.png';
import Clique from '../../img/Clique.png';

const Project = () => {
  return (
    <ProjectWrapper>
<ProjectInfo>
    <span className='Text1'> Works for all these </span>
    <span className='Text2'> Brand & Clients</span>
    <span className='Text3'> With an eye for creative and modern design, my services are flawless <br/>
     and of high quality with keen attention to details 
     <br/>
     my services are flawless and of high quality with keen attention to details 
     <br/>
     my services are flawless and of high quality with keen attention to details 
      </span>

 <Button>Download CV</Button>
 
 <div className="blur blur1" style={{ background: "#ABF1FF94" }}></div>
 </ProjectInfo>

<BrandWrapper>
<CircleWrapper
animate={{rotate: 180}}
whileHover={{rotate: 0, scale: 1.1}}
viewport={{margin: '-40px'}}
transition={{duration: 15, ease: "linear", loop: Infinity}}
>
    <IconCircle style={{top:'-3rem', left:'6rem'}}>
        <img src={Upwork} alt='icons'/>
    </IconCircle>

    <IconCircle style={{top:'5rem', left:'-3rem'}}>
        <img src={Fiverr} alt='icons'/>
   </IconCircle>

    <IconCircle style={{top:'5rem', left:'6rem'}}>
        <img src={Moonsat} alt='icons'/>
    </IconCircle>

    <IconCircle style={{top:'5rem', left:'15rem'}}>
        <img src={Clique} alt='icons'/>
    </IconCircle>

    <IconCircle style={{top:'13rem', left:'6rem'}}>
        <img src={Amazon} alt='icons'/>
    </IconCircle>
</CircleWrapper>

<BackgroundCircle className='circle1'/>
<BackgroundCircle className='circle2'/>
</BrandWrapper>
    </ProjectWrapper>
    
  )
}

export default Project