import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo/logo.png';
import SocialList from '../SocialList';
import DropdownLang from '../DropdownLang';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <SocialList />
                    <DropdownLang />
                    {/* @@include('../components/_dropdown-lang.html') */}
                </div>
                <div className="footer-main">
                    <div className="row gy-4">
                        <div className="col-lg-4 col-xl-3">
                            <Link className="footer-logo" to="/">
                                <img src={Logo} alt="" />
                            </Link>
                            <p className="footer-desc">
                                RailVest offers a seamless avenue for establishing a cutting-edge investment platform without
                                necessitating coding expertise within a short time.
                            </p>
                        </div>
                        <div className="col-6 col-sm-3 col-lg-2 col-xl-1.5">
                            <div className="footer-item">
                                <h6 className="footer-item__title">Site Links</h6>
                                <ul className="footer-menu">
                                    <li className="footer-menu__item">
                                        <Link className="footer-menu__link" to="/">
                                            Home
                                        </Link>
                                    </li>
                                    <li className="footer-menu__item">
                                        <Link className="footer-menu__link" to="/properties">
                                            Properties
                                        </Link>
                                    </li>
                                    <li className="footer-menu__item">
                                        <Link className="footer-menu__link" to="/blogs">
                                            Blogs
                                        </Link>
                                    </li>
                                    <li className="footer-menu__item">
                                        <Link className="footer-menu__link" to="/contact">
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-6 col-sm-3 col-lg-2 col-xl-1.5">
                            <div className="footer-item">
                                <h6 className="footer-item__title">Polices</h6>
                                <ul className="footer-menu">
                                    <li className="footer-menu__item">
                                        <Link className="footer-menu__link" to="#">
                                            Cookie Policy
                                        </Link>
                                    </li>
                                    <li className="footer-menu__item">
                                        <Link className="footer-menu__link" to="#">
                                            Privacy Policy
                                        </Link>
                                    </li>
                                    <li className="footer-menu__item">
                                        <Link className="footer-menu__link" to="#">
                                            Terms of Service
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 col-xl-3">
                            <div className="footer-item">
                                <h6 className="footer-item__title">Contact Us</h6>
                                <ul className="footer-contact-menu">
                                    <li className="footer-contact-menu__item">
                                        <div className="footer-contact-menu__icon">
                                            <i className="las la-phone"></i>
                                        </div>
                                        <Link className="footer-contact-menu__link" to="tel:+44 20 1234 5678">
                                            +44 20 1234 5678
                                        </Link>
                                    </li>
                                    <li className="footer-contact-menu__item">
                                        <div className="footer-contact-menu__icon">
                                            <i className="las la-envelope"></i>
                                        </div>
                                        <Link className="footer-contact-menu__link" to="mailto:support@realvest.com">
                                            support@realvest.com
                                        </Link>
                                    </li>
                                    <li className="footer-contact-menu__item">
                                        <div className="footer-contact-menu__icon">
                                            <i className="las la-map-marker-alt"></i>
                                        </div>
                                        <p className="footer-contact-menu__link">
                                            123 Main Street, London
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-sm-12 col-xl-3">
                            <div className="footer-item">
                                <h6 className="footer-item__title">Subscribe for updates</h6>
                                <p className="footer-item__desc">Never Miss Our Latest Blogs and Announcements</p>
                                <form className="footer-subscribe">
                                    <input className="footer-subscribe__input" type="text" placeholder="Enter your email here..." />
                                    <button className="btn btn--sm btn--icon btn--base" type="submit">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-chevron-right-icon lucide-chevron-right">
                                            <path d="m9 18 6-6-6-6"></path>
                                        </svg>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="footer-watermark">REALVEST</div>
                </div>
                <div className="footer-bottom">
                    <p className="footer-copyright">
                        ©2025 <a href="index.html">Realvest</a> All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer


