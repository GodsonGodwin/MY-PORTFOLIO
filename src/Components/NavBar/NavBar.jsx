import React from 'react'
import Toggle from '../Toggle/Toggle'
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
 import {Link} from 'react-scroll';

const NavBar = () => {
  return (
   <NavBarWrapper>
       <NavBarBrand>
           <MyName>Godson</MyName>
          <Toggle/>
       </NavBarBrand>

       <NavBarMenu>
           <Menu>
               <MenuItem>

               <Link spy={true} to='NavBar' smooth={true} activeClass="activeClass">
               <NavLinks>Home</NavLinks>
               </Link>
               
               <Link spy={true} to='Services' smooth={true} >
               <NavLinks>Services</NavLinks>
               </Link>

               <Link spy={true} to='Experience' smooth={true} >
               <NavLinks>Experience</NavLinks>
               </Link>

               <Link spy={true} to='Portfolio' smooth={true} >
               <NavLinks>Portfolio</NavLinks>
               </Link>

               <Link spy={true} to='Testimonials' smooth={true} >
               <NavLinks>Testimonials</NavLinks>
               </Link>

            </MenuItem>
           </Menu>

           <Link spy={true} to='Contact' smooth={true} >
           <Button>Contact</Button>
           </Link>

       </NavBarMenu>
   </NavBarWrapper>
  )
}

export default NavBar