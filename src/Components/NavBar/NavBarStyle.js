import styled from "styled-components";

export const NavBarWrapper = styled('div')`
height:10vh;
display: flex;
justify-content: space-between;
`

export const NavBarBrand = styled('div')`
flex: 1;
align-items: center;
display: flex;
gap: 2rem;
`

export const MyName = styled('div')`
font-size: 1.3rem;
font-weight: bold;
color: var(--emerald);
`

export const NavBarMenu = styled('div')`
display: flex;
flex: 1;
align-items:center;
justify-content: center;
font-weight: bold;
`

export const Menu = styled('div')`
flex: 10;

@media screen and (max-width: 480px) {
   display: none;
}

`
export const MenuItem = styled('ul')`
display: flex;
gap: 2rem;
margin-right: 4rem;
list-style-type: none;
`
export const NavLinks = styled('li')`
font-weight: bold;


&:hover{
     cursor: pointer;
     color: var(--emerald);
}
`
export const Button = styled('button')`
flex: 2;
font-weight: bold;

@media screen and (max-width: 480px) {
   display: none;
}
`
