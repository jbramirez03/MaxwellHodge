import React from 'react'
import homeImg from '../images/main.png';

const Home = () => {
    return (
        <div className='home__section section container' id='home'>
            <div className='vl-home vl vl-1' />
            <div className='vl-home vl vl-2' />
            <div className='vl-home vl vl-3' />
            <div className='vl-home vl vl-4' />

            <div className="home__image-container">
                <img src={homeImg} />
                <div className="home__details">

                    <div className="home__line-one">
                        <h1 className='home__title'>Maxwell</h1>
                    </div>
                    <div className="home__line-two">
                        <h1 className='home__title'>Hodge</h1>
                    </div>
                    <button className="home__button">Reach Me</button>
                </div>
            </div>
            <div className="home__form-container">
                <form className="home__form" method='POST' action=''>
                    <div className="home__inputs">
                        <div className="home__content">
                            <input type="email" name='email' id='email' placeholder=' ' className="home__input" />
                            <label htmlFor="email" className='home__label'>Email</label>
                        </div>
                        <div className="home__content">
                            <input type="text" name='subject' id='subject' placeholder=' ' className="home__input" />
                            <label htmlFor="subject" className='home__label'>Subject</label>
                        </div>
                        <div className="home__content home__area">
                            <textarea name="message" id="message" placeholder=' ' className='home__input' data-gramm_editor="false"
                                data-enable-grammarly="false"></textarea>
                            <label htmlFor="message" className='home__label'>Message</label>
                        </div>
                    </div>
                    <button className="home__button" action='submit'>
                        Send Message
                        <i className="ri-arrow-right-up-line button__icon"></i>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Home