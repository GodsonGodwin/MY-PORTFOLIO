import React, { useContext } from "react";
import { 
    PortfolioWrapper,
 } from './PortfolioStyle'
 import { Swiper, SwiperSlide} from 'swiper/react';
 import { Mousewheel} from "swiper";
 import 'swiper/css';

 import Sidebar from '../img/sidebar.png';
 import Ecommerce from '../img/ecommerce.png';
 import HOC from '../img/hoc.png';
 import Musicapp from '../img/musicapp.png';
import MobileSlider from './MobileSlider';
import DesktopSlider from './DesktopSlider';
import { themeContext } from "../Context";

const Portfolio = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
      <PortfolioWrapper id='Portfolio'>
          <span 
          style={{ color: darkMode ? "var(--gold)" : "" }}
          className='Text1'>Recent Projects</span>
          <span className='Text2'>Source Code on Github</span>

        <MobileSlider/>
        <DesktopSlider />
        
       
      </PortfolioWrapper>

     
  )
}

export default Portfolio