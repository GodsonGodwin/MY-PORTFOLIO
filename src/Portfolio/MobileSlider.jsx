        
        
import React, {useState} from 'react'
import { 
    PortfolioWrapper,
 } from './PortfolioStyle'
 import { Swiper, SwiperSlide} from 'swiper/react';
 import { Mousewheel, Pagination} from "swiper";
 import 'swiper/css';
 import styled from 'styled-components';

 import Sidebar from '../img/sidebar.png';
 import Ecommerce from '../img/ecommerce.png';
 import HOC from '../img/hoc.png';
 import Musicapp from '../img/musicapp.png';
import ProjectModal from './ProjectModal/ProjectModal';
import {Data} from './ProjectModal/Data';
 

 const Wrap = styled('div')`
 display: none;
 width: 100%;
 @media screen and (max-width: 680px) {
        display: block;

        .swiper{
    width: 100%;
    height: 80%;
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
    margin-bottom: -70px;
}
}
 `
const MobileSlider = () => {
    const [openModal, setOpenModal] = useState(false);
    const [clickedProjectId, setClickedProjectId] = useState();

  return (

    <Wrap>
<Swiper
          spaceBetween={0}
          slidesPerView={1}
          grabCursor={true}
          modules={[Mousewheel, Pagination]}
          pagination={{clickable:true}}
          mousewheel={true}
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
                  <img className='Project'  src='/image/task.png' alt='Projects'/>
              </SwiperSlide>

              <SwiperSlide
               onClick={()=>{
                setOpenModal(true)
                setClickedProjectId(5)
                }}>
                  <img className='Project'  src='/image/calculator.png' alt='Projects'/>
              </SwiperSlide>

              <SwiperSlide
               onClick={()=>{
                setOpenModal(true)
                setClickedProjectId(1)
                }}>
                  <img className='Project'  src='/image/marketing.png' alt='Projects'/>
              </SwiperSlide>

          </Swiper>

          {openModal && 
         <ProjectModal
         {...(Data.find((item)=>item.id === clickedProjectId))}
         onClose={()=>{ 
             setOpenModal(false)
             document.body.style.overflowY='scroll'
        }}
         
         hideScroll={()=> setOpenModal(true)} />}
          </Wrap>
          
  )
}

export default MobileSlider