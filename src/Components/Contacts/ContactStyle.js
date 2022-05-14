import styled from 'styled-components';

export const  ContactWrapper = styled('div')`
padding: 3rem;
display: flex;
height: 25rem;
margin-top: 12rem;
margin-bottom: 10rem;
background: blue;

@media screen and (max-width: 480px) {
        padding: 2rem 0;
        flex-direction: column;
        gap: 5rem;
        margin-top: 8rem;
        height: 35rem;
}   

`

export const TextWrapper = styled('div')`
display: flex;
flex-direction: column;
position: relative;
flex: 1;

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

@media screen and (max-width: 480px) {
    .Text1{
text-align: center;
font-size: 2.5rem;
};

.Text2{
color: var(--emerald);
font-weight: bold;
font-size: 1.7rem;
text-align: center;
}

}   
`

export const FormWrapper = styled('div')`
display: flex;
justify-content: center;
position: relative;
flex: 1;

@media screen and (max-width: 480px) {
margin-top: 6rem;
}
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

@media screen and (max-width: 480px) {
margin-top: -12rem;
    .userInput{
        width: 15rem;
    }
       
    }

`

export const Button = styled('button')`
width: 5rem;
height: 2rem;
font-weight: bold;

`
