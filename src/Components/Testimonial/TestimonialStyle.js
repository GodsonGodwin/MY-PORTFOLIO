import styled from 'styled-components';

export const Wrapper = styled('div')`
padding: 0 3rem;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
margin-top: 7rem;
flex-direction: column;
gap: 1rem;
position:relative;

.swiper{
    width: 100%;
    height: 70%;
}

.swiper-pagination-bullet-active{
    background: var(--emerald);
}

.swiper-slide{
    display: flex;
    align-items: center;
    justify-content: center;
}

`

export const Header =styled('div')`
align-self: center;

.t-blur1{
    left: 38rem;
    top: 18rem;
}

.t-blur2{
    top: 8rem;
    left: -1rem;
}


span{
    font-size: 2rem;
    font-weight: bold;
}

`

export const ContentWrapper = styled('div')`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
padding: 2rem;
width: 30rem;
height: 12rem;
background: rgba(255, 255, 255, 0.26);
border: 7px solid var(--blueCard);
border-radius: 20px;
box-shadow: var(--boxShadow);

img{
    width: 6rem;
    height: 6rem;
    border-radius: 100%;
}

.Text1{
    color:var(--black);
    font-weight: bold;
    margin-top: 10px;
}

.Text2{
    color: var(--gray); 
    letter-spacing: 1.5px;
    margin-top: 5px;
    font-size: 15px;
    font-weight: bold;
    color: var(--emeraldCard)
}

.Text3{
    color: var(--gray); 
    letter-spacing: 1.5px;
    margin-top: 10px;
}
`