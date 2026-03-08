import { useState, useEffect } from 'react';
import { Fancybox } from "@fancyapps/ui";
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';

import PageBanner from '../sections/PageBanner';
import SocialList from '../components/SocialList';
import CopyInput from '../components/CopyInput';
import ToggleEl from '../components/ToggleEl';

import VideoThumb from '../assets/images/thumbs/prop-details/video-thumb.jpg';
import Thumb1 from '../assets/images/thumbs/properties/thumb-1.png';
import Thumb2 from '../assets/images/thumbs/properties/thumb-2.png';
import Thumb3 from '../assets/images/thumbs/properties/thumb-3.png';
import Thumb4 from '../assets/images/thumbs/properties/thumb-4.png';
import Thumb5 from '../assets/images/thumbs/properties/thumb-5.png';
import Thumb6 from '../assets/images/thumbs/properties/thumb-6.png';
import ThumbSm1 from '../assets/images/thumbs/properties/thumb-sm-1.png';
import ThumbSm2 from '../assets/images/thumbs/properties/thumb-sm-2.png';
import ThumbSm3 from '../assets/images/thumbs/properties/thumb-sm-3.png';
import ThumbSm4 from '../assets/images/thumbs/properties/thumb-sm-4.png';

import InvestTypeIcon from '../assets/images/icons/invest_type.png';
import ProfitIcon from '../assets/images/icons/profit.png';
import DownPaymentIcon from '../assets/images/icons/down_payment.png';
import InitAmountIcon from '../assets/images/icons/init_amount.png';
import TotalInstallmentIcon from '../assets/images/icons/total_installment.png';
import PerInstallmentIcon from '../assets/images/icons/per_installment.png';
import InstallmentScheduleIcon from '../assets/images/icons/installment_schedule.png';
import LateFeeIcon from '../assets/images/icons/late_fee.png';
import ProfitScheduleIcon from '../assets/images/icons/profit_schedule.png';
import ProfitRepeatIcon from '../assets/images/icons/profit_repeat.png';
import CapitalBackIcon from '../assets/images/icons/capital_back.png';
import ProfitBackIcon from '../assets/images/icons/profit_back.png';
import PropertyDetailsPricingCard from '../components/PropertyDetailsPricingCard';


