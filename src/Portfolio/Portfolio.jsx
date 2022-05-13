import React from 'react'
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
 

const Portfolio = () => {
  return (
      <PortfolioWrapper id='Portfolio'>
          <span className='Text1'>Recent Projects</span>
          <span className='Text2'>Source Code on Github</span>

          <Swiper
          spaceBetween={30}
          slidesPerView={3}
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

        
       
      </PortfolioWrapper>

     
  )
}

export default Portfolio