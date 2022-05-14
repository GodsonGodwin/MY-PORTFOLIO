import styled from 'styled-components'
import {motion} from 'framer-motion';

export const BoxWrapper = styled('div')`
padding: 5rem 3rem;
display: flex;
flex-direction: column;
gap: 5rem;
background: red;
height: 50rem;
margin-bottom: 8rem;
margin-top: 10rem;
`

export const ToolBoxWrapper = styled('div')`
padding: 0 3rem;
display: flex;
gap: 5rem;
text-align: center;
justify-content: center;
`

export const Header =styled('div')`
align-self: center;
text-align: center;
display: flex;
position: relative;
flex-direction: column;

.Text1{
font-size: 3rem;
font-weight: bold


}

.Text2{
font-size: 30px;
font-weight: bold;
margin-top: 1rem;

}

.t-blur1{
    left: 38rem;
    top: 40rem;
}

.t-blur2{
    top: 8rem;
    left: -6rem;
}


`


export const ExperienceInfo = styled('div')`
display: flex;
flex-direction: column;
position: relative;
gap: 2;
margin-top: 5rem;

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
margin-left: 30em;

`

export const ToolsWrapper = styled('div')`
position: relative;
display: flex;
flex-direction: column;
gap: 8rem;
align-items: center;
justify-content: center;
margin-top: -8rem;


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
box-shadow: -10px -10px 65px rgba(32, 126, 40, 0.342);
top: 2rem;

*{
    position: absolute;
}


`
export const IconCircle = styled(motion.div)`
width: 3rem;
height: 3rem;
position: absolute;
border-radius: 100%;
border: 5px solid blue;
display: flex;
align-items: center;
justify-content: center; 
background: white;
box-shadow: -10px -10px 30px rgba(32, 126, 40, 0.18);

img{
    transform: scale(0.3);
}



`

export const BackgroundCircle = styled('div')`
position: absolute;
height: 13rem;
width: 13rem;
border-radius: 100%;
z-index: -1;

`

