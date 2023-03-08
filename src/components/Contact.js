import React from 'react'

const Contact = () => {
    return (
        <div className='container contact__section' id='contact'>
            <div className="contact__container">
                <div className="contact__left">
                    <h1 className="contact__title">Get in touch</h1>
                    <h2 className="contact__subtitle">Send a Message</h2>
                    <form className="contact__form" method='POST' action=''>
                        <div className="contact__inputs">
                            <div className="contact__content">
                                <input type="email" name='email' id='email' placeholder=' ' className="contact__input" />
                                <label htmlFor="email" className='contact__label'>Email</label>
                            </div>
                            <div className="contact__content">
                                <input type="text" name='subject' id='subject' placeholder=' ' className="contact__input" />
                                <label htmlFor="subject" className='contact__label'>Subject</label>
                            </div>
                            <div className="contact__content contact__area">
                                <textarea name="message" id="message" placeholder=' ' className='contact__input' data-gramm_editor="false"
                                    data-enable-grammarly="false"></textarea>
                                <label htmlFor="message" className='contact__label'>Message</label>
                            </div>
                        </div>
                        <button className="contact__button" action='submit'>
                            Send Message
                            <i className="ri-arrow-right-up-line button__icon"></i>
                        </button>
                    </form>
                </div>
                <div className="contact__options">
                    <div className="contact__option">
                        <h3 className="option__title">Call</h3>
                        <p className="option__description">Torem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <a className="option__link" href='tel:3365243110'>
                            <i className="ri-phone-line"></i> 336-524-3110
                        </a>
                    </div>
                    <div className="contact__option">
                        <h3 className="option__title">Email</h3>
                        <p className="option__description">Torem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <a className="option__link" href='mailto:maxwellchodge@gmail.com' rel='__blank'>
                            <i className="ri-mail-line"></i> maxwellchodge@gmail.com
                        </a>
                    </div>
                    <div className="contact__option">
                        <h3 className="option__title">Socials</h3>
                        <p className="option__description">Torem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <a className="option__link"><i className="ri-instagram-line"></i></a>
                        <a className="option__link"><i className="ri-facebook-fill"></i></a>
                    </div>
                </div>
            </div>
            <div className="contact__faq">
                <div className="faq__titles">
                    <h3 className="faq__small">FAQ</h3>
                    <h1 className="faq__big">Frequently<br />Asked<br />Questions</h1>
                </div>

                <div className="faq__questions">
                    <div className="questions__group">
                        <div className="question__block">
                            <header className="question__header">
                                <i className="ri-add-line question__icon"></i>
                                <h3 className="question__title"></h3>
                            </header>
                            <div className="question__content">
                                <p className="question__description"></p>
                            </div>
                        </div>
                        <div className="question__block">
                            <header className="question__header">
                                <i className="ri-add-line question__icon"></i>
                                <h3 className="question__title"></h3>
                            </header>
                            <div className="question__content">
                                <p className="question__description"></p>
                            </div>
                        </div>
                    </div>
                    <div className="questions__group">
                        <div className="question__block">
                            <header className="question__header">
                                <i className="ri-add-line question__icon"></i>
                                <h3 className="question__title"></h3>
                            </header>
                            <div className="question__content">
                                <p className="question__description"></p>
                            </div>
                        </div>
                        <div className="question__block">
                            <header className="question__header">
                                <i className="ri-add-line question__icon"></i>
                                <h3 className="question__title"></h3>
                            </header>
                            <div className="question__content">
                                <p className="question__description"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact