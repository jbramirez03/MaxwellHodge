import React from 'react'
import homeImg from '../images/main.png';

const Home = () => {
    return (
        <div className='home__section section container' id='home'>
            <div className='home__background'></div>
            <div className="home__image-container">
                <img src={homeImg} />
                <h1 className='home__title'>Maxwell Hodge</h1>
                <button className="home__button">Reach Me</button>
            </div>
        </div>
    )
}

export default Home