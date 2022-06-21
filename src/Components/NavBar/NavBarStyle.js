import styled from "styled-components";
import Cancel from "@iconscout/react-unicons/icons/uil-times";

export const NavBarWrapper = styled("div")`
background: aliceblue;
position: fixed;
width: 100%;
top: 0;
z-index: 10000;
padding: 10px 0;
`;

export const Container = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavBarBrand = styled("div")`
  align-items: center;
  display: flex;
  gap: 1rem;
`;

export const MyName = styled("div")`
  font-size: 1.3rem;
  font-weight: bold;
  color: var(--emerald);
`;

export const NavBarMenu = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  

  @media screen and (max-width: 960px) {
   display: flex;
    flex-direction: column;
    width: 100%;
    padding: 2rem 0;
    text-align: center;
    position: fixed;
    backdrop-filter: blur(10px);
    top: 50px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition:  0.7 ease-in-out;
    background: rgba(0, 0, 30, 0.8);
    color: white;
    z-index: 1000;
    background-attachment: fixed; 
  }
`;

export const Menu = styled("div")`
  display: flex;
`;

export const MenuItem = styled("ul")`
  display: flex;
  gap: 2rem;
  list-style-type: none;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    
  }
`;
export const NavLinks = styled("li")`
font-weight: 500;


&:hover{
     cursor: pointer;
     color: var(--emerald);
}

@media screen and (max-width: 960px) {
   font-size: 25px;
  text-align: center;
    &:hover {
      transition: all 0.3s ease;
    }
  }
`;
export const Button = styled("button")`
  font-weight: 500;

  @media screen and (max-width: 960px) {
display: none;
}
`;
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: flex;
    position: absolute;
    top: 5px;
    right: 20px;
    color: #fff;
    cursor: pointer;
    color: var(--emerald);
  }
`;

export const CancelBtn = styled(Cancel)`
  display: none;

  @media screen and (max-width: 960px) {
    display: flex;
    margin: 0 auto;
    color: #fff;
    cursor: pointer;
    color: var(--emerald);
    border: 2px solid white;
    border-radius: 100%;
  }
`;