const PropertyDetails = () => {

    const breakpoint = 992;
    const [show, setShow] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        Fancybox.bind('[data-fancybox="gallery"]', {
            Thumbs: {
                autoStart: true,
            },
            Toolbar: {
                display: ["close"],
            },
        });

        return () => {
            Fancybox.destroy();
        };
    }, []);


    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < breakpoint);
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <PageBanner title="Properties Details" />
            <section className="prop-details py-60">
                <div className="container">
                    <div className="prop-details__header">
                        <div className="prop-details-gallary">
                            <div className="prop-details-gallary__item">
                                <a className="prop-details-gallary__video" href="https://www.youtube.com/embed/WDQ0cPwHYDA"
                                    data-fancybox="gallery">
                                    <img src={VideoThumb} alt="" />
                                    <button className="prop-details-gallary__video-play" type="button">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round" className="lucide lucide-play-icon lucide-play">
                                            <path
                                                d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z">
                                            </path>
                                        </svg>
                                    </button>
                                </a>
                            </div>
                            <div className="prop-details-gallary__item">
                                <a className="prop-details-gallary__thumb" href={Thumb1}
                                    data-fancybox="gallery">
                                    <img src={Thumb1} alt="" />
                                </a>
                            </div>
                            <div className="prop-details-gallary__item">
                                <a className="prop-details-gallary__thumb" href={Thumb2}
                                    data-fancybox="gallery">
                                    <img src={Thumb2} alt="" />
                                </a>
                            </div>
                            <div className="prop-details-gallary__item">
                                <a className="prop-details-gallary__thumb" href={Thumb3}
                                    data-fancybox="gallery">
                                    <img src={Thumb3} alt="" />
                                </a>
                            </div>
                            <div className="prop-details-gallary__item">
                                <a className="prop-details-gallary__thumb" href={Thumb4}
                                    data-fancybox="gallery" data-view-more="+2">
                                    <img src={Thumb4} alt="" />
                                </a>
                            </div>
                            <div className="prop-details-gallary__item d-none">
                                <a className="prop-details-gallary__thumb" href={Thumb5}
                                    data-fancybox="gallery">
                                    <img src={Thumb5} alt="" />
                                </a>
                            </div>
                            <div className="prop-details-gallary__item d-none">
                                <a className="prop-details-gallary__thumb" href={Thumb6}
                                    data-fancybox="gallery">
                                    <img src={Thumb6} alt="" />
                                </a>
                            </div>

                        </div>
                    </div>
                    <div className="prop-details__body">
                        <div className="prop-details__body-top">
                            <h3 className="prop-details__title">
                                Elite Horizon
                            </h3>
                            <span className="prop-details__location">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                    className="lucide lucide-map-pin-icon lucide-map-pin">
                                    <path
                                        d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0">
                                    </path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                                New York, USA
                            </span>
                        </div>
                        <div className="prop-details__body-middle">
                            <div className="row gy-4">
                                <div className="col-lg-8 col-xl-8">
                                    <div className="prop-details__main mb-4">
                                        {isMobile && <PropertyDetailsPricingCard showInvestModal={handleShow} />}
                                        <div className="prop-details-card">
                                            <div className="prop-details-card__body">
                                                <div className="prop-details-block">
                                                    <div className="prop-details-block__header">
                                                        <h6 className="prop-details-block__title">Investment Information</h6>
                                                    </div>
                                                    <div className="prop-details-block__body">
                                                        <ToggleEl height={200}>
                                                            <ul className="prop-details-attr">
                                                                <li className="prop-details-attr__item">
                                                                    <div className="icon">
                                                                        <img src={InvestTypeIcon} alt="img" />
                                                                    </div>
                                                                    <div className="content">
                                                                        <span className="label">Investment Type</span>
                                                                        <p className="value">Installment</p>
                                                                    </div>
                                                                </li>
                                                                <li className="prop-details-attr__item">
                                                                    <div className="icon">
                                                                        <img src={ProfitIcon} alt="img" />
                                                                    </div>
                                                                    <div className="content">
                                                                        <span className="label">Profit</span>
                                                                        <p className="value">5%</p>
                                                                    </div>
                                                                </li>
                                                                <li className="prop-details-attr__item">
                                                                    <div className="icon">
                                                                        <img src={DownPaymentIcon}
                                                                            alt="img" />
                                                                    </div>
                                                                    <div className="content">
                                                                        <span className="label">Down Payment </span>
                                                                        <p className="value">20%</p>
                                                                    </div>
                                                                </li>
                                                                <li className="prop-details-attr__item">
                                                                    <div className="icon">
                                                                        <img src={InitAmountIcon}
                                                                            alt="img" />
                                                                    </div>
                                                                    <div className="content">
                                                                        <span className="label">Initial Invest Amount</span>
                                                                        <span className="value">
                                                                            $10,000.00
                                                                        </span>
                                                                    </div>
                                                                </li>
                                                                <li className="prop-details-attr__item">
                                                                    <div className="icon">
                                                                        <img src={TotalInstallmentIcon}
                                                                            alt="img" />
                                                                    </div>
                                                                    <div className="content">
                                                                        <span className="label">Total Installments</span>
                                                                        <p className="value">5</p>
                                                                    </div>
                                                                </li>
                                                                <li className="prop-details-attr__item">
                                                                    <div className="icon">
                                                                        <img src={PerInstallmentIcon}
                                                                            alt="img" />
                                                                    </div>
                                                                    <div className="content">
                                                                        <span className="label">Per Installment Amount</span>
                                                                        <p className="value">
                                                                            $8,000.00
                                                                        </p>
                                                                    </div>
                                                                </li>
                                                                <li className="prop-details-attr__item">
                                                                    <div className="icon">
                                                                        <img src={InstallmentScheduleIcon}
                                                                            alt="img" />
                                                                    </div>
                                                                    <div className="content">
                                                                        <span className="label">Installment Schedule</span>
                                                                        <p className="value">
                                                                            Monthly
                                                                        </p>
                                                                    </div>
                                                                </li>
                                                                <li className="prop-details-attr__item">
                                                                    <div className="icon">
                                                                        <img src={LateFeeIcon} alt="img" />
                                                                    </div>
                                                                    <div className="content">
                                                                        <span className="label">Installment Late Fee </span>
                                                                        <p className="value">
                                                                            $500.00
                                                                        </p>
                                                                    </div>
                                                                </li>
                                                                <li className="prop-details-attr__item">
                                                                    <div className="icon">
                                                                        <img src={ProfitScheduleIcon}
                                                                            alt="img" />
                                                                    </div>
                                                                    <div className="content">
                                                                        <span className="label">Profit Schedule </span>
                                                                        <p className="value">
                                                                            Lifetime (Monthly)
                                                                        </p>
                                                                    </div>
                                                                </li>
                                                                <li className="prop-details-attr__item">
                                                                    <div className="icon">
                                                                        <img src={ProfitRepeatIcon}
                                                                            alt="img" />
                                                                    </div>
                                                                    <div className="content">
                                                                        <span className="label">Profit Repeat</span>
                                                                        <p className="value">
                                                                            3 Times
                                                                        </p>
                                                                    </div>
                                                                </li>
                                                                <li className="prop-details-attr__item">
                                                                    <div className="icon">
                                                                        <img src={CapitalBackIcon}
                                                                            alt="img" />
                                                                    </div>
                                                                    <div className="content">
                                                                        <span className="label">Capital Back</span>
                                                                        <p className="value">
                                                                            No
                                                                        </p>
                                                                    </div>
                                                                </li>
                                                                <li className="prop-details-attr__item">
                                                                    <div className="icon">
                                                                        <img src={ProfitBackIcon}
                                                                            alt="img" />
                                                                    </div>
                                                                    <div className="content">
                                                                        <span className="label">Profit Return</span>
                                                                        <p className="value">After Investment Completion</p>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </ToggleEl>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="prop-details-card">
                                            <div className="prop-details-card__body">
                                                <div className="prop-details-block">
                                                    <div className="prop-details-block__header">
                                                        <h6 className="prop-details-block__title">Property Description</h6>
                                                    </div>
                                                    <div className="prop-details-block__body">
                                                        <ToggleEl height={280}>
                                                            <div className="prop-details__desc">
                                                                <p>Welcome to OpalOasis Estates, where luxury meets
                                                                    sophistication
                                                                    in
                                                                    the
                                                                    heart
                                                                    of
                                                                    Berlin's
                                                                    vibrant real estate landscape. Nestled amidst the city's
                                                                    bustling
                                                                    energy,
                                                                    OpalOasis
                                                                    Estates stands as a beacon of refined living, offering a
                                                                    haven
                                                                    for
                                                                    discerning
                                                                    investors
                                                                    seeking unparalleled comfort and convenience.</p>
                                                                <p><br /></p>
                                                                <p>OpalOasis Estates boasts a unique blend of modern
                                                                    architecture
                                                                    and
                                                                    timeless
                                                                    elegance,
                                                                    setting a new standard for luxury living in Berlin. Each
                                                                    meticulously
                                                                    crafted
                                                                    residence
                                                                    is designed to exceed expectations, featuring sleek lines,
                                                                    expansive
                                                                    windows,
                                                                    and
                                                                    premium finishes that elevate the living experience to new
                                                                    heights.
                                                                </p>
                                                                <p><br /></p>
                                                                <p>Step into a world of comfort and convenience as you explore
                                                                    the
                                                                    array
                                                                    of
                                                                    amenities
                                                                    available at OpalOasis Estates. Indulge in the serenity of
                                                                    lush
                                                                    landscaped
                                                                    gardens,
                                                                    perfect for leisurely strolls or peaceful moments of
                                                                    reflection.
                                                                    pe
                                                                    into
                                                                    relaxation at
                                                                    the sparkling swimming pool, where you can unwind and soak
                                                                    up
                                                                    the
                                                                    sun in
                                                                    style.
                                                                </p>
                                                                <p><br /></p>
                                                                <p>For those who seek an active lifestyle, OpalOasis Estates
                                                                    offers
                                                                    state-of-the-art
                                                                    fitness
                                                                    facilities equipped with the latest equipment, allowing
                                                                    residents to
                                                                    stay in
                                                                    shape
                                                                    without ever leaving home. Hosting a gathering? Look no
                                                                    further
                                                                    than
                                                                    the
                                                                    stylishly
                                                                    appointed clubhouse, where you can entertain guests in
                                                                    sophisticated
                                                                    surroundings.</p>
                                                                <p><br /></p>
                                                                <p>OpalOasis Estates prioritizes security and privacy, providing
                                                                    residents
                                                                    with
                                                                    peace of
                                                                    mind and a sense of belonging. With 24-hour security and
                                                                    controlled
                                                                    access,
                                                                    you
                                                                    can rest
                                                                    assured that your safety is always our top priority.</p>
                                                                <p><br /></p>
                                                                <p>Conveniently located in the heart of Berlin, OpalOasis
                                                                    Estates
                                                                    offers
                                                                    easy
                                                                    access
                                                                    to a
                                                                    wealth of amenities and attractions. Whether you're
                                                                    exploring
                                                                    the
                                                                    vibrant
                                                                    nightlife of
                                                                    the city center or enjoying a leisurely afternoon in one of
                                                                    the
                                                                    nearby
                                                                    parks,
                                                                    everything
                                                                    you need is just moments away.</p>
                                                                <p><br /></p>
                                                                <p>Experience the pinnacle of luxury living at OpalOasis
                                                                    Estates,
                                                                    where
                                                                    every
                                                                    detail
                                                                    is
                                                                    thoughtfully curated to ensure an unparalleled experience
                                                                    for
                                                                    our
                                                                    esteemed
                                                                    residents.
                                                                    Welcome home to OpalOasis Estates, where luxury knows no
                                                                    bounds.
                                                                </p>
                                                            </div>
                                                        </ToggleEl>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="prop-details-card">
                                            <div className="prop-details-card__body">
                                                <div className="prop-details-block">
                                                    <div className="prop-details-block__header">
                                                        <h6 className="prop-details-block__title">
                                                            Location
                                                        </h6>
                                                    </div>
                                                    <div className="prop-details-block__body">
                                                        <iframe className="prop-details__map"
                                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1663360.4173128926!2d137.27074299632892!3d35.485708666482104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x605d1b87f02e57e7%3A0x2e01618b22571b89!2sTokyo%2C%20Japan!5e0!3m2!1sen!2sbd!4v1710997155618!5m2!1sen!2s"
                                                            allowFullScreen="" loading="lazy"
                                                            referrerPolicy="no-referrer-when-downgrade" width="100%">
                                                        </iframe>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="prop-details-card">
                                            <div className="prop-details-card__body">
                                                <div className="prop-details-block">
                                                    <div className="prop-details-block__header">
                                                        <h6 className="prop-details-block__title">
                                                            Real Estate Investor
                                                        </h6>
                                                    </div>
                                                    <div className="prop-details-block__body">
                                                        <div className="prop-details-investor">
                                                            <div className="prop-details-investor-item">
                                                                <img className="prop-details-investor-item__thumb"
                                                                    src="https://script.viserlab.com/realvest/assets/images/user/profile/65fc2bbfa2e0b1711025087.jpg"
                                                                    alt="profile-image" />
                                                                <div className="prop-details-investor-item__content">
                                                                    <h6 className="prop-details-investor-item__name">Aphrodite Gay
                                                                    </h6>
                                                                    <span className="prop-details-investor-item__date">
                                                                        Join 1 year ago
                                                                    </span>
                                                                    <ul className="meta-list">
                                                                        <li className="meta-list__item">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                                height="24" viewBox="0 0 24 24" fill="none"
                                                                                stroke="currentColor" strokeWidth="2"
                                                                                strokeLinecap="round" strokeLinejoin="round"
                                                                                className="lucide lucide-house-icon lucide-house">
                                                                                <path
                                                                                    d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                                                                                <path
                                                                                    d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                                                            </svg>
                                                                            5 Properties
                                                                        </li>
                                                                        <li className="meta-list__item">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                                height="24" viewBox="0 0 24 24" fill="none"
                                                                                stroke="currentColor" strokeWidth="2"
                                                                                strokeLinecap="round" strokeLinejoin="round"
                                                                                className="lucide lucide-map-pin-icon lucide-map-pin">
                                                                                <path
                                                                                    d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0">
                                                                                </path>
                                                                                <circle cx="12" cy="10" r="3"></circle>
                                                                            </svg>
                                                                            Afghanistan
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="prop-details-investor-item">
                                                                <img className="prop-details-investor-item__thumb"
                                                                    src="https://script.viserlab.com/realvest/assets/images/avatar.png"
                                                                    alt="profile-image" />
                                                                <div className="prop-details-investor-item__content">
                                                                    <h6 className="prop-details-investor-item__name">Walter Cox</h6>
                                                                    <span className="prop-details-investor-item__date">
                                                                        Join 1 year ago
                                                                    </span>
                                                                    <ul className="meta-list">
                                                                        <li className="meta-list__item">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                                height="24" viewBox="0 0 24 24" fill="none"
                                                                                stroke="currentColor" strokeWidth="2"
                                                                                strokeLinecap="round" strokeLinejoin="round"
                                                                                className="lucide lucide-house-icon lucide-house">
                                                                                <path
                                                                                    d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8">
                                                                                </path>
                                                                                <path
                                                                                    d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z">
                                                                                </path>
                                                                            </svg>
                                                                            7 Properties
                                                                        </li>
                                                                        <li className="meta-list__item">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                                height="24" viewBox="0 0 24 24" fill="none"
                                                                                stroke="currentColor" strokeWidth="2"
                                                                                strokeLinecap="round" strokeLinejoin="round"
                                                                                className="lucide lucide-map-pin-icon lucide-map-pin">
                                                                                <path
                                                                                    d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0">
                                                                                </path>
                                                                                <circle cx="12" cy="10" r="3"></circle>
                                                                            </svg>
                                                                            Bangladesh
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="prop-details-card">
                                            <div className="prop-details-card__body">
                                                <div className="prop-details-block">
                                                    <div className="prop-details-block__header">
                                                        <h6 className="prop-details-block__title">
                                                            Latest Properties
                                                        </h6>
                                                    </div>
                                                    <div className="prop-details-block__body">
                                                        <ul className="prop-details-latest">
                                                            <li className="prop-details-latest-item">
                                                                <img className="prop-details-latest-item__thumb"
                                                                    src={ThumbSm1}
                                                                    alt="Property-image" />

                                                                <div className="prop-details-latest-item__content">
                                                                    <h6 className="prop-details-latest-item__title">
                                                                        <Link to="/property/1">
                                                                            OpalOasis Estates
                                                                        </Link>
                                                                    </h6>
                                                                    <span className="prop-details-latest-item__location">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                            height="24" viewBox="0 0 24 24" fill="none"
                                                                            stroke="currentColor" strokeWidth="2"
                                                                            strokeLinecap="round" strokeLinejoin="round"
                                                                            className="lucide lucide-map-pin-icon lucide-map-pin">
                                                                            <path
                                                                                d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                                                                            <circle cx="12" cy="10" r="3" />
                                                                        </svg>
                                                                        <span>Berlin, Germany</span>
                                                                    </span>
                                                                    <span className="prop-details-latest-item__price">
                                                                        $50,000.00
                                                                    </span>
                                                                </div>
                                                            </li>
                                                            <li className="prop-details-latest-item">
                                                                <img className="prop-details-latest-item__thumb"
                                                                    src={ThumbSm2}
                                                                    alt="Property-image" />

                                                                <div className="prop-details-latest-item__content">
                                                                    <h6 className="prop-details-latest-item__title">
                                                                        <Link to="/property/1">
                                                                            Iconic Victorian
                                                                        </Link>
                                                                    </h6>
                                                                    <span className="prop-details-latest-item__location">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                            height="24" viewBox="0 0 24 24" fill="none"
                                                                            stroke="currentColor" strokeWidth="2"
                                                                            strokeLinecap="round" strokeLinejoin="round"
                                                                            className="lucide lucide-map-pin-icon lucide-map-pin">
                                                                            <path
                                                                                d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                                                                            <circle cx="12" cy="10" r="3" />
                                                                        </svg>
                                                                        <span>Berlin, Germany</span>
                                                                    </span>
                                                                    <span className="prop-details-latest-item__price">
                                                                        $4,000.00
                                                                    </span>
                                                                </div>
                                                            </li>
                                                            <li className="prop-details-latest-item">
                                                                <img className="prop-details-latest-item__thumb"
                                                                    src={ThumbSm3}
                                                                    alt="Property-image" />
                                                                <div className="prop-details-latest-item__content">
                                                                    <h6 className="prop-details-latest-item__title">
                                                                        <Link to="/property/1">
                                                                            Modern Loft
                                                                        </Link>
                                                                    </h6>
                                                                    <span className="prop-details-latest-item__location">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                            height="24" viewBox="0 0 24 24" fill="none"
                                                                            stroke="currentColor" strokeWidth="2"
                                                                            strokeLinecap="round" strokeLinejoin="round"
                                                                            className="lucide lucide-map-pin-icon lucide-map-pin">
                                                                            <path
                                                                                d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                                                                            <circle cx="12" cy="10" r="3" />
                                                                        </svg>
                                                                        <span>Berlin, Germany</span>
                                                                    </span>
                                                                    <span className="prop-details-latest-item__price">
                                                                        $20,000.00
                                                                    </span>
                                                                </div>
                                                            </li>
                                                            <li className="prop-details-latest-item">
                                                                <img className="prop-details-latest-item__thumb"
                                                                    src={ThumbSm4}
                                                                    alt="Property-image" />

                                                                <div className="prop-details-latest-item__content">
                                                                    <h6 className="prop-details-latest-item__title">
                                                                        <Link to="/property/1">
                                                                            Stylish Apartment
                                                                        </Link>
                                                                    </h6>
                                                                    <span className="prop-details-latest-item__location">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                            height="24" viewBox="0 0 24 24" fill="none"
                                                                            stroke="currentColor" strokeWidth="2"
                                                                            strokeLinecap="round" strokeLinejoin="round"
                                                                            className="lucide lucide-map-pin-icon lucide-map-pin">
                                                                            <path
                                                                                d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                                                                            <circle cx="12" cy="10" r="3" />
                                                                        </svg>
                                                                        <span>Berlin, Germany</span>
                                                                    </span>
                                                                    <span className="prop-details-latest-item__price">
                                                                        $20,000.00
                                                                    </span>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-xl-4">
                                    <div className="prop-details-sidebar">
                                        {!isMobile && <PropertyDetailsPricingCard showInvestModal={handleShow} />}
                                        <div className="prop-details-card">
                                            <div className="prop-details-card__header">
                                                <h6 className="prop-details-card__title text-center">
                                                    Share now
                                                </h6>
                                            </div>
                                            <div className="prop-details-card__body">
                                                <SocialList className="w-fit-content style-two mx-auto" />
                                                <div className="prop-details-divider my-3">
                                                    <span className="prop-details-divider__text">Or</span>
                                                </div>
                                                <CopyInput defaultValue="https://script.viserlab.com/realvest/property/elite-horizon" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Modal className="custom--modal invest--modal" show={show} onHide={handleClose}>
                <Modal.Body>
                    <form class="invest-form" method="POST">
                        <div class="invest-form__header">
                            <h6 class="invest-form__title">
                                Invest to - <span class="text--base-two">Elite Horizon</span>
                            </h6>
                            <button class="btn btn--icon btn--close btn-soft--dark" type="button"
                                onClick={handleClose}>
                            </button>
                        </div>
                        <div class="invest-form__body">
                            <ul class="list-group list-group--custom mb-3">
                                <li class="list-group-item">
                                    <span class="label">Down Payment</span>
                                    <strong class="value">20%</strong>
                                </li>
                                <li class="list-group-item">
                                    <span class="label">Initial Invest Amount</span>
                                    <strong class="value">
                                        $5,000.00
                                    </strong>
                                </li>
                                <li class="list-group-item">
                                    <span class="label">Profit</span>
                                    <strong class="value">
                                        $5,000.00
                                    </strong>
                                </li>
                                <li class="list-group-item">
                                    <span class="label">Profit Schedule</span>
                                    <strong class="value">
                                        Repeat (Yearly)
                                    </strong>
                                </li>
                                <li class="list-group-item">
                                    <span class="label">Profit Return Type</span>
                                    <strong class="value">
                                        After Investment Completion
                                    </strong>
                                </li>
                            </ul>
                            <div class="form-group">
                                <label class="form--label">Apartment Size</label>
                                <div class="input-group input--group">
                                    <input class="form-control form--control" type="number" defaultValue="1"
                                        name="apartment_size" min="1" />
                                    <span class="input-group-text">Sft</span>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="d-flex justify-content-between flex-wrap">
                                    <label class="form--label">Invest Amount</label>
                                    <div class="form--check">
                                        <input class="form-check-input" type="checkbox" defaultValue="true"
                                            id="invest_full_amount" />
                                        <label class="form-check-label" for="invest_full_amount">
                                            Invest Full Amount </label>
                                    </div>
                                </div>
                                <div class="input-group input--group">
                                    <input class="form-control form--control" type="number" name="invest_amount"
                                        defaultValue="5000" readonly="" />
                                    <span class="input-group-text">USD</span>

                                </div>
                                <div class="mt-2 preview-details d-none">
                                    <span>
                                        <span>Charge:</span>
                                        <span class="text--base"><span class="charge ">0</span></span>,
                                    </span>
                                    <span>
                                        <span>Total Amount: </span> <span class="text--base"><span class="payable ">
                                            0</span></span>
                                    </span>
                                </div>
                            </div>
                            <div class="invest-form-pay">
                                <div class="invest-form-pay-item active">
                                    <span class="invest-form-pay-item__label">Pay via</span>
                                    <h6 class="invest-form-pay-item__title">Gateway</h6>
                                </div>
                                <div class="invest-form-pay-item">
                                    <span class="invest-form-pay-item__label">Pay via</span>
                                    <h6 class="invest-form-pay-item__title">Balance</h6>
                                </div>
                            </div>
                        </div>
                        <div class="invest-form__footer">
                            <button class="btn btn--base w-100" type="submit">
                                Invest Now
                            </button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default PropertyDetails