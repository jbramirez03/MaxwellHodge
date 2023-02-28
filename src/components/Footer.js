import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer section' id='footer'>
            <div className="footer__container container grid">
                <div className="footer__content">
                    <Link to='/' className='footer__logo'>
                        <i className="ri-home-4-fill"></i> Maxwell Hodge
                    </Link>
                </div>
                <div className="footer__content">
                    <h3 className="footer__title">Contact Me</h3>

                    <ul className="footer__data">
                        <li className="footer__information">+13365243110</li>

                        <div className="footer__social">
                            <a
                                href="https://www.instagram.com/"
                                target="_blank"
                                className="footer__social-link">
                                <i className="ri-instagram-line"></i>
                            </a>
                            <a
                                href="https://www.facebook.com/"
                                target="_blank"
                                className="footer__social-link">
                                <i className="ri-facebook-fill"></i>
                            </a>
                        </div>
                    </ul>
                </div>
            </div>
            <p className="footer__copy container">&#169; MaxwellHodge. All rights reserved.</p>
        </div>
    )
}

export default Footer