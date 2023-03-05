import React, { useRef } from 'react'
import aboutImg from '../images/about.jpg';
import firmLogo from '../images/firm.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper'
import 'swiper/css';
import "swiper/css/navigation";


const About = () => {

    return (
        <div className='about__section section container' id='about'>
            <div className="about__image-container">
                <img src={aboutImg} alt="Potraitsss" />
            </div>
            <div className="about__details">
                <h3 className="about__title">Real Estate Agent</h3>
                <h1 className="about__subtitle">About Me...</h1>
                <div className="about__socials">
                    <i className="ri-instagram-line"></i>
                    <i className="ri-facebook-line"></i>
                    <i className="ri-mail-line"></i>
                </div>
                <p className="about__description">Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.</p>
                <button className="about__button">Learn More</button>
            </div>
            <div className="association__block">
                <div className="association__title">Associated With:</div>
                <div className="association__image">
                    <img src={firmLogo} alt="firm logo" />
                </div>
            </div>

            <Swiper
                className='mySwiper'
                modules={[Navigation]}
                loop
                navigation={{
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next',
                }}
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <div className="swiper-button-next">
                    <i className="bx bx-chevron-right"></i>
                </div>
                <div className="swiper-button-prev">
                    <i className="bx bx-chevron-left"></i>
                </div>

            </Swiper>
        </div>
    )
}

export default About