import React, { useContext } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Mousewheel, Pagination, Autoplay } from 'swiper';
import 'swiper/css/pagination';
import { themeContext } from "../../Context";


import { ContentWrapper, Header, Wrapper } from './TestimonialStyle';
import { reviews } from './Data';


const Testimonial = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (

   

    <Wrapper id='Testimonials'>
        <Header>
            <span
            style={{ color: darkMode ? "var(--emerald)" : "" }}
            >What they say about me</span>
            <div className="blur t-blur1" style={{ background: "#8da5da70" }}></div>
            <div className="blur t-blur2" style={{ background: "#90e47684" }}></div>

        </Header>

        <Swiper
        modules={[Mousewheel, Autoplay]}
        slidesPerView={1}
        grabCursor={true}s
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
                        <span 
                        style={{ color: darkMode ? "var(--emerald)" : "" }}
                        className='Text1'>{review.name}</span>
                        <span
                        style={{ color: darkMode ? "aliceblue" : "" }} 
                        className='Text2'>{review.job}</span>
                        <span 
                        style={{ color: darkMode ? "var(--gold)" : "" }}
                        className='Text3'>{review.feedback}</span>
                        </ContentWrapper>
                   
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </Wrapper>
  )
}

export default Testimonial