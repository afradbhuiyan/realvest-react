import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Select from 'react-select';

import Thumb1 from '../assets/images/thumbs/properties/thumb-1.png';
import Thumb2 from '../assets/images/thumbs/properties/thumb-2.png';
import Thumb3 from '../assets/images/thumbs/properties/thumb-3.png';
import Thumb4 from '../assets/images/thumbs/properties/thumb-4.png';
import Thumb5 from '../assets/images/thumbs/properties/thumb-5.png';
import Thumb6 from '../assets/images/thumbs/properties/thumb-6.png';
import PropCard from '../components/PropCard';
import PageBanner from '../sections/PageBanner';

const Properties = () => {
    const properties = [
        { id: 1, thumb: Thumb1, title: 'Luxury Condominiums', price: '$12,000.00', location: 'New York, USA', },
        { id: 2, thumb: Thumb2, title: 'Traditional Machiya Townhouse', price: '$20,000.00', location: 'San Francisco, USA', },
        { id: 3, thumb: Thumb3, title: 'Elite Horizon', price: '$25,000.00', location: 'Tokyo, Japan', },
        { id: 4, thumb: Thumb4, title: 'Oceanview Residences', price: '$18,500.00', location: 'Miami, USA', },
        { id: 5, thumb: Thumb5, title: 'Skyline Penthouse', price: '$35,000.00', location: 'Dubai, UAE', },
        { id: 6, thumb: Thumb6, title: 'Green Valley Villas', price: '$22,000.00', location: 'Bali, Indonesia', }
    ]
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <PageBanner title="Properties" />
            <section className="prop py-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <Offcanvas className="filter--offcanvas" show={show} onHide={handleClose} responsive="lg" placement="end">
                                <Offcanvas.Header>
                                    <Offcanvas.Title as="h6">Filter Property</Offcanvas.Title>
                                    <button type="button" className="btn btn--sm btn--icon btn--close btn-soft--dark d-lg-none"
                                        onClick={handleClose}
                                        aria-label="Close"></button>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <form action="" id="prop-filter-form">
                                        <div className="prop-filter">
                                            <div className="prop-filter__body">
                                                <div className="prop-filter__field">
                                                    <select className="form-select form--select select2-v2"
                                                        data-label="Select Location">
                                                        <option value="1">New York, USA</option>
                                                        <option value="2">London, England</option>
                                                        <option value="3">Paris, France</option>
                                                        <option value="4">Berlin, Germany</option>
                                                        <option value="5">Tokyo, Japan</option>
                                                        <option value="6">San Francisco, USA</option>
                                                    </select>
                                                </div>
                                                <div className="prop-filter__field">
                                                    <select className="form-select form--select select2-v2"
                                                        data-label="Investment Type">
                                                        <option value="1"> Onetime Investment </option>
                                                        <option value="2">Investment By Installment </option>
                                                    </select>
                                                </div>
                                                <div className="prop-filter__field">
                                                    <select className="form-select form--select select2-v2"
                                                        data-label="Profit Schedule">
                                                        <option value="1">Lifetime</option>
                                                        <option value="2">Repeated Time</option>
                                                        <option value="3">One Time</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="prop-filter">
                                            <div className="prop-filter__header">
                                                <span className="prop-filter__label">Investment Range</span>
                                            </div>
                                            <div className="prop-filter__body">
                                                <div className="prop-filter__range">
                                                    <div className="input-group input--group">
                                                        <span className="input-group-text">$</span>
                                                        <input className="form-control form-control--sm form--control" type="text"
                                                            placeholder="Min Price" />
                                                    </div>
                                                    <div className="input-group input--group">
                                                        <span className="input-group-text">$</span>
                                                        <input className="form-control form-control--sm form--control" type="text"
                                                            placeholder="Max Price" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="prop-filter">
                                            <div className="prop-filter__header">
                                                <span className="prop-filter__label">Capital Back</span>
                                            </div>
                                            <div className="prop-filter__body">
                                                <div className="prop-filter__radio-layout">
                                                    <label className="prop-filter-radio" htmlFor="capital-all">
                                                        <input className="prop-filter-radio__input visually-hidden"
                                                            name="is_capital_back" type="radio" value="" id="capital-all"
                                                            checked="" />
                                                        <span className="prop-filter-radio__label">
                                                            All
                                                        </span>
                                                    </label>
                                                    <label className="prop-filter-radio" htmlFor="capital-yes">
                                                        <input className="prop-filter-radio__input visually-hidden"
                                                            name="is_capital_back" type="radio" value="1" id="capital-yes" />
                                                        <span className="prop-filter-radio__label">
                                                            Yes
                                                        </span>
                                                    </label>
                                                    <label className="prop-filter-radio" htmlFor="capital-no">
                                                        <input className="prop-filter-radio__input visually-hidden" type="radio"
                                                            value="2" name="is_capital_back" id="capital-no" />
                                                        <span className="prop-filter-radio__label">
                                                            No
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </Offcanvas.Body>
                                <div className="offcanvas-footer">
                                    <button className="btn btn--base w-100" type="submit" form="prop-filter-form">
                                        <span className="btn__text">
                                            Filter Now
                                        </span>
                                    </button>
                                </div>
                            </Offcanvas>

                            {/* <div className="offcanvas-lg offcanvas-end filter--offcanvas" tabindex="-1" id="offcanvasFilter"
                                aria-labelledby="offcanvasFilterLabel">
                                <div className="offcanvas-header">
                                    <h6 className="offcanvas-title" id="offcanvasFilterLabel">Filter Property</h6>
                                    <button type="button" className="btn btn--sm btn--icon btn--close btn-soft--dark d-lg-none"
                                        data-bs-dismiss="offcanvas" data-bs-target="#offcanvasFilter"
                                        aria-label="Close"></button>
                                </div>
                                <div className="offcanvas-body">
                                    <form action="" id="prop-filter-form">
                                        <div className="prop-filter">
                                            <div className="prop-filter__body">
                                                <div className="prop-filter__field">
                                                    <select className="form-select form--select select2-v2"
                                                        data-label="Select Location">
                                                        <option value="1">New York, USA</option>
                                                        <option value="2">London, England</option>
                                                        <option value="3">Paris, France</option>
                                                        <option value="4">Berlin, Germany</option>
                                                        <option value="5">Tokyo, Japan</option>
                                                        <option value="6">San Francisco, USA</option>
                                                    </select>
                                                </div>
                                                <div className="prop-filter__field">
                                                    <select className="form-select form--select select2-v2"
                                                        data-label="Investment Type">
                                                        <option value="1"> Onetime Investment </option>
                                                        <option value="2">Investment By Installment </option>
                                                    </select>
                                                </div>
                                                <div className="prop-filter__field">
                                                    <select className="form-select form--select select2-v2"
                                                        data-label="Profit Schedule">
                                                        <option value="1">Lifetime</option>
                                                        <option value="2">Repeated Time</option>
                                                        <option value="3">One Time</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="prop-filter">
                                            <div className="prop-filter__header">
                                                <span className="prop-filter__label">Investment Range</span>
                                            </div>
                                            <div className="prop-filter__body">
                                                <div className="prop-filter__range">
                                                    <div className="input-group input--group">
                                                        <span className="input-group-text">$</span>
                                                        <input className="form-control form-control--sm form--control" type="text"
                                                            placeholder="Min Price" />
                                                    </div>
                                                    <div className="input-group input--group">
                                                        <span className="input-group-text">$</span>
                                                        <input className="form-control form-control--sm form--control" type="text"
                                                            placeholder="Max Price" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="prop-filter">
                                            <div className="prop-filter__header">
                                                <span className="prop-filter__label">Capital Back</span>
                                            </div>
                                            <div className="prop-filter__body">
                                                <div className="prop-filter__radio-layout">
                                                    <label className="prop-filter-radio" htmlFor="capital-all">
                                                        <input className="prop-filter-radio__input visually-hidden"
                                                            name="is_capital_back" type="radio" value="" id="capital-all"
                                                            checked="" />
                                                        <span className="prop-filter-radio__label">
                                                            All
                                                        </span>
                                                    </label>
                                                    <label className="prop-filter-radio" htmlFor="capital-yes">
                                                        <input className="prop-filter-radio__input visually-hidden"
                                                            name="is_capital_back" type="radio" value="1" id="capital-yes" />
                                                        <span className="prop-filter-radio__label">
                                                            Yes
                                                        </span>
                                                    </label>
                                                    <label className="prop-filter-radio" htmlFor="capital-no">
                                                        <input className="prop-filter-radio__input visually-hidden" type="radio"
                                                            value="2" name="is_capital_back" id="capital-no" />
                                                        <span className="prop-filter-radio__label">
                                                            No
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="offcanvas-footer">
                                    <button className="btn btn--base w-100" type="submit" form="prop-filter-form">
                                        <span className="btn__text">Filter Now</span>
                                    </button>
                                </div>
                            </div> */}
                        </div>
                        <div className="col-lg-8">
                            <div className="prop-toolbar">
                                <div className="prop-toolbar__left">
                                    <h6 className="prop-toolbar__title">All Properties</h6>
                                </div>
                                <div className="prop-toolbar__right">
                                    <form className="search-form" action="">
                                        <div className="input-group input--group">
                                            <input className="form-control form--control" type="text" placeholder="Search..." />
                                            <button className="input-group-text" type="submit">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                    strokeLinecap="round" strokeLinejoin="round"
                                                    className="lucide lucide-search-icon lucide-search">
                                                    <path d="m21 21-4.34-4.34" />
                                                    <circle cx="11" cy="11" r="8" />
                                                </svg>
                                            </button>
                                        </div>
                                    </form>
                                    <button className="btn btn--icon btn--white d-lg-none" type="button" onClick={handleShow}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round" className="lucide lucide-funnel-icon lucide-funnel">
                                            <path
                                                d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z">
                                            </path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="row justify-content-center gy-4">
                                {properties.map(({ id, thumb, title, price, location }) => (
                                    <div key={id} className="col-md-6">
                                        <PropCard
                                            id={id}
                                            thumb={thumb}
                                            title={title}
                                            price={price}
                                            location={location}
                                        />
                                    </div>
                                ))}
                            </div>
                            {/* @@include('../layout/_pagination.html') */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Properties