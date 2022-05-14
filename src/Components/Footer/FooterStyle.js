import styled from 'styled-components'

export const FooterWrapper = styled('div')`
 display: flex;
  align-items: center;
  margin: -0.5rem -4rem;
  position: relative;
  height: 10rem;
  margin-top: -4rem;
  background: red;

  @media screen and (max-width: 480px){
    margin: -0.7rem -4rem;

    img{
      transform: scale(2.5);
    }
}


`

export const FooterContent = styled('div')`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin-top: 4rem;
  gap: 1rem;
  color: white;

  span{
font-weight: bold;
  font-size: 1rem;
  }

  @media screen and (max-width: 480px){
    margin-top: 1rem;

    span{
  font-size: 0.75rem;
  margin-top: 2.5rem;
  }

}

`
export const FooterIcons = styled('div')`
display: flex;
gap: 1rem;

@media screen and (max-width: 480px){
   

}
`