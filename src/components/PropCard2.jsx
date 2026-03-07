import { Link } from 'react-router-dom';

const PropCard2 = ({ id, thumb, title, price, location }) => {
    return (
        <div className="prop-card2">
            <div className="prop-card2__col">
                <div className="prop-card2-main">
                    <Link className="prop-card2-main__thumb d-none d-xl-block" to={`/property/${id}`}>
                        <img src={thumb} alt="" />
                    </Link>
                    <div className="prop-card2-main__content">
                        <div className="prop-card2-main__content-header">
                            <div className="prop-card2-info">
                                <a className="prop-card2-info__thumb d-xl-none" to={`/property/${id}`}>
                                    <img src={thumb} alt="" />
                                </a>
                                <div className="prop-card2-info__content">
                                    <h5 className="prop-card2-info__title">
                                        <Link to={`/property/${id}`}>{title}</Link>
                                    </h5>
                                    <div className="invest-amount">
                                        <div className="invest-amount__progress">
                                            <div className="invest-amount__progress-bar" style={{width: '50%'}}></div>
                                        </div>
                                        <ul className="invest-amount-meta">
                                            <li className="invest-amount-meta__item">12 Square Feet</li>
                                            <li className="invest-amount-meta__item">$144,000.00 (100%)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="prop-card2-main__content-body">
                            <ul className="prop-card2-attr">
                                <li className="prop-card2-attr__item">
                                    <span className="label">Profit</span>
                                    <span className="value">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round" className="lucide lucide-chart-line-icon lucide-chart-line">
                                            <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                                            <path d="m19 9-5 5-4-4-3 3"></path>
                                        </svg>
                                        25 - 40%
                                    </span>
                                </li>
                                <li className="prop-card2-attr__item">
                                    <span className="label">Profit Schedule</span>
                                    <span className="value">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-calendar-sync-icon lucide-calendar-sync">
                                            <path d="M11 10v4h4" />
                                            <path d="m11 14 1.535-1.605a5 5 0 0 1 8 1.5" />
                                            <path d="M16 2v4" />
                                            <path d="m21 18-1.535 1.605a5 5 0 0 1-8-1.5" />
                                            <path d="M21 22v-4h-4" />
                                            <path d="M21 8.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4.3" />
                                            <path d="M3 10h4" />
                                            <path d="M8 2v4" />
                                        </svg>
                                        Lifetime (Monthly)
                                    </span>
                                </li>
                                <li className="prop-card2-attr__item">
                                    <span className="label">Capital Back</span>
                                    <span className="value">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round" className="lucide lucide-undo-dot-icon lucide-undo-dot">
                                            <path d="M21 17a9 9 0 0 0-15-6.7L3 13" />
                                            <path d="M3 7v6h6" />
                                            <circle cx="12" cy="17" r="1" />
                                        </svg>
                                        Yes
                                    </span>
                                </li>
                                <li className="prop-card2-attr__item">
                                    <span className="label">Location</span>
                                    <span className="value">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round" className="lucide lucide-map-pin-icon lucide-map-pin">
                                            <path
                                                d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                                            <circle cx="12" cy="10" r="3" />
                                        </svg>
                                        {location}
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="prop-card2-main__content-footer d-md-none">
                            <h5 className="prop-card2__price">{price}</h5>
                            <Link className="btn btn--sm btn--base" to={`/property/${id}`}>
                                View Details
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="prop-card2__col">
                <div className="prop-card2-action">
                    <h5 className="prop-card2__price">{price}</h5>
                    <Link className="w-100 btn btn--base" to={`/property/${id}`}>
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PropCard2