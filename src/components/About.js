import React, { useRef } from 'react'
import aboutImg from '../images/about.jpg';
import firmLogo from '../images/firm.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';



const About = () => {

    return (
        <div className='about__section section container' id='about'>
            <div className="about__content">

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
            </div>
            <Swiper
                className='mySwiper'
                loop
            >
                <SwiperSlide>
                    <div className="review__stars">
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                    </div>
                    <h3 className="review__author">Sydney Miller</h3>
                    <h4 className="review__location">Burlington, NC 2023</h4>
                    <p className="review__description">"Max was very helpful during the home buying process.He was always very
                        professional, polite, honest and up front. Max also listened to any questions or
                        concerns I had about a property and provided solutions. I would recommend Max to
                        anyone who is thinking about buying or selling!"</p>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="review__stars">
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                    </div>
                    <h3 className="review__author">Robert</h3>
                    <h4 className="review__location">Graham, NC 2023</h4>
                    <p className="review__description">"Maxwell has shown that he truly is one of the best real estate agents in this area.
                        The true professionalism of this man need to be recognized. Everything from the
                        professional photographer he had take pictures of the property to talking me through
                        each step very thoroughly. Maxwell will undoubtedly get you the best offer for your
                        home if you are selling and will absolutely fight for every concession if you are
                        buying. I'm definitely going to use him in the future and urge anyone I know to use
                        him as a realtor."</p>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="review__stars">
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                    </div>
                    <h3 className="review__author">Josh A</h3>
                    <h4 className="review__location">Browns Summit, NC 2022</h4>
                    <p className="review__description">"Max was easy to work with. As a first timer selling our home, the process could
                        seem a bit overwhelming. He worked hard to make things go as smoothly as
                        possible. Max was very professional and responsive with any of our questions. He
                        brings experience and knowledge to the table like no other. I will always recommend
                        Maxwell Hodge-Real Estate!"</p>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="review__stars">
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                    </div>
                    <h3 className="review__author">Rachel A</h3>
                    <h4 className="review__location">Browns Summit, NC 2022</h4>
                    <p className="review__description">"Maxwell was a pleasure to work with during our home selling process. He made
                        things easy to understand. He was committed to helping us with any questions while
                        also providing helpful suggestions. Max is very knowledgeable, experienced, and
                        professional, and we look forward to working with him during the purchase of our
                        next home! I will 100% recommend Maxwell to anyone I know!"</p>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="review__stars">
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                    </div>
                    <h3 className="review__author">Boni</h3>
                    <h4 className="review__location">Greensboro, NC 2022</h4>
                    <p className="review__description">"We happened upon Maxwell at an open house in Brown's Summit, and loved his charisma instantly. We just relocated to NC and did not have any idea of where we wanted to live in the Triad area. Maxwell was very helpful, exceedingly patient, and made the transition a joy. He quickly picked up on some of our needs/wants (single floor, mud room for the cat box, etc), and didn't laugh at us when we threw them all out the window to purchase a downtown townhome. If any of my friends are in the market for a new house, I will 100% recommend that they call Maxwell, and if you're reading this review, I recommend you do the same. Moving to a state you're not terribly familiar with is incredibly stressful, and we were lucky to find such a fantastic agent!"</p>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="review__stars">
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                    </div>
                    <h3 className="review__author">Chris H</h3>
                    <h4 className="review__location">Greensboro, NC 2022</h4>
                    <p className="review__description">"This was our second time buying a home. Without prior experience, we found our first realtor to be very good with no complaints. I have to tell you, the difference between very good and excellent are night and day. Maxwell was with us every step of the way, exceptionally attentive, answering phone calls, emails and texts at all hours. We had many concerns about the property and process and he never failed to be immediately on top of everything. We met him randomly at an open house that he was hosting and could not be happier with the serendipity of that meeting. Thank you Maxwell for everything! We would recommend you without hesitation to anyone seeking a steadfast and dedicated realtor to be on their side!"</p>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="review__stars">
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                    </div>
                    <h3 className="review__author">Jamir D.</h3>
                    <h4 className="review__location">Burlington, NC 2022</h4>
                    <p className="review__description">"Max is fantastic! Friendly, knowledgeable, and honest. He is also responsive which
                        makes the whole process a breeze."</p>
                </SwiperSlide>

            </Swiper>
            <div className="association__block">
                <div className="association__title">Associated With:</div>
                <div className="association__image">
                    <img src={firmLogo} alt="firm logo" />
                </div>
            </div>

        </div>
    )
}

export default About