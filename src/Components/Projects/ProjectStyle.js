import styled from 'styled-components'
import {motion} from 'framer-motion';

export const ProjectWrapper = styled('div')`
padding: 5rem 3rem;
display: flex;
height: 25rem;
margin-bottom: 8rem;
margin-top: 15rem;
background: red;


@media screen and (max-width: 480px) {
    flex-direction: column;
    height: 55rem;
    padding: 0;
    gap: 5rem;
  }

`

export const ProjectInfo = styled('div')`
display: flex;
flex-direction: column;
position: relative;
gap: 2;

.Text1{
    font-size: 2.5rem;
    color: var(--black);
    font-weight: bold;
}

.Text2{
    font-size: 2.5rem;
    color: var(--emerald);
    font-weight: bold;
}

.Text3{
    font-size: 15px;
    color: var(--gray);
    font-weight: 700;
    margin-top: 1rem;
}


@media screen and (max-width: 480px) {
    .Text1{
    font-size: 2rem;
  
  }

  .Text2{
    font-size: 2rem;
}

.Text3{
    font-size: 20px;
}
}
`
export const Button = styled('button')`
width: 8rem;
height: 2rem;
margin-top: 2rem;
font-weight: bold;

`

export const BrandWrapper = styled(motion.div)`
position: relative;

.circle1{
background: #000080;
top: 0rem;
left: 18rem;
}

.circle2{
background: #d3d3d3;
top: 8rem;
left: 18rem;
}

@media screen and (max-width: 480px) {
display: flex;
align-items: center;
justify-content:center;
margin-top: 1rem;

.circle1{
top: 0rem;
left: 8rem;
}

.circle2{
top: 3rem;
left: 18rem;
}
}
`


export const CircleWrapper =  styled(motion.div)`
left: 10rem;
position: relative;
width: 18rem;
height:18rem;
background: white;
border-radius: 100%;
box-shadow: var(--smboxShadow);
top: 2rem;

.icon1{
    top: -3rem;
    left: 6rem;
}

.icon2{
    top: 5rem;
    left: -3rem;
}

.icon3{
    top: 5rem;
    left: 6rem;
}

.icon4{
    top: 5rem;
    left: 15rem;
}

.icon5{
    top: 13rem;
    left: 6rem;
}


*{
    position: absolute
}

@media screen and (max-width: 480px) {
position: static;
width:9rem;
height:9rem;

.icon1{
    top: -1.5rem;
    left: 6rem;
}

.icon2{
    top: 2.5rem;
    left: 1.5rem;
}

.icon3{
    top: 2.8rem;
    left: 6.5rem;
}

.icon4{
    top: 2.5rem;
    left: 11rem;
}

.icon5{
    top: 7rem;
    left: 6rem;
}


}
`
export const IconCircle = styled(motion.div)`
width: 6rem;
height: 6rem;
position: absolute;
border-radius: 100%;
border: 5px solid #ebebeb;
display: flex;
align-items: center;
justify-content: center; 
background: white;
box-shadow: var(--smboxShadow);

img{
    transform: scale(0.6)
}

@media screen and (max-width: 480px) {
width:3rem;
height:3rem;

img{
    transform: scale(0.3)
}


}


`

export const BackgroundCircle = styled('div')`
position: absolute;
height: 13rem;
width: 13rem;
border-radius: 100%;
z-index: -1;

@media screen and (max-width: 480px) {
height: 6.5rem;
width: 6.5rem;
left: 8rem!important;
}

`

