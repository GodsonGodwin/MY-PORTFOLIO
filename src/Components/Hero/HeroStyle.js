import styled from 'styled-components'


export const HeroWrapper = styled('div')`
display: flex;
flex: 1;
height: 30rem;
margin-top: 8rem;
margin-bottom: 3rem;
gap: 1rem;


@media screen and (max-width: 480px) {
display: flex;
flex-direction: column;
width: 100%;
margin-top: 5rem;
margin-bottom: 1rem;
gap: 1rem;
height: 50rem;
}
 

`

export const InfoText = styled('div')`
display: flex;
flex: 1;
position: relative;
align-items: center;
margin-top:5rem;
flex-direction: column;
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
color: var(--black);
font-weight: bold;
font-size: 3rem;
color: #ffd700;

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
min-width: 10rem;
height: 3rem;
font-size: 1.3rem;
font-weight: bold;
`

export const MediaImage=  styled('div')`
flex: 1;
position: relative;

img{
    position: absolute;
    z-index: 1;
}


.image1{
    transform: scale(0.85);
    left: 7rem;
    top: -1.5rem;
}

.image2{
    transform: scale(1);
    left: 8.5rem;
    top: 1.4rem;
}

@media screen and (max-width: 960px) {
    left: -5rem;
    margin-top: 2rem;
}

@media screen and (max-width: 680px) {
    transform: scale(0.7);
    left: -7rem;
    margin-top: 2rem;

    .image2{
    top: 2rem;
}
}


@media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    left: -3.5rem;
    margin-top: -7rem;

}

@media screen and (max-width: 370px) {
    left: -4.4rem;

}

`



