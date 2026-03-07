import { useRef, useState } from 'react';
import Slider from 'react-slick';
import TestimonialCard from '../components/TestimonialCard';

import Thumb1 from '../assets/images/thumbs/testimonial/thumb-1.png';
import Thumb2 from '../assets/images/thumbs/testimonial/thumb-2.png';
import Thumb3 from '../assets/images/thumbs/testimonial/thumb-3.png';
import Thumb4 from '../assets/images/thumbs/testimonial/thumb-4.png';
import Thumb5 from '../assets/images/thumbs/testimonial/thumb-5.png';

const Testimonial = () => {

    const sliderRef = useRef(null)
    const [activeDot, setActiveDot] = useState(0)

    const testimonials = [
        {
            id: 1,
            thumb: Thumb1,
            description: '“Finding our dream home felt effortless with Realxen. The team guided us.”',
            user: {
                name: 'Emily Johnson',
                designation: 'Homebuyer'
            }
        },
        {
            id: 2,
            thumb: Thumb2,
            description: '“Realxen connected me with the right properties and provided the insights.”',
            user: {
                name: 'Theresa Webb',
                designation: 'Homebuyer'
            }
        },
        {
            id: 3,
            thumb: Thumb3,
            description: 'The agents at Realxen truly care about clients. They listened to our needs.',
            user: {
                name: 'David Chen',
                designation: 'Homebuyer'
            }
        },
        {
            id: 4,
            thumb: Thumb4,
            description: '“Finding our dream home felt effortless with Realxen. The team guided us.”',
            user: {
                name: 'Sophia Williams',
                designation: 'Homebuyer'
            }
        },
        {
            id: 5,
            thumb: Thumb5,
            description: '“Realxen connected me with the right properties and provided the insights.”',
            user: {
                name: 'Liza Doe',
                designation: 'Homebuyer'
            }
        },
    ]

    const slidesToShow = 4
    const totalDots = testimonials.length - slidesToShow + 1

    const sliderSettings = {
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        speed: 1500,
        pauseOnHover: true,
        arrows: false,
        dots: false,
        beforeChange: (_, next) => {
            setActiveDot(next)
        },
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    }

    return (
        <section className="testimonial py-120">
            <div className="container">
                <div className="section-heading style-left">
                    <div className="row gy-4 align-items-end justify-content-between">
                        <div className="col-lg-5">
                            <span className="section-heading__tagline">
                                Investors trust us
                            </span>
                            <h2 className="section-heading__title">
                                Trusted by Over 3000+ Investors
                            </h2>
                        </div>
                        <div className="col-lg-5">
                            <p className="section-heading__desc">
                                Backed by the confidence of over 3,000 investors worldwide, our platform has earned a reputation
                                for reliability, transparency, and consistent performance.
                            </p>
                        </div>
                    </div>
                </div>
                <Slider
                    ref={sliderRef}
                    className="testimonial-slider"
                    {...sliderSettings}
                >
                    {testimonials.map(({ id, thumb, description, user }) => (
                        <div key={id} className="testimonial-slider__slide">
                            <TestimonialCard
                                thumb={thumb}
                                description={description}
                                user={user}
                            />
                        </div>
                    ))}
                </Slider>

                <div className="testimonial-slider-ctrl">
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

export default Testimonial