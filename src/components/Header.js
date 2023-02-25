import React from 'react'
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header className='header' id='header'>
            <nav className='nav container'>
                <Link to={'/'} className='logo nav__logo'>MaxwellHodge</Link>
                <div className="nav__menu" id='nav-menu'>
                    <ul className="nav__list">
                        <li className="nav__item">
                            <Link className='nav__link' to='/'>Home</Link>
                        </li>
                        <li className="nav__item">
                            <Link className='nav__link' to='/about'>About</Link>
                        </li>
                        <li className="nav__item">
                            <Link className="nav__link" to='/services'>Services</Link>
                        </li>
                        <li className="nav__item">
                            <Link className="nav__link" to='/contact'>Contact</Link>
                        </li>
                    </ul>

                    <i className="ri-close-line nav__close" id='nav-close'></i>
                </div>

                <div className="nav__toggle">
                    <i className="ri-function-line"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header