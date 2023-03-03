import React from 'react'
import aboutImg from '../images/about.jpg';

const About = () => {
    return (
        <div className='about__section section container' id='about'>
            <div className="about__image-container">
                <img src={aboutImg} alt="Potraitsss" />
            </div>
            <div className="about__details">
                <h3 className="about__title"></h3>
                <h1 className="about__subtitle"></h1>
                <div className="about__socials"></div>
                <p className="about__description"></p>
                <button className="about__button"></button>
            </div>
        </div>
    )
}

export default About