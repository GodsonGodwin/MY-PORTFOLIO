import styled from 'styled-components'
import {motion} from 'framer-motion';

export const ProjectWrapper = styled('div')`
padding: 5rem 3rem;
display: flex;
margin-bottom: 8rem;
margin-top: 15rem;


@media screen and (max-width: 680px) {
    flex-direction: column;
    height: 45rem;
    margin-top: 10rem;
    margin-bottom: 2rem;
    padding: 0;
    gap: 1rem;
  }

`

export const ProjectInfo = styled('div')`
width: 22rem;
display: flex;
flex-direction: column;
position: relative;
gap: 2;
text-align: left;

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
    font-size: 25px;
    color: var(--gray);
    font-weight: 700;
    margin-top: 1rem;
}

@media screen and (max-width: 820px) {
    width: 20rem;
}

@media screen and (max-width: 680px) {
    width: 100%;
    margin-top: 2rem;

    .Text1{
    font-size: 2.2rem;
    text-align: center;
  
  }

  .Text2{
    font-size: 2rem;
    text-align: center;
}

.Text3{
    font-size: 20px;
}
}
`

export const BrandWrapper = styled(motion.div)`
position: relative;
z-index: 100;

.circle1{
background: blue;
top: 0rem;
left: 18rem;
z-index: -1;
}

.circle2{
background: var(--gold);
top: 8rem;
left: 18rem;
z-index: -1;
}

@media screen and (max-width: 1024px) {
    .circle1{
left: 10rem;
}

.circle2{
left: 10rem;
}
}

@media screen and (max-width: 680px) {
display: flex;
transform: scale(0.85);
margin-top: 1rem;
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
    top: 14rem;
    left: 6rem;
}


*{
    position: absolute
}

@media screen and (max-width: 1024px) {
    left: 2rem;
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
`

export const BackgroundCircle = styled('div')`
position: absolute;
height: 13rem;
width: 13rem;
border-radius: 100%;
z-index: -1;
`

