import styled from 'styled-components'

export const ServiceWrapper = styled('div')`
padding: 0 3rem;
display: flex;
height: 40rem;
margin-bottom: 8rem;
margin-top: 12rem;
padding-top: 3rem;
gap: 4rem;

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
    padding: 2rem;
}



@media screen and (max-width: 480px){
    display: flex;
    margin-top: 0;
    flex-direction: column;
    gap: 5rem;
    height: 95rem;
    padding: 1rem;
}
 
`
export const ServiceInfo = styled('div')`
display: flex;
flex-direction: column;
position: relative;
align-items: center;
gap: 20px;
margin-top: 5rem;
width: 22rem;

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
    font-weight: 700;
    margin-top: 1rem;
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
    }
}

`

export const Button = styled('button')`
width: 8rem;
height: 2rem;
margin-top: 1rem;
font-weight: bold;

@media screen and (max-width: 1024px){
width: 10rem;
height: 4rem;

}

`