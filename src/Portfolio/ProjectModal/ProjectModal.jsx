import React, { useContext } from "react";
import { 
    Wrapper,
    ImageWrap,
    TextWrap,
    ToolsText,
    Overlay,
    ModalContent, 
    Close,
    Links

 } from './ProjectModalStyle'
 import { themeContext } from "../../Context";
 import  Bar from '@iconscout/react-unicons/icons/uil-cancel';

const ProjectModal = ({
    onClose, 
    hideScroll, 
    img, 
    alt, 
    headline, 
    description,
    tools, 
    sourceCode }) => {

        const theme = useContext(themeContext);
        const darkMode = theme.state.darkMode;

  return (

    

    <Wrapper hideScroll={document.body.style.overflowY='hidden'}>
    <Overlay>
    <ModalContent
     style={{ 
        background: darkMode ? "#02122b" : "",
        border: darkMode ?'2px solid var(--gold)' : ''}}>
    <Close>
    <Bar size='2rem' onClick={()=>onClose()}/> 
    </Close>
    
    
    <ImageWrap>

        <img src={img} alt={alt} className="projectImage" />
        </ImageWrap>
        
         <TextWrap>
        <span className='headline'>{headline}</span>
       <span 
       style={{color: darkMode ? "gold" : ""}}
        className='description'>{description} </span>
        </TextWrap>

        

        <ToolsText>
        <span className='toolsUsed'>Tools & Library Used:</span>
        <span 
        style={{color: darkMode ? "gold" : ""}}
        className='tools'>  {tools} </span>

        <span className='source'> 
        <Links  
        style={{background: darkMode ? "gold" : "",
                color: darkMode ? 'var(--black)' : ""}}
        href={sourceCode} 
        target='_blank'> Souce code on GitHub... </Links>
        </span>
        
        </ToolsText>

       
        </ModalContent>
        </Overlay>
    </Wrapper>

  )
}

export default ProjectModal
