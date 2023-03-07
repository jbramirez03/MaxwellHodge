import React from 'react'

const Contact = () => {
    return (
        <div className='section container contact__section' id='contact'>
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
                        <button className="button button--flex" action='submit'>
                            Send Message
                            <i className="ri-arrow-right-up-line button__icon"></i>
                        </button>
                    </form>
                </div>
                <div className="contact__options"></div>
            </div>
            <div className="contact__faq">
                <div className="faq__titles">
                    <h3 className="faq__small"></h3>m
                    <h1 className="faq__big"></h1>
                </div>

                <div className="faq__questions">
                    <div className="question__block"></div>
                    <div className="question__block"></div>
                    <div className="question__block"></div>
                    <div className="question__block"></div>
                    <div className="question__block"></div>
                </div>
            </div>
        </div>
    )
}

export default Contact