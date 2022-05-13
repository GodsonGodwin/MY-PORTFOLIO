import styled from 'styled-components'
import {motion} from 'framer-motion';


export const ServiceWrapper = styled('div')`
padding: 0 3rem;
display: flex;
height: 90vh;
margin-bottom: 12rem;
margin-top: 5rem;

@media screen and (max-width: 480px){
  
    margin-top: 15rem;
    flex-direction: column;
    gap: 5rem;
    height: 66rem;
    padding: 0;
    /* position: relative; */

  
}
 
`
export const ServiceInfo = styled('div')`
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
    font-size: 20px;
    color: var(--gray);
    font-weight: 700;
    margin-top: 1rem;
}


`

export const CardWrapper = styled('div')`
position: relative;
margin-left: 5rem;

@media screen and (max-width: 480px) {
*{
        position: static;

    }
}
`
export const ServiceCards = styled(motion.div)`
position:absolute;

@media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    gap: 17rem;
}

`

export const Button = styled('button')`
width: 8rem;
height: 2rem;
margin-top: 2rem;
font-weight: bold;

`