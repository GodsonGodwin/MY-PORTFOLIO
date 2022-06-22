import styled from 'styled-components'

export const ServiceWrapper = styled('div')`
display: flex;
margin-bottom: 3rem;
margin-top: 5rem;
padding: 3rem 0;
justify-content: space-between;



@media screen and (max-width: 1100px){
    flex-direction: column;
    gap: 3rem;
}

`
export const ServiceInfo = styled('div')`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 10px;
width: 40%;
text-align: center;

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
    font-size: 30px;
    color: var(--gray);
    font-weight: 500;
    margin-top: 0.5rem;
    letter-spacing: 1px;
}

@media screen and (max-width: 1100px){
width: 100%;
}

@media screen and (max-width: 600px) {
   
    .Text1{
    font-size: 2rem;
}

.Text2{
    font-size: 2rem;
}

    .Text3{
    font-size: 25px; 
    text-align: center;
    }
}

`

export const Button = styled('button')`
margin-top: 10px;
letter-spacing: 1px;
font-weight: 600;
`

export const CardWrapp = styled('div')`
width: 55%;

@media screen and (max-width: 1100px){
width: 100%;
overflow-x: auto;
scroll-behavior: smooth;
}

@media screen and (max-width: 600px) {
    overflow-x:  hidden;
}

`