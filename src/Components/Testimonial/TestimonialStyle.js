import styled from 'styled-components';

export const Wrapper = styled('div')`
padding: 5rem 3rem;
display: flex;
align-items: center;
margin-top: 2rem;
margin-bottom: 0rem;
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

.swiper-pagination{
    margin-bottom: -10px;
}

.swiper-slide{
    display: flex;
    align-items: center;
    justify-content: center;
}

@media screen and (max-width: 680px){    
    margin-top: 3rem;
    margin-bottom: 4rem;
    padding: 2rem;
    

    .swiper{
    height: 80%;
}
  }

`

export const Header =styled('div')`
align-self: center;
margin-bottom: 1rem;

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

@media screen and (max-width: 680px){
     
    span{
        font-size: 1.5rem;
    }   

    .t-blur1{
    right: -5rem;
    bottom: -6rem;
}

.t-blur2{
    top: -3rem;
    left: -1rem;
}
    
}

`

export const ContentWrapper = styled('div')`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
padding: 0.7rem;
width: 30rem;
max-height: 25rem;
margin-bottom:1.5rem;

background: rgba(255, 255, 255, 0.26);
border: 7px solid var(--blueCard);
border-radius: 20px;

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


@media screen and (max-width: 680px){    
    margin-top: -1rem;
    width: 30rem;
    padding: 2.5rem 0.5rem;
    
    .Text2{
    margin-top: 8px;
    font-size: 15px;
    text-align: center;
    
}

.Text3{
    letter-spacing: 1.3px;
    margin-top: 10px;

}
    img{
        width: 70px;
        height: 70px;
    }
  }
`