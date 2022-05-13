import React from 'react'
import { IconWrapper, ToggleButton } from './ToggleStyle';
import Sun from '@iconscout/react-unicons/icons/uil-sun';
import Moon from '@iconscout/react-unicons/icons/uil-moon';
import { themeContext } from '../../Context';
import { useContext } from 'react';
const Toggle = () => {
    const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode; 

  const handle = ()=>{
    theme.dispatch({type:'toggle'})

  }
  return (
    <IconWrapper onClick={handle}>
        <Sun/>
        <Moon/>
        
        <ToggleButton
        style={darkMode ? {left: '2px'} : {right: '2px'}}
         >
    
        </ToggleButton>
    </IconWrapper>
  )
}

export default Toggle