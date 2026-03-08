import PageBanner from '../sections/PageBanner';
import FAQ from '../sections/FAQ';

import Captcha from '../assets/images/thumbs/captcha.png';

const Contact = () => {
    return (
        <>
            <PageBanner title="Contact" />
            <section className="contact py-120">
                <div className="container">
                    <div className="row gy-4 mb-60">
                        <div className="col-md-6 col-lg-4">
                            <div className="contact-info">
                                <div className="contact-info__icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round" className="lucide lucide-mail-icon lucide-mail">
                                        <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                                        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                                    </svg>
                                </div>
                                <h6 className="contact-info__title">Email Us</h6>
                                <p className="contact-info__desc">Reach out anytime—our team is ready to assist you.</p>
                                <a className="contact-info__link" href="mailto:support@example.com">
                                    support@example.com
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round" className="lucide lucide-move-right-icon lucide-move-right">
                                        <path d="M18 8L22 12L18 16" />
                                        <path d="M2 12H22" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="contact-info">
                                <div className="contact-info__icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round" className="lucide lucide-phone-icon lucide-phone">
                                        <path
                                            d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384">
                                        </path>
                                    </svg>
                                </div>
                                <h6 className="contact-info__title">Call Us</h6>
                                <p className="contact-info__title">Give us a call—we're happy to help you anytime.</p>
                                <a className="contact-info__link" href="tel:+88-5555-444">
                                    +88-5555-444
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round" className="lucide lucide-move-right-icon lucide-move-right">
                                        <path d="M18 8L22 12L18 16" />
                                        <path d="M2 12H22" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="contact-info">
                                <div className="contact-info__icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round" className="lucide lucide-map-pin-icon lucide-map-pin">
                                        <path
                                            d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0">
                                        </path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                    </svg>
                                </div>
                                <h6 className="contact-info__title">Find Us</h6>
                                <p className="contact-info__desc">Find our location and plan your visit with confidence.</p>
                                <a className="contact-info__link" href="tel:+88-5555-444">
                                    205 North Kierland Blvd
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round" className="lucide lucide-arrow-up-right-icon lucide-arrow-up-right">
                                        <path d="M7 7h10v10" />
                                        <path d="M7 17 17 7" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="contact-card">
                        <div className="row gy-4">
                            <div className="col-lg-6">
                                <div className="section-heading style-left">
                                    <span className="section-heading__tagline">
                                        Feature Domain
                                    </span>
                                    <h2 className="section-heading__title">
                                        Connect With Our Experts
                                    </h2>
                                    <p className="section-heading__desc">
                                        How quick is quick? We balance speed and quality to deliver top-notch design—fast.
                                    </p>
                                </div>
                                <ul className="contact-step">
                                    <li className="contact-step-item">
                                        <div className="contact-step-item__header">
                                            <div className="contact-step-item__icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                    strokeLinecap="round" strokeLinejoin="round"
                                                    className="lucide lucide-headset-icon lucide-headset">
                                                    <path
                                                        d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" />
                                                    <path d="M21 16v2a4 4 0 0 1-4 4h-5" />
                                                </svg>
                                            </div>
                                            <div className="contact-step-item__content">
                                                <h6 className="contact-step-item__title">
                                                    24/7 customer support
                                                </h6>
                                            </div>
                                        </div>
                                        <div className="contact-step-item__body">
                                            <p className="contact-step-item__desc">
                                                Always available to guide your business with reliable support anytime.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="contact-step-item">
                                        <div className="contact-step-item__header">
                                            <div className="contact-step-item__icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                    strokeLinecap="round" strokeLinejoin="round"
                                                    className="lucide lucide-message-square-text-icon lucide-message-square-text">
                                                    <path
                                                        d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" />
                                                    <path d="M7 11h10" />
                                                    <path d="M7 15h6" />
                                                    <path d="M7 7h8" />
                                                </svg>
                                            </div>
                                            <div className="contact-step-item__content">
                                                <h6 className="contact-step-item__title">
                                                    Live chat and instant help
                                                </h6>
                                            </div>
                                        </div>
                                        <div className="contact-step-item__body">
                                            <p className="contact-step-item__desc">
                                                Quick solutions delivered instantly to keep your business moving forward.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <form className="contact-form" action="">
                                    <div className="contact-form__body">
                                        <div className="row gy-3 gy-xl-4">
                                            <div className="col-lg-6">
                                                <label htmlFor="name" className="form--label required">Name</label>
                                                <input className="form-control form-control--lg form--control" type="text"
                                                    id="name" />
                                            </div>
                                            <div className="col-lg-6">
                                                <label htmlFor="email" className="form--label required">Email</label>
                                                <input className="form-control form-control--lg form--control" type="text"
                                                    id="email" />
                                            </div>
                                            <div className="col-sm-12">
                                                <label htmlFor="name" className="form--label required">Subject</label>
                                                <input className="form-control form-control--lg form--control" type="text"
                                                    id="subject" />
                                            </div>
                                            <div className="col-sm-12">
                                                <label htmlFor="message" className="form--label required">Message</label>
                                                <textarea className="form-control form-control--lg form--control" id="message"
                                                    name="message"></textarea>

                                            </div>
                                            <div className="col-sm-12">
                                                <img className="mb-3" src={Captcha} alt="" />
                                                <button className="btn btn--lg btn--base d-flex" type="button">
                                                    <span className="btn__text">Get started</span>
                                                    <span className="btn__icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                            className="lucide lucide-arrow-up-right-icon lucide-arrow-up-right">
                                                            <path d="M7 7h10v10"></path>
                                                            <path d="M7 17 17 7"></path>
                                                        </svg>
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <FAQ />
        </>
    )
}

export default Contact