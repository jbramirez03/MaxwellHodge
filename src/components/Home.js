import React from 'react'
import homeImg from '../images/main.png';

const Home = () => {
    return (
        <div className='home__section section container' id='home'>
            <div className='vl-home vl-1' />
            <div className='vl-home vl-2' />
            <div className='vl-home vl-3' />
            <div className='vl-home vl-4' />

            <div className="home__image-container">
                <img src={homeImg} />
                <div className="line__one">
                    <h1 className='home__title'>Maxwell</h1>
                </div>
                <div className="line__two">
                    <h1 className='home__title'>Hodge</h1>
                </div>
                <button className="home__button">Reach Me</button>
            </div>
        </div>
    )
}

export default Home