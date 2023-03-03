import React from 'react'
import { Link } from 'react-router-dom';
import logoImg from '../images/home.png';


const Header = () => {

    const [menuState, setMenuState] = React.useState(false);
    const [scrollState, setScrollState] = React.useState(false);

    function linkAction() {
        setMenuState(false);
    }
    // navLink.forEach(n => n.addEventListener('click', linkAction))

    function scrollHeader() {
        if (this.scrollY >= 80) setScrollState(true);
        else setScrollState(false);
    }
    window.addEventListener('scroll', scrollHeader);

    return (
        <header className={`header ${scrollState ? 'scroll-header' : ''}`} id='header'>
            <nav className='nav container'>
                <Link to={'/'} className='logo nav__logo'><img src={logoImg} /></Link>
                <div className={`nav__menu ${menuState ? 'show-menu' : ''}`} id='nav-menu'>
                    <ul className="nav__list">
                        <li className="nav__item">
                            <Link className='nav__link' onClick={linkAction} to='/'>Home</Link>
                        </li>
                        <li className="nav__item">
                            <Link className='nav__link' onClick={linkAction} to='/About'>About</Link>
                        </li>
                        <li className="nav__item">
                            <Link className="nav__link" onClick={linkAction} to='/Services'>Services</Link>
                        </li>
                        <li className="nav__item">
                            <Link className="nav__link" onClick={linkAction} to='/Contact'>Contact</Link>
                        </li>
                    </ul>

                    <i className="ri-close-line nav__close" onClick={() => setMenuState(false)} id='nav-close'></i>
                </div>

                <div className='nav__toggle' id="nav-toggle" onClick={() => setMenuState(true)}>
                    <i className="ri-function-line"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header