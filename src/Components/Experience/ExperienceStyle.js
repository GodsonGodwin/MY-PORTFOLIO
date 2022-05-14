import styled from 'styled-components'

export const Wrapper = styled('div')`
display: flex;
flex: 1;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 5rem;
height: 30vh;
margin-bottom: 10rem;
`

export const Achievement = styled('div')`
display: flex;
flex-direction: column;
align-items:center;

span{
    font-weight: 700;
}

.Text{
    color: var(--green);
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