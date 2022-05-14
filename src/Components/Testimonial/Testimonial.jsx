import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Mousewheel, Pagination, Autoplay } from 'swiper';
import 'swiper/css/pagination';
// import 'swiper/css/mousewheel'

import { ContentWrapper, Header, Wrapper } from './TestimonialStyle';
import { reviews } from './Data';


const Testimonial = () => {


  return (
    <Wrapper id='Testimonials'>
        <Header>
            <span>What they say about me</span>
            <div className="blur t-blur1" style={{ background: "#8da5da70" }}></div>
            <div className="blur t-blur2" style={{ background: "#90e47684" }}></div>

        </Header>

        <Swiper
        modules={[Pagination, Mousewheel, Autoplay]}
        slidesPerView={1}
        grabCursor={true}
        pagination={{clickable:true}}
        autoplay={{
            delay: 3500,
            disableOnInteraction: true,
          }}
        >
        
        {reviews.map((review, index) =>{
                return(
                    <SwiperSlide key={index}>
                        <ContentWrapper>
                        <img src={review.img} alt="Client"/>
                        <span className='Text1'>{review.name}</span>
                        <span className='Text2'>{review.job}</span>
                        <span className='Text3'>{review.feedback}</span>
                        </ContentWrapper>
                   
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </Wrapper>
  )
}

export default Testimonial