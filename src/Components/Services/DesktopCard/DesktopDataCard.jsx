import React, { useContext } from "react";
import styled from 'styled-components';
import { themeContext } from "../../../Context";


const CardWrapper = styled('div') `
width: 15rem;
min-height: 10rem;
/* position: absolute; */
display: flex;
flex-direction: column;
gap: 1rem;
text-align: center;
align-items: center;
background: rgba(225, 225, 225,  0.26);
border: 7px solid var(--emeraldCard);
box-shadow: var(--boxShadow);
border-radius: 8px;
padding: 0.5rem 1rem;

img{
transform: scale(0.8);

}

@media screen and (max-width: 480px){
    width: auto;

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
    font-weight: bold;

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