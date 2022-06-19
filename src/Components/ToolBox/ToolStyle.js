import styled from 'styled-components'
import {motion} from 'framer-motion';

export const BoxWrapper = styled('div')`
padding: 5rem 3rem;
display: flex;
flex-direction: column;
gap: 5rem;
height: 42rem;
margin-bottom: 3rem;
margin-top: 3rem;
align-items: center;


@media screen and (max-width: 680px) {
    flex-direction: column;
    height: 60rem;
    margin-top: 3rem;
    margin-bottom: 3rem;
    padding: 0;
    gap: 2rem;
  }
`

export const ToolBoxWrapper = styled('div')`
padding: 4;
display: flex;
gap: 1rem;


@media screen and (max-width: 680px) {
display: flex;
flex-direction: column;
gap: 3rem;



}
`

export const Header =styled('div')`
align-self: center;
text-align: center;
display: flex;
position: relative;
flex-direction: column;


.Text1{
font-size: 3rem;
font-weight: bold;
}

.Text2{
font-size: 2rem;
font-weight: 700;
margin-top: 1rem;

}

.t-blur1{
    top: 20rem;
    left: -18rem;
}

@media screen and (max-width: 680px) {
padding-top: 1rem;

.Text1{
    font-size: 2rem;
    font-weight: bold;
    
  }

.Text2{
    font-size: 1rem;
    font-weight: bold;
}

}

`

export const ExperienceInfo = styled('div')`
display:flex;

@media screen and (max-width: 680px) {
   margin-left: 6rem;

}

@media screen and (max-width: 480px) {
   margin-left: 4.5rem;

}

@media screen and (max-width: 370px) {
   margin-left: 3.4rem;

}
`


export const ToolsWrapper = styled('div')`
position: relative;
display: flex;
flex-direction: column;
justify-content: center;

@media screen and (max-width: 1024px){
    flex-wrap: wrap;
    left: 4.5rem;
    margin-top: -2rem;
    transform:scale(0.8);
    gap: 2rem;

}


@media screen and (max-width: 680px) {
    flex-wrap: wrap;
    margin-top: -2rem;
    transform:scale(0.8);

}


`


export const CircleWrapper =  styled(motion.div)`
left: -3rem;
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

@media screen and (max-width: 1024px){
   
    margin-left: -10rem;
    

}


@media screen and (max-width: 680px) {
    left: 8rem;
}


@media screen and (max-width: 480px) {
    left: 7rem;
}

@media screen and (max-width: 370px) {
    left: 6rem;
}


`
export const IconCircle = styled(motion.div)`
width: 3rem;
height: 3rem;
position: absolute;
border-radius: 100%;
border: 5px solid var(--emerald);
display: flex;
align-items: center;
justify-content: center; 
background: white;
box-shadow: -10px -10px 30px rgba(32, 126, 40, 0.18);

img{
    transform: scale(0.3);
}



`

export const Button = styled('button')`
width: 15rem;
height: 4rem;
font-weight: bold;
font-size: 1.5rem;


@media screen and (max-width: 680px) {
margin-top: 1rem;
margin-left: 3rem;
}

@media screen and (max-width: 680px) {
margin-left: 0rem;

}

`

