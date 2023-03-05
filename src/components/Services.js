import React from 'react'
import houseImg from '../images/house.jpeg'
import homeIcon from '../images/homeIcon.png'
import rentIcon from '../images/rent.png'
import dealIcon from '../images/deal.png'

const Services = () => {
    return (
        <div className='section container services__container'>
            <div className="services__hero">
                <div className="services__image-container">
                    <img src={houseImg} alt="residential homes" />
                </div>
                <div className="services__content">
                    <h1 className="services__title">Services</h1>
                    <p className="services__description">
                        Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                    </p>
                </div>
            </div>
            <div className="services__blocks">
                <h2 className='services__subtitle'>
                    My Main Focus
                </h2>
                <div className="service__block">
                    <img src={homeIcon} alt="home icon" />
                    <h3 className='service__block-title'>Buy A Home</h3>
                    <p className="service__block-description">
                        Norem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
                <div className="service__block">
                    <img src={rentIcon} alt="rent icon" />
                    <h3 className='service__block-title'>Rent A Home</h3>
                    <p className="service__block-description">
                        Norem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
                <div className="service__block">
                    <img src={dealIcon} alt="deal icon" />
                    <h3 className='service__block-title'>Invest In A Home</h3>
                    <p className="service__block-description">
                        Norem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
            </div>
            <div className="services__info">
                <div className="specializations"></div>
                <div className="areas__served"></div>
            </div>
        </div>
    )
}

export default Services