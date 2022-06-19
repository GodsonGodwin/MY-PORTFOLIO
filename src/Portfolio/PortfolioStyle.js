import styled from 'styled-components';
import MobileSlider from './MobileSlider';

export const PortfolioWrapper = styled('div')`
padding: 2rem 0rem;
display: flex;
align-items:center;
flex-direction: column;
height: 25rem;
margin-top: 4rem;
margin-bottom: 5rem;

.Text1{
    color: var(--black);
    font-size: 2rem;
    font-weight: bolder;
}

.Text2{
    color: var(--emerald);
    font-size: 2.5rem;
    font-weight: bolder;
}

.swiper{
    overflow: visible!important;
}

.project-slider{
    margin-top: 3rem;
    width: 100%;
}

.swiper-slide{
    width: 22rem;
}

.Project{
    width: 30rem;
    filter: drop-shadow(-12px 15px 13px rgba(0, 0,0, 0.25));

    :hover{
    transform: scale(1.02);
    transition: ease-in-out;
  }

}

@media screen and (max-width: 680px) {
    height:20rem;
    margin-top: 2rem;

    .Text2{
    font-size: 1.5rem;
}

.Project{
    width: 20rem;

}
}
`

