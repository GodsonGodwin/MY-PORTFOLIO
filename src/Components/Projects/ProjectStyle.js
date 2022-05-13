import styled from 'styled-components'
import {motion} from 'framer-motion';

export const ProjectWrapper = styled('div')`
padding: 0 3rem;
display: flex;
height: 90vh;
margin-bottom: 8rem;
margin-top: 10rem;
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
`
export const Button = styled('button')`
width: 8rem;
height: 2rem;
margin-top: 2rem;
font-weight: bold;

`

export const BrandWrapper = styled('div')`
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

*{
    position: absolute
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

