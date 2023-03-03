import React from 'react'
import aboutImg from '../images/about.jpg';

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
        </div>
    )
}

export default About