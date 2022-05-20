import React, { useContext } from "react";
import { 
    Achievement,
    Circle,
    Wrapper
 } from './ExperienceStyle';

 import { themeContext } from "../../../Context";

const Experience = () => {

    const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <Wrapper id='Experience'>
        <Achievement>
            <Circle
            style={{color: darkMode?'var(--black)':''}}
            > 3+</Circle>
            <span>Years of</span>
            <span className='Text'>Experience</span>
        </Achievement>

        <Achievement>
            <Circle
            style={{color: darkMode?'var(--black)':''}}
            > 15+</Circle>
            <span>Project</span>
            <span className='Text'>Completed</span>
        </Achievement>

        <Achievement>
            <Circle
            style={{color: darkMode?'var(--black)':''}}
            > 2+</Circle>
            <span>Companies</span>
            <span className='Text'>Work</span>
        </Achievement>

        <Achievement>
            <Circle
            style={{color: darkMode?'var(--black)':''}}
            > 2+</Circle>
            <span>Companies</span>
            <span className='Text'>Work</span>
        </Achievement>


    </Wrapper>
  )
}

export default Experience