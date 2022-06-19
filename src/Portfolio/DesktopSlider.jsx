import React, { useState } from 'react'
import { 
    PortfolioWrapper,
 } from './PortfolioStyle'
 import { Swiper, SwiperSlide} from 'swiper/react';
 import { Mousewheel, Pagination} from "swiper";
 import 'swiper/css';

 import styled from 'styled-components';
 import ProjectModal from './ProjectModal/ProjectModal';

import {Data} from './ProjectModal/Data';
 
 const Wrap = styled('div')`
    width: 100%;
    margin-top: 1rem;
 @media screen and (max-width: 680px) {
        display: none;
}

.swiper{
    width: 100%;
    height: 70%;
}

.swiper-pagination-bullet-active{
    background: var(--emerald);
}

.swiper-slide{
    display: flex;
    align-items: center;
    justify-content: center;
}

.swiper-pagination{
    margin-bottom: -120px;
}
 `

const DesktopSlider = () => {
    const [openModal, setOpenModal] = useState(false);
    const [clickedProjectId, setClickedProjectId] = useState();

    return(
        
      <Wrap >
 <Swiper
          spaceBetween={5}
          slidesPerView={2}
          grabCursor={true}
          modules={[Mousewheel, Pagination]}
          mousewheel={true}
          pagination={{clickable:true}}
          className='project-slider'
          >
              <SwiperSlide 
              onClick={()=>{
                  setOpenModal(true)
                  setClickedProjectId(1)
                  }}>
                  <img className='Project' src='/image/social.png' alt='Projects'/>
              </SwiperSlide>
              
              <SwiperSlide
              onClick={()=>{
                setOpenModal(true)
                setClickedProjectId(2)
                }}>
                  <img className='Project' src='/image/grocery.png' alt='Projects'/>
              </SwiperSlide>

              <SwiperSlide
              onClick={()=>{
                setOpenModal(true)
                setClickedProjectId(3)
                }}>
                  <img  className='Project' src='/image/travel.png' alt='Projects'/>
              </SwiperSlide>

              <SwiperSlide
              onClick={()=>{
                setOpenModal(true)
                setClickedProjectId(4)
                }}>
                  <img className='Project' src='/image/task.png' alt='Projects'/>
              </SwiperSlide>

              
              <SwiperSlide
              onClick={()=>{
                setOpenModal(true)
                setClickedProjectId(5)
                }}>
                  <img className='Project' src='/image/calculator.png' alt='Projects'/>
              </SwiperSlide>
          

              <SwiperSlide
              onClick={()=>{
                setOpenModal(true)
                setClickedProjectId(6)
                }}>
                  <img className='Project' src='/image/marketing.png' alt='Projects'/>
              </SwiperSlide>
              </Swiper>


         {openModal && 
         <ProjectModal
         {...(Data.find((item)=>item.id === clickedProjectId))}
         onClose={()=> {
             setOpenModal(false)
             document.body.style.overflowY='scroll'
            }}
         hideScroll={()=> setOpenModal(true)} />}
      </Wrap>

    )
    
}

export default DesktopSlider