import React from 'react'

const Contact = () => {
    return (
        <div className='section container contact__section' id='contact'>
            <div className="contact__container">
                <div className="contact__left">
                    <h1 className="contact__title">Get in touch</h1>
                    <form className="contact__form"></form>
                </div>
                <div className="contact__options"></div>
            </div>
            <div className="contact__faq">
                <div className="faq__titles">
                    <h3 className="faq__small"></h3>
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