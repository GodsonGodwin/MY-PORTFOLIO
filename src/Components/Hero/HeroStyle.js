import styled from 'styled-components'

export const HeroWrapper = styled('div')`
display: flex;
height: 80vh;
margin-top: 6rem;
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


.Text1{
color: var(--black);
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
`

export const Button = styled('button')`
width: 6rem;
height: 2rem;
font-weight: bold;
`

export const IconWrapper = styled('div')`
margin-top: 3rem;
display: flex;
gap: 0rem;

img{
    transform: scale(0.3);
}

img:hover{
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
    transform: scale(0.4);
    left: -35%;
    top: 15%;
}

.image2{
    transform: scale(0.45);
    left: -10rem;
    top: -17rem;
}



.image3{
    transform: scale(0.45);
    left: -5%;
    top: -12.1rem;
}

`



