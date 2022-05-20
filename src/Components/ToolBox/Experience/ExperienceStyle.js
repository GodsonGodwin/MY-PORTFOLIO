import styled from 'styled-components'

export const Wrapper = styled('div')`
display: flex;
flex-wrap: wrap;
gap: 3rem;


@media screen and (max-width: 480px) {
display: flex;
flex-direction: row;
flex-wrap: wrap;
}
`

export const Achievement = styled('div')`
width: 10rem;
display: flex;
flex-direction: column;
align-items:center;

span{
    font-weight: 700;
}

.Text{
    color: var(--green);
}

@media screen and (max-width: 480px) {
display: flex;
flex-direction: row;
flex-wrap: wrap;
max-width: 6rem;
justify-content: center;
margin-left: 0.5rem;
}
`

export const Circle = styled('div')`
width: 4rem;
height: 4rem;
border-radius: 100%;
align-items: center;
justify-content: center;
display: flex;
background: white;
position: relative;
font-size: 1.5rem;
font-weight: bolder;
margin-bottom: 2rem;
/* z-index: 10000; */

&:before{
    border-radius: 100%;
    content:'';
    background-image: linear-gradient(to bottom, #000080 20%, #09f311 100%);
    top: -8px;
    bottom: -8px;
    left: -8px;
    right: -8px;
    position: absolute;
    z-index: -1;
    box-shadow: var(--boxShadow);

}
`