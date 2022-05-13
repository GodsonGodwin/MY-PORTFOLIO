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
background: rgba(225, 225, 225,  0.26);
border: 7px solid var(--emeraldCard);
box-shadow: var(--boxShadow);
border-radius: 8px;
padding: 0px 26px 2rem 26px;

img{
    transform: scale(0.5);
     margin-bottom: -3rem;  
     margin-top: -10px;
}
.Text1{
    color: var(--gray);
    font-size: 16px;
}
    
`

const Card = ({img, heading, detail}) => {
  return (
   <CardWrapper>
       <img src={img} alt='Service logo'/>
       <span>{heading}</span>
       <span className='Text1'> {detail}</span>
   </CardWrapper>
  )
}

export default Card