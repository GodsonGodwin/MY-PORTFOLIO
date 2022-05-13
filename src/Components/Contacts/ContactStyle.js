import styled from 'styled-components';

export const  ContactWrapper = styled('div')`
padding: 0 3rem;
display: flex;
height: 80vh;
margin-top: 8rem;

`

export const TextWrapper = styled('div')`
display: flex;
flex-direction: column;
position: relative;
flex: 1;
/* margin-top: 4rem; */

.Text1{
color: var(--black);
font-weight: bold;
font-size: 2.5rem;
};

.Text2{
color: var(--emerald);
font-weight: bold;
font-size: 2.5rem;
};
`

export const FormWrapper = styled('div')`
display: flex;
justify-content: center;
position: relative;
flex: 1;
`

export const Form = styled('form')`
display: flex;
flex-direction: column;
gap: 2rem;
align-items: center;

.userInput{
    width: 20rem;
    height: 2rem;
    padding: 0.3rem;
    outline: none;
    border: 2px solid var(--emerald);
    border-radius: 8px;
    font-size: 16px;
    font-weight: 500;
}

textarea{
    height: 4rem!important;
}

.c-blur1{
    top: 1rem;
    left: 8rem;
}

`

export const Button = styled('button')`
width: 5rem;
height: 2rem;
font-weight: bold;

`
