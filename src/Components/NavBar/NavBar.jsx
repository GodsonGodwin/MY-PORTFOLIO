import React, { useEffect, useState, useContext } from 'react'
import Toggle from '../Toggle/Toggle';
import  Bar from '@iconscout/react-unicons/icons/uil-bars';
import {
    NavBarWrapper, 
    Container,
    NavBarBrand, 
    MyName, 
    NavBarMenu,
    Menu,
    MenuItem,
    NavLinks,
    Button,
    MobileIcon,
    CancelBtn
 } from './NavBarStyle'
 import {Link} from 'react-scroll';
 import {themeContext} from '../../Context';

const NavBar = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const [click, setClick] = useState(false)
    const [showDropDownButton, setShowDropDownButton] = useState(true)

    const showButton = () =>{
        if (window.innerWidth <= 960){
            setShowDropDownButton(false)
        }

        else{
            setShowDropDownButton(true)
        }
    }

    useEffect(() =>{
        showButton();
        
        
    }, [])

    const Scroll = ()=>{
        setClick(!click);
        document.body.style.overflowY='scroll'
    }

    window.addEventListener('resize', showButton);

  return (
   <NavBarWrapper style={{background: darkMode ? '#020c1b' : ''}}>
       <Container className='container'>
       <NavBarBrand>
           <MyName>Godson</MyName>
          
            <Toggle/>

          <MobileIcon onClick={()=>setClick(!click)}> 
            {click ? '' : 
            <Bar size='2rem' onClick={()=> document.body.style.overflowY='hidden'}/> }
        </MobileIcon>
       </NavBarBrand>

       <NavBarMenu 
       onClick={()=> {
           setClick(!click);
           document.body.style.overflowY='scroll'}}
           click={click}>
            
           <Menu>
               <MenuItem>

               <Link spy={true} to='NavBar' smooth={true} activeClass="activeClass" onClick={Scroll}>
               <NavLinks>Home</NavLinks>
               </Link>
               
               <Link spy={true} to='Services' smooth={true} onClick={Scroll} >
               <NavLinks>
                   Services</NavLinks>
               </Link>

               <Link spy={true} to='Experience' smooth={true} onClick={Scroll} >
               <NavLinks>Experience</NavLinks>
               </Link>

               <Link spy={true} to='Portfolio' smooth={true} onClick={Scroll} >
               <NavLinks>Portfolio</NavLinks>
               </Link>

               <Link spy={true} to='Testimonials' smooth={true} onClick={Scroll} >
               <NavLinks>Testimonials</NavLinks>
               </Link>

               <Link smooth={true} onClick={Scroll} >
               <CancelBtn  size='2rem' onClick={()=> document.body.style.overflowY='scroll'} />
               </Link>

            </MenuItem>
           </Menu>

           <Link spy={true} to='Contact' smooth={true} onClick={Scroll} >
           <Button>Contact</Button>
           </Link>

       </NavBarMenu>
       </Container>
   </NavBarWrapper>
  )
}

export default NavBar