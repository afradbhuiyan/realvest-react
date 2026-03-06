import { Link } from 'react-router-dom'
import AboutThumb from '../assets/images/thumbs/about-us/thumb.png'
import AvatarThumb from '../assets/images/thumbs/about-us/avatar.png'

const AboutUs = () => {
    return (
        <section className="about-us py-120">
            <div className="container">
                <div className="row gy-4 gy-lg-0 align-items-center">
                    <div className="col-lg-6">
                        <img className="about-us__thumb" src={AboutThumb} alt="" />
                    </div>
                    <div className="col-lg-6">
                        <div className="section-heading style-left">
                            <span className="section-heading__tagline">
                                About RealVest
                            </span>
                            <h2 className="section-heading__title">
                                About Our Real Estate
                            </h2>
                            <p className="section-heading__desc">
                                Finding great properties for investment
                            </p>
                        </div>
                        <p className="about-us__desc">
                            we specialize in providing a streamlined platform for real estate investors to discover lucrative
                            opportunities. Our user-friendly interface offers access to a diverse range of properties, complete
                            with detailed analytics and expert guidance to help you make informed decisions. Whether you're a
                            seasoned investor or just getting started, RealVest is your trusted partner for success in the real
                            estate market
                        </p>
                        <div className="about-us__wrapper">
                            <img className="about-us__avatar" src={AvatarThumb} alt="" />
                            <ul className="about-us-info">
                                <li className="about-us-info-item">
                                    <h5 className="about-us-info-item__title">3K+</h5>
                                    <p className="about-us-info-item__desc">Investors</p>
                                </li>
                                <li className="about-us-info-item">
                                    <h5 className="about-us-info-item__title">20%</h5>
                                    <p className="about-us-info-item__desc">Average Profit Upto</p>
                                </li>
                            </ul>
                        </div>
                        <Link className="btn btn--base mt-4" to="/about">
                            <span className="btn__text">Discover More</span>
                            <span className="btn__icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                    className="lucide lucide-square-arrow-out-up-right-icon lucide-square-arrow-out-up-right">
                                    <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"></path>
                                    <path d="m21 3-9 9"></path>
                                    <path d="M15 3h6v6"></path>
                                </svg>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs