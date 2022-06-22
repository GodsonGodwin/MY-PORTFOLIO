import React, { useContext } from "react";
import styled from 'styled-components';
import { themeContext } from "../../../Context";


const CardWrapper = styled('div') `
width: 15rem;
min-height: 17rem;
display: flex;
flex-direction: column;
gap: 1rem;
text-align: center;
align-items: center;
background: rgba(225, 225, 225,  0.26);
border: 3px solid #54fc006e;
box-shadow: var(--boxShadow);
border-radius: 8px;
padding: 0.5rem 1rem;

img{
transform: scale(0.8);

}
`

export const TextWrap = styled('div')`
display: flex;
gap: .5rem;
flex-direction:column;
flex-wrap: wrap;
align-items: center;
text-align: center;

.Text1{
    font-size: 1.5rem;
    font-weight: bold;

}

.Text2{
    color: var(--gray);
    font-size: 20px;
    font-weight: 500;

}


`

const Card = ({img, heading, detail}) => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

  return (
   <CardWrapper>
       <img  src={img} alt='Service logo'/>
       
       <TextWrap>
       <span 
        style={{ color: darkMode ? "var(--gold)" : "" }}
       className='Text1'>{heading}</span>
       <span 
       style={{ color: darkMode ? "aliceblue" : "" }}
       className='Text2'> {detail}</span>
       </TextWrap>
      
   </CardWrapper>
  )
}

export default Card