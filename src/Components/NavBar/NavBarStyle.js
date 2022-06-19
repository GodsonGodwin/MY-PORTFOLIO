import styled from "styled-components";
import Cancel from "@iconscout/react-unicons/icons/uil-times";

export const NavBarWrapper = styled("div")`
  height: 4rem;
  display: flex;
  position: fixed;
  z-index: 10000;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
`;

export const NavBarBrand = styled("div")`
  flex: 1;
  align-items: center;
  display: flex;
  gap: 1rem;
  width: 100%;
  padding-left: 50px;
`;

export const MyName = styled("div")`
  font-size: 1.3rem;
  font-weight: bold;
  color: var(--emerald);
`;

export const NavBarMenu = styled("div")`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  padding-right: 80px;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    text-align: center;
    position: fixed;
    backdrop-filter: blur(10px);
    padding-right: 0px;
    top: 60px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5 ease;
    background: rgba(0, 0, 30, 0.8);
    color: white;
    z-index: 1000;
    background-attachment: fixed;
  }
`;

export const Menu = styled("div")`
  flex: 10;
`;
export const MenuItem = styled("ul")`
  display: flex;
  gap: 1rem;
  margin-right: 2rem;
  list-style-type: none;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 2rem;
  }
`;
export const NavLinks = styled("li")`
font-weight: bold;


&:hover{
     cursor: pointer;
     color: var(--emerald);

@media screen and (max-width: 960px) {
   font-size: 25px;
  text-align: center;
    &:hover {
      transition: all 0.3s ease;
    }
  }
`;
export const Button = styled("button")`
  flex: 2;
  font-weight: bold;

  /* @media screen and (max-width: 960px) {
display: flex;
margin: 0;
} */
`;
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: flex;
    position: absolute;
    top: 0px;
    right: 0px;
    transform: translate(-100%, 60%);
    color: #fff;
    cursor: pointer;
    color: var(--emerald);
  }
`;

export const CancelBtn = styled(Cancel)`
  display: none;

  @media screen and (max-width: 960px) {
    display: flex;
    transform: translate(-100%, 60%);
    color: #fff;
    cursor: pointer;
    color: var(--emerald);
    margin-left: 7rem;
    border: 2px solid white;
    border-radius: 100%;
    padding: 10px;
  }
`;
