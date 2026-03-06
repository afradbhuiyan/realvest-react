import { useRef, useState } from 'react';
import Slider from 'react-slick';
import OurLocationCard from '../components/OurLocationCard'

import Thumb1 from '../assets/images/thumbs/our-location/01.png'
import Thumb2 from '../assets/images/thumbs/our-location/02.png'
import Thumb3 from '../assets/images/thumbs/our-location/03.png'
import Thumb4 from '../assets/images/thumbs/our-location/04.png'
import Thumb5 from '../assets/images/thumbs/our-location/05.png'
import Thumb6 from '../assets/images/thumbs/our-location/06.png'

const OurLocation = () => {

    const sliderRef = useRef(null)
    const [activeDot, setActiveDot] = useState(0)

    const locations = [
        { id: 1, thumb: Thumb1, title: 'New York, USA', total: '8 Properties' },
        { id: 2, thumb: Thumb2, title: 'Paris, France', total: '4 Properties' },
        { id: 3, thumb: Thumb3, title: 'Paris, France', total: '4 Properties' },
        { id: 4, thumb: Thumb4, title: 'Berlin, Germany', total: '3 Properties' },
        { id: 5, thumb: Thumb5, title: 'Tokyo, Japan', total: '1 Properties' },
        { id: 6, thumb: Thumb6, title: 'Tokyo, Japan', total: '1 Properties' },
    ]

    const slidesToShow = 4
    const totalDots = locations.length - slidesToShow + 1

    const sliderSettings = {
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        speed: 1500,
        pauseOnHover: true,
        infinite: false,
        arrows: false,
        dots: false,
        beforeChange: (_, next) => {
            setActiveDot(next)
        },
        responsive: [
            {
                breakpoint: 992,
                settings: { slidesToShow: 3 }
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 2 }
            },
        ],
    }

    return (
        <section className="our-location py-120">
            <div className="container">

                <div className="section-heading style-left">
                    <div className="row gy-4 align-items-end justify-content-between">
                        <div className="col-lg-5">
                            <span className="section-heading__tagline">
                                Cities
                            </span>
                            <h2 className="section-heading__title">
                                Explore By Cities
                            </h2>
                        </div>
                        <div className="col-lg-5">
                            <p className="section-heading__desc">
                                Explore properties across a wide range of cities, each offering distinct lifestyles, market
                                trends, and investment opportunities.
                            </p>
                        </div>
                    </div>
                </div>

                <Slider
                    ref={sliderRef}
                    className="our-location-slider"
                    {...sliderSettings}
                >
                    {locations.map(({ id, thumb, title, total }) => (
                        <div key={id} className="our-location-slider__slide">
                            <OurLocationCard
                                thumb={thumb}
                                title={title}
                                total={total}
                            />
                        </div>
                    ))}
                </Slider>

                <div className="our-location-slider-ctrl">
                    <button
                        className="slick-arrow slick-prev"
                        onClick={() => sliderRef.current?.slickPrev()}
                    >
                        <i className="las la-angle-left"></i>
                    </button>

                    <ul className="slick-dots">
                        {Array.from({ length: totalDots }).map((_, i) => (
                            <li
                                key={i}
                                className={activeDot === i ? "slick-active" : ""}
                            >
                                <button
                                    onClick={() => sliderRef.current?.slickGoTo(i)}
                                ></button>
                            </li>
                        ))}
                    </ul>
                    <button
                        className="slick-arrow slick-next"
                        onClick={() => sliderRef.current?.slickNext()}
                    >
                        <i className="las la-angle-right"></i>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default OurLocation