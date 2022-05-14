import React from 'react'
import styled from 'styled-components';



const CardWrapper = styled('div') `
width: 10rem;
height: 13rem;
position: absolute;
display: flex;
flex-direction: column;
gap: 1rem;
text-align: center;
align-items: center;
background: rgba(225, 225, 225,  0.26);
border: 7px solid var(--emeraldCard);
box-shadow: var(--boxShadow);
border-radius: 8px;
padding: 0px 26px 2rem 26px;

img{
transform: scale(0.8);
margin-bottom: -2rem;  

}

@media screen and (max-width: 480px){
    width: auto;

}
`

export const TextWrap = styled('div')`
display: flex;
gap: 1rem;
flex-direction:column;
flex:1;
flex-wrap: wrap;
align-items: center;
text-align: center;
padding-top: 8rem;

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
  return (
   <CardWrapper>
       <img  src={img} alt='Service logo'/>
       <TextWrap>
       <span className='Text1'>{heading}</span>
       <span className='Text2'> {detail}</span>
       </TextWrap>
      
   </CardWrapper>
  )
}

export default Card