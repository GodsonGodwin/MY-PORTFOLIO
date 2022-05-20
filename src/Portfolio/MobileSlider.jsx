        
        
import React from 'react'
import { 
    PortfolioWrapper,
 } from './PortfolioStyle'
 import { Swiper, SwiperSlide} from 'swiper/react';
 import { Mousewheel} from "swiper";
 import 'swiper/css';
 import styled from 'styled-components';

 import Sidebar from '../img/sidebar.png';
 import Ecommerce from '../img/ecommerce.png';
 import HOC from '../img/hoc.png';
 import Musicapp from '../img/musicapp.png';
 

 const Wrap = styled('div')`
 display: none;
 width: 100%;
 @media screen and (max-width: 680px) {
        display: block;
}
 `
const MobileSlider = () => {
  return (

    <Wrap>
<Swiper
          spaceBetween={0}
          slidesPerView={1}
          grabCursor={true}
          modules={[Mousewheel]}
          mousewheel={true}
          className='project-slider'
          >
              <SwiperSlide>
                  <img className='Project' src={Sidebar} alt='Projects'/>
              </SwiperSlide>
              
              <SwiperSlide>
                  <img className='Project' src={Ecommerce} alt='Projects'/>
              </SwiperSlide>

              <SwiperSlide>
                  <img  className='Project'src={HOC} alt='Projects'/>
              </SwiperSlide>

              <SwiperSlide>
                  <img className='Project' src={Musicapp} alt='Projects'/>
              </SwiperSlide>
          </Swiper>
          </Wrap>
          
  )
}

export default MobileSlider