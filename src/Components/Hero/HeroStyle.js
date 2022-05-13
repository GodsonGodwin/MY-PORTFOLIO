import styled from 'styled-components'

export const HeroWrapper = styled('div')`
display: flex;
height: 80vh;
margin-top: 8rem;

.blurBackground{
    width: 100%;
    transform: scale(0.5);
    left: -10%;
    top: -30%;
    position: absolute;


@media screen and (max-width: 480px) {
display: column;
gap: 7rem;
height: 64rem;
margin-bottom: 15rem;
margin-top: 14rem;

}
 
}
`

export const InfoText = styled('div')`
display: flex;
flex: 1;
position: relative;
flex-direction: column;
gap: 2rem;
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
/* color: #ffd700 */
};

.Text3{
color: var(--gray);
font-weight: 700;
font-size: 20px;
margin-top: 10px;
}
`

export const Button = styled('button')`
width: 6rem;
height: 2rem;
font-weight: bold;
`

export const IconWrapper = styled('div')`
margin-top: 3rem;
display: flex;
gap: -5rem;


.icon{
    transform: scale(0.3);
    
}


.icon:hover{
    cursor: pointer;
    

}
`
export const MediaImage=  styled('div')`
flex: 1;
position: relative;

img{
    position: absolute;
    z-index: 1;
}

.image1{
    transform: scale(0.37);
    left: -14%;
    top: 12%;
}

.image2{
    transform: scale(0.7);
    left: 7rem;
    top: -7rem;
}

.image3{
    transform: scale(0.82);
    left: 28%;
    top: -4.2rem;
}

@media screen and (max-width: 480px) {
    transform: scale(1.8);
    left: -12rem;
    margin-top: 18rem;

    .image1{
    left: -7%;
    top: 5%;
    display: none;
}

.image2{
    left: -1rem;
    top: -10rem;
    display: none;
}

.image3{
    /* left: -4%;
    top: -4.6rem; */
}
   



}

`



