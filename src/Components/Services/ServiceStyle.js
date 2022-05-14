import styled from 'styled-components'

export const ServiceWrapper = styled('div')`
padding: 0 3rem;
display: flex;
height: 40rem;
margin-bottom: 15rem;
margin-top: 12rem;
padding-top: 3rem;
background: blue;

@media screen and (max-width: 480px){
    display: flex;
    margin-top: 0;
    flex-direction: column;
    gap: 5rem;
    height: 80rem;
    padding: 0;
}
 
`
export const ServiceInfo = styled('div')`
display: flex;
flex-direction: column;
position: relative;
gap: 20px;

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

@media screen and (max-width: 480px) {
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

`