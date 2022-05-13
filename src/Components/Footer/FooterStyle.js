import styled from 'styled-components'

export const FooterWrapper = styled('div')`
 display: flex;
  align-items: center;
  margin: -0.5rem -4rem;
  position: relative;
  margin-top: -4rem;

`

export const FooterContent = styled('div')`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin-top: 5rem;
  gap: 1 rem;
  color: white;

  span{
font-weight: bold;
  font-size: 1rem;

  }

`
export const FooterIcons = styled('div')`
display: flex;
gap: 1rem;
`