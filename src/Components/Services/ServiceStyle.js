import styled from 'styled-components'

export const ServiceWrapper = styled('div')`
display: flex;
margin-bottom: 3rem;
margin-top: 5rem;
padding: 3rem 0;
justify-content: space-between;
/* background: red; */

@media screen and (max-width: 1024px){
    display: flex;
    flex-direction: column;
    gap: 7rem;
    height: 70rem;
    padding: 1rem;
}

@media screen and (max-width: 680px){
    display: flex;
    flex-direction: column;
    gap: 7rem;
    height: 105rem;
}



@media screen and (max-width: 480px){
    display: flex;
    margin-top: 0;
    flex-direction: column;
    height: 95rem;
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

@media screen and (max-width: 1024px){

gap: 20px;
margin-top: 2rem;
width: 100%;

.Text1{
    font-size: 3rem;
}

.Text3{
    font-size: 40px;
}
}

@media screen and (max-width: 480px) {
    width: 100%;
    margin-top: 2rem;

    .Text3{
    font-size: 25px;
    text-align: cen
    }
}

`

export const Button = styled('button')`
margin-top: 10px;
letter-spacing: 1px;
font-weight: 600;

@media screen and (max-width: 1024px){
width: 10rem;
height: 4rem;

}

`

export const CardWrapp = styled('div')`
width: 55%;

@media screen and (max-width: 1024px){
width: 10rem;
height: 4rem;

}

`