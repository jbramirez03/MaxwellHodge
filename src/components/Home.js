import React from 'react'
import homeImg from '../images/main.png';

const Home = () => {
    return (
        <div className='home__section section container' id='home'>
            <div className='home__background'></div>
            <img src={homeImg} />
        </div>
    )
}

export default Home