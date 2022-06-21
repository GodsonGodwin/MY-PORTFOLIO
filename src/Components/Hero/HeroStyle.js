import styled from 'styled-components'


export const HeroWrapper = styled('div')`
display: flex;
margin-top: 5rem;
margin-bottom: 3rem;
padding: 2rem 0;
justify-content: space-between;
background: red;


@media screen and (max-width: 760px) {
display: flex;
flex-direction: column;
width: 100%;
justify-content: center;
align-items: center;
gap: 2rem;
}
 

`

export const InfoText = styled('div')`
/* background: blue; */
width: 50%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
/* transform: rotate(10deg); */

gap: 2rem;

@media screen and (max-width: 480px) {
display: column;
margin-top: 1rem;
}
`

export const MyInfo = styled('div')`
display: flex;
flex-direction: column;
gap: 0.25rem;
text-align: center;

.Text1{
/* color: var(--blue); */
font-weight: bold;
font-size: 3rem;
/* color: #ffd700; */

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



@media screen and (max-width: 480px) {
display: column;
gap: 1rem;
text-align: center;

.Text1{
font-size: 2rem;
};

.Text2{
font-size: 2.5rem;

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


@media screen and (max-width: 960px) {
    /* left: -5rem;
    margin-top: 2rem;
} */

@media screen and (max-width: 680px) {
    /* transform: scale(0.7);
    left: -7rem;
    margin-top: 2rem;

    .image2{
    top: 2rem;
} */
}


@media screen and (max-width: 480px) {
    /* display: flex;
    flex-direction: column;
    left: -3.5rem;
    margin-top: -7rem;

} */

@media screen and (max-width: 370px) {
    /* left: -4.4rem;

} */

`



