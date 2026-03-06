import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Fancybox } from "@fancyapps/ui";
import Counter from '../components/Counter'
import BannerVideo from '../assets/videos/banner/01.mp4'
import bannerPopupThumb from '../assets/images/thumbs/banner/popup-thumb.jpg'

const Banner = () => {

    useEffect(() => {
        Fancybox.bind("[data-fancybox]", {});

        return () => {
            Fancybox.destroy();
        };
    }, []);

    return (
        <section className="banner">
            <div className="banner-video">
                <video src={BannerVideo} autoPlay loop muted playsInline></video>
            </div>
            <div className="banner-border">
                <span className="banner-border__item"></span>
                <span className="banner-border__item"></span>
                <span className="banner-border__item"></span>
                <span className="banner-border__item"></span>
                <span className="banner-border__item"></span>
            </div>
            <div className="container-lg">
                <div className="banner-content">
                    <span className="banner-content__tagline">
                        SMART & SECURE REAL ESTATE INVESTMENT PLATFORM
                    </span>
                    <h1 className="banner-content__title">
                        Invest In The Future of Real Estate
                    </h1>
                    <p className="banner-content__desc">
                        We provide tailored real estate solutions, guiding you through every step with personalized
                        experiences
                        that meet your unique needs and aspirations.
                    </p>
                    <div className="banner-content__btns">
                        <Link className="btn btn--lg btn--base" to="/user/login">
                            <span className="btn__icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                    className="lucide lucide-chevron-right-icon lucide-chevron-right">
                                    <path d="m9 18 6-6-6-6" />
                                </svg>
                            </span>
                            <div className="btn__text">
                                Get Started
                            </div>
                        </Link>
                        <Link className="btn btn--lg btn--white" to="/properties">
                            <span className="btn__icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                    className="lucide lucide-square-arrow-out-up-right-icon lucide-square-arrow-out-up-right">
                                    <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
                                    <path d="m21 3-9 9" />
                                    <path d="M15 3h6v6" />
                                </svg>
                            </span>
                            <div className="btn__text">
                                Explore Propperties
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="banner-bottom">
                    <div className="row gy-4 gy-lg-0 justify-content-between align-items-center">
                        <div className="col-md-10 col-lg-6 col-xl-5">
                            <ul className="banner-info">
                                <li className="banner-info-item">
                                    <h4 className="banner-info-item__title">
                                        <Counter value="20" />
                                        <span className="symbol">%</span>
                                    </h4>
                                    <span className="banner-info-item__label">Avg Profit Upto</span>
                                </li>
                                <li className="banner-info-item">
                                    <h4 className="banner-info-item__title">
                                        <Counter value="3000" />
                                        <span className="symbol">+</span>
                                    </h4>
                                    <span className="banner-info-item__label">Investors</span>
                                </li>
                                <li className="banner-info-item">
                                    <h4 className="banner-info-item__title">
                                        <Counter value="9000" />
                                        <span className="symbol">+</span>
                                    </h4>
                                    <span className="banner-info-item__label">Member</span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-10 col-lg-6 col-xl-5">
                            <div className="banner-card">
                                <a href={BannerVideo} className="banner-card__video" data-fancybox="gallery">
                                    <img src={bannerPopupThumb} alt="" />
                                </a>
                                <div className="banner-card__content">
                                    <h4 className="banner-card__title">$3.5M</h4>
                                    <p className="banner-card__desc">
                                        We believe real estate is about lasting value. Every project is carefully curated for
                                        quality, transparency, and long-term growth.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner