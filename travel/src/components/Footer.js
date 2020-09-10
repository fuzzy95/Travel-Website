import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="footer_container">
            <section className="footer_subscription">
                <p className="footer_subscription_heading">
                    Join with us to receive the best
                    vacation deals in reasonable prices
                </p>

                <p className="footer_subscription_text">
                    Unsubscribe this at anytime.
                </p>

                <div className="input_areas">
                    <form>
                        <input type="email" name="email" placeholder="Email" className="footer_input" />
                        <Button buttonStyle="btn__outline">Subscribe</Button>
                    </form>
                </div>
            </section>

            <div className="footer_links">
                <div className="footer_links_wrapper">
                    <div className="footer_links_items">
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Carrers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Services</Link>
                    </div>

                    <div className="footer_links_items">
                        <h2>Contact Us</h2>
                        <Link to='/'>Contact</Link>
                        <Link to='/'>Support</Link>
                        <Link to='/'>Destinations</Link>
                        <Link to='/'>Sponsorship</Link>
                    </div>
                </div>

                <div className="footer_links_wrapper">
                    <div className="footer_links_items">
                        <h2>Videos</h2>
                        <Link to='/'>Submit Videos</Link>
                        <Link to='/'>Influencer</Link>
                        <Link to='/'>Agency</Link>
                    </div>

                    <div className="footer_links_items">
                        <h2>Social Media</h2>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>Youtube</Link>
                        <Link to='/'>Twitter</Link>
                    </div>
                </div>
            </div>
            <section className="social_media">
                <div className="social_media_wrap">
                    <div className="footer_logo">
                        <Link to='/' className="social_logo">
                            TRVL <i className="fab fa-typo3"></i>
                        </Link>
                    </div>

                    <small className="website_rights">TRVL &copy; 2020</small>

                    <div className="social_icon">
                        <Link className="social_icon_link facebook" to="/" target="_blank" aria-label="Facebook">
                            <i className="fab fa-facebook"></i>
                        </Link>

                        <Link className="social_icon_link instagram" to="/" target="_blank" aria-label="Instagram">
                            <i className="fab fa-instagram"></i>
                        </Link>

                        <Link className="social_icon_link twitter" to="/" target="_blank" aria-label="Twitter">
                            <i className="fab fa-twitter"></i>
                        </Link>

                        <Link className="social_icon_link youtube" to="/" target="_blank" aria-label="Youtube">
                            <i className="fab fa-youtube"></i>
                        </Link>

                        <Link className="social_icon_link linkedin" to="/" target="_blank" aria-label="Linkedin">
                            <i className="fab fa-linkedin"></i>
                        </Link>

                        <Link className="social_icon_link github" to="/" target="_blank" aria-label="Github">
                            <i className="fab fa-github"></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer;
