import styled from 'styled-components'


export const HeroWrapper = styled('div')`
display: flex;
margin-top: 5rem;
margin-bottom: 3rem;
padding: 2rem 0;
justify-content: space-between;



@media screen and (max-width: 760px) {
flex-direction: column-reverse;
width: 100%;
justify-content: center;
align-items: center;
gap: 2rem;
}
 

`

export const InfoText = styled('div')`
width: 50%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

gap: 2rem;

@media screen and (max-width: 760px) {
width: 95%;
gap: 1rem;
}
`

export const MyInfo = styled('div')`
display: flex;
flex-direction: column;
gap: 0.25rem;
text-align: center;

.Text1{
color: var(--blue);
font-weight: bold;
font-size: 3rem;

};

.Text2{
color: var(--emerald);
font-weight: bold;
font-size: 3rem;
};

.Text3{
color: var(--gray);
font-weight: 700;
font-size: 20px;
margin-top: 10px;
}



@media screen and (max-width: 760px) {
gap: 0.5rem;

.Text1{
font-size: 2rem;
};

.Text2{
font-size: 2rem;

};

.Text3{
margin-top: 7px;
}

}
`
export const Button = styled('button')`
min-width: 5rem;
font-size: 1.3rem;
font-weight: 500;
`

export const MediaImage=  styled('div')`
width: 40%;
display: flex;
justify-content: center;
transform: rotate(350deg);

.profile{
    border-radius: 35rem;
    border: 1px solid rgba(85,252,0,0.25);
    padding: 1rem 0 0 0;
    background: rgba(85,252,0,0.5);
}


@media screen and (max-width: 760px) {
    width: 95%;
} 

`



