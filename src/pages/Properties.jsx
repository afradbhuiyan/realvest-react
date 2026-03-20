import { useState, useEffect } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Select, { components } from 'react-select';

import NoDataFound from '../components/NoDataFound';
import PropCard from '../components/PropCard';
import PageBanner from '../sections/PageBanner';


const CustomControl = (props) => {
    return (
        <>
            <components.Control {...props}>
                <div className="select__custom-placeholder">
                    {props.selectProps.placeholder}
                </div>
                <components.ValueContainer {...props} />
            </components.Control>

        </>
    )
}

const CustomDropdownIndicator = (props) => {
    return (
        <>
            <components.DropdownIndicator {...props}>
                <i className="las la-angle-down"></i>
            </components.DropdownIndicator>

        </>
    )
}

const Properties = () => {

    const locations = [
        { label: 'New York, USA', value: 1 },
        { label: 'London, England', value: 2 },
        { label: 'Paris, France', value: 3 },
        { label: 'Berlin, Germany', value: 4 },
        { label: 'Tokyo, Japan', value: 5 },
        { label: 'San Francisco, USA', value: 6 },
    ]

    const investmentType = [
        { label: 'Onetime Investment', value: 1 },
        { label: 'Investment By Installment', value: 2 },
    ]

    const profitSchedule = [
        { label: 'Lifetime', value: 1 },
        { label: 'Repeated Time', value: 2 },
        { label: 'One Time', value: 3 },
    ]

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        fetch('/realvest-react/data/properties.json')
            .then(res => res.json())
            .then(data => setProperties(data));
    }, []);


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
                                                    <Select
                                                        placeholder="Select Locations"
                                                        className="custom-select"
                                                        classNamePrefix="select"
                                                        components={{
                                                            Control: CustomControl,
                                                            DropdownIndicator: CustomDropdownIndicator,
                                                            IndicatorSeparator: false,
                                                        }}
                                                        options={locations}
                                                        defaultValue={locations[0]}
                                                    />
                                                </div>
                                                <div className="prop-filter__field">
                                                    <Select
                                                        placeholder="Investment Type"
                                                        className="custom-select"
                                                        classNamePrefix="select"
                                                        components={{
                                                            Control: CustomControl,
                                                            DropdownIndicator: CustomDropdownIndicator,
                                                            IndicatorSeparator: false,
                                                        }}
                                                        options={investmentType}
                                                        defaultValue={investmentType[0]}
                                                    />
                                                </div>
                                                <div className="prop-filter__field">
                                                    <Select
                                                        placeholder="Profit Schedule"
                                                        className="custom-select"
                                                        classNamePrefix="select"
                                                        components={{
                                                            Control: CustomControl,
                                                            DropdownIndicator: CustomDropdownIndicator,
                                                            IndicatorSeparator: false,
                                                        }}
                                                        options={profitSchedule}
                                                        defaultValue={profitSchedule[0]}
                                                    />
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
                                {properties.length ?
                                    properties.map(({ id, thumb, title, price, location }) => (
                                        <div key={id} className="col-md-6">
                                            <PropCard
                                                id={id}
                                                thumb={thumb[0]}
                                                title={title}
                                                price={price}
                                                location={location}
                                            />
                                        </div>
                                    )) :
                                    <div className="col-12">
                                        <NoDataFound />
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Properties