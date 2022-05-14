import styled from 'styled-components';

export const PortfolioWrapper = styled('div')`
padding: 2rem 0rem;
display: flex;
align-items:center;
flex-direction: column;
height: 30rem;
background: blue;
margin-top: 16rem;

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
    width: 20rem;
    border-radius: 20px;
    filter: drop-shadow(-12px 15px 13px rgba(0, 0,0, 0.25));
}

`