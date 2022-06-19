import styled from 'styled-components'

export const Wrapper = styled('div')`
height: 100vh;
width: 100vw;
position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 2000000;
  backdrop-filter: blur(7px);

`

export const Overlay = styled('div')`
height: 100vh;
width: 100vw;
position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 30, 0.6);
  
`


export const ModalContent = styled('div')`
height: 24rem;
width: 35rem;
padding: 1rem;
display: flex;
gap: 1rem;
flex-direction: column;
margin: 4rem auto;
background: aliceblue;
border-radius: 40px;
border: 2px solid var(--black);
box-shadow: -20px 20px 30px rgba(32, 126, 40, 0.137);

position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media screen and (max-width: 680px) {
    min-height: 27rem;
    width: 85%;
    padding: 1rem;
    border-radius: 10px;
    
  } 
`

export const ImageWrap = styled('div')`
align-content: center;
margin: 0.5rem auto 0 auto;

.projectImage{
height:9.5rem;
width: 16rem; 

:hover{
    transform: scale(1.07);
  }
  
}


@media screen and (max-width: 680px) {
    margin: 2rem auto 0 auto;
  
  .projectImage{
    height:8rem;
    width: 13rem; 

:hover{
    transform: scale(1.07);
  }
  
}
}
  `

export const TextWrap = styled('div')`
display: flex;
flex-direction: column;
gap: 0.7rem;
text-align: center;
margin-top: -0.5rem;


.headline{
    font-weight: bold;
    font-size: 1.2rem;
    color:var(--emerald);
}

.description{
    font-weight: 400;
    font-size: 20px;
    margin-bottom: 0.1rem;
    color: var(--black);
}



@media screen and (max-width: 680px) {
    .headline{
    font-size: 1rem;
}

.description{
    font-size: 15px;
    margin-bottom: 0.1rem;
}
   
  }
  `
 
 export const ToolsText = styled('div')`
display: flex;
flex-direction: column;
gap: 0.7rem;
text-align: center;


.toolsUsed{
    font-weight: bold;
    font-size: 1rem;
    color:var(--emerald);
}

.tools{
    font-weight: 400;
    font-size: 20px;
    color:var(--black);
}

.source{
   margin-top: 0.8rem;  
}



@media screen and (max-width: 680px) {
    
.tools{
    font-size: 15px;
}

.source{
    margin-top: 1rem;
   
}

  }
  `

export const Close = styled('div')`
position: absolute;
top: 10px;
bottom: 3rem;
right: 30px;
color: var(--emerald);
padding: 8px 7px;

:hover{
cursor: pointer;
}

@media screen and (max-width: 680px) {
    top: 0px;
    bottom: 2rem;
    
      }
`

export const Links = styled('a')`
text-decoration: none;
background: #041f49;
padding: 0.7rem;
border-radius: 10px;
font-weight: 700;
font-size: 20px;
color: aliceblue;

:hover{
color: var(--emerald)
}

:active{
    font-size: 21px;
}
`