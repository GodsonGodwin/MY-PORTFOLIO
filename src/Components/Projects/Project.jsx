import React from 'react';
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
// animate={{rotate: 180}}
// whileHover={{rotate: 0, scale: 1.1}}
// viewport={{margin: '-40px'}}
// transition={{duration: 15, ease: "linear", loop: Infinity}}
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

<BackgroundCircle className='circle1'/>
<BackgroundCircle className='circle2'/>
</BrandWrapper>
    </ProjectWrapper>
    
  )
}

export default Project