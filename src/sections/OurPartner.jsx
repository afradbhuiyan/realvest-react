import Slider from 'react-slick';

import Logo1 from '../assets/images/thumbs/our-partner/logo-1.png';
import Logo2 from '../assets/images/thumbs/our-partner/logo-2.png';
import Logo3 from '../assets/images/thumbs/our-partner/logo-3.png';
import Logo4 from '../assets/images/thumbs/our-partner/logo-4.png';
import Logo5 from '../assets/images/thumbs/our-partner/logo-5.png';
import Logo6 from '../assets/images/thumbs/our-partner/logo-6.png';
import Logo7 from '../assets/images/thumbs/our-partner/logo-7.png';
import Logo8 from '../assets/images/thumbs/our-partner/logo-8.png';
import Logo9 from '../assets/images/thumbs/our-partner/logo-9.png';
import Logo10 from '../assets/images/thumbs/our-partner/logo-10.png';
import Logo11 from '../assets/images/thumbs/our-partner/logo-11.png';

const OurPartner = () => {

    const partners = [
        { id: 1, logo: Logo1 },
        { id: 2, logo: Logo2 },
        { id: 3, logo: Logo3 },
        { id: 4, logo: Logo4 },
        { id: 5, logo: Logo5 },
        { id: 6, logo: Logo6 },
        { id: 7, logo: Logo7 },
        { id: 8, logo: Logo8 },
        { id: 9, logo: Logo9 },
        { id: 10, logo: Logo10 },
        { id: 11, logo: Logo11 },
    ]

    const sliderSettings = {
        slidesToScroll: 1,
        slidesToShow: 6,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        speed: 2000,
        arrows: false,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    }

    return (
        <section className="our-partner py-60">
            <div className="container">
                <div className="section-heading style-left">
                    <div className="row gy-4 align-items-end justify-content-between">
                        <div className="col-lg-5">
                            <span className="section-heading__tagline">
                                Leader Trusted
                            </span>
                            <h2 className="section-heading__title">
                                Trusted by Fortune 100 Leaders
                            </h2>
                        </div>
                        <div className="col-lg-5">
                            <p className="section-heading__desc">
                                Explore properties across a wide range of cities, each offering distinct lifestyles, market
                                trends, and investment opportunities to suit every goal.
                            </p>
                        </div>
                    </div>
                </div>
                <Slider
                    className="our-partner-slider"
                    {...sliderSettings}
                >
                    {partners.map(({ id, logo }) => (
                        <div className="our-partner-slider__slide">
                            <img className="our-partner-slider__logo" src={logo} alt="" />
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    )
}

export default OurPartner