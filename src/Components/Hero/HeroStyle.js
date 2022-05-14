import styled from 'styled-components'

export const HeroWrapper = styled('div')`
display: flex;
flex: 1;
height: 40rem;
margin-top: 10rem;
margin-bottom: 5rem;
background: red;

@media screen and (max-width: 480px) {
display: flex;
flex-wrap: wrap;
width: 100%;
gap: 7rem;
height: 50rem;
margin-bottom: 5rem;
margin-top: 5rem;
}
 

`

export const InfoText = styled('div')`
display: flex;
flex: 1;
position: relative;
margin-top:5rem;
flex-direction: column;
gap: 2rem;

@media screen and (max-width: 480px) {
display: column;
gap: 3rem;
margin-bottom: 10rem;
margin-top: 1rem;
}
`

export const MyInfo = styled('div')`
display: flex;
flex-direction: column;
gap: 0.25rem;


.Text1{
color: var(--black);
font-weight: bold;
font-size: 3rem;
color: #ffd700
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

.Text3{
font-weight: 700;
font-size: 23px;
margin-top: 20px;
}

}
`
export const Button = styled('button')`
width: 6rem;
height: 2rem;
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

@media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    left: -7.28rem;
    margin-top: -19rem;

}

`



