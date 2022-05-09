import styled from 'styled-components'

export const ServiceWrapper = styled('div')`
padding: 0 3rem;
display: flex;
height: 90vh;
margin-bottom: 10rem;
margin-top: 5rem;

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
export const ServiceCards = styled('div')`
position: relative;

`

export const Button = styled('button')`
width: 8rem;
height: 2rem;
margin-top: 2rem;
font-weight: bold;

`