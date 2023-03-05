import React from 'react'

const Services = () => {
    return (
        <div className='section container services__container'>
            <div className="services__hero">
                <div className="services__image-container">
                    <img src="" alt="" />
                </div>
                <div className="services__content">
                    <h1 className="services__title">Services</h1>
                    <p className="services__description"></p>
                </div>
            </div>
            <div className="services__blocks">
                <h3 className='services__subtitle'>
                    My Main Focus
                </h3>
                <div className="service__block"></div>
                <div className="service__block"></div>
                <div className="service__block"></div>
            </div>
            <div className="services__info">
                <div className="specializations"></div>
                <div className="areas__served"></div>
            </div>
        </div>
    )
}

export default Services