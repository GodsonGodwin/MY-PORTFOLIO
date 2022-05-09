import React from 'react'
import {
    NavBarWrapper, 
    NavBarBrand, 
    MyName, 
    NavBarMenu,
    Menu,
    MenuItem,
    NavLinks,
    Button
 } from './NavBarStyle'

const NavBar = () => {
  return (
   <NavBarWrapper>
       <NavBarBrand>
           <MyName>Godson</MyName>
           <span>Toggle</span>
       </NavBarBrand>

       <NavBarMenu>
           <Menu>
               <MenuItem>
               <NavLinks>Home</NavLinks>
               <NavLinks>Services</NavLinks>
               <NavLinks>Experience</NavLinks>
               <NavLinks>Portfolio</NavLinks>
               <NavLinks>Testimonials</NavLinks>
               </MenuItem>
           </Menu>

           <Button>Contact</Button>

       </NavBarMenu>
   </NavBarWrapper>
  )
}

export default NavBar