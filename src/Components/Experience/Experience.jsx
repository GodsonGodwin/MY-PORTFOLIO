import React from 'react';
import { 
    Achievement,
    Circle,
    Wrapper
 } from './ExperienceStyle';

const Experience = () => {
  return (
    <Wrapper id='Experience'>
        <Achievement>
            <Circle> 3+</Circle>
            <span>Years of</span>
            <span className='Text'>Experience</span>
        </Achievement>

        <Achievement>
            <Circle> 15+</Circle>
            <span>Project</span>
            <span className='Text'>Completed</span>
        </Achievement>

        <Achievement>
            <Circle> 2+</Circle>
            <span>Companies</span>
            <span className='Text'>Work</span>
        </Achievement>


    </Wrapper>
  )
}

export default Experience