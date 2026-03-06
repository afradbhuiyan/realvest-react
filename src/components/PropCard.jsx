import { Link } from "react-router-dom"

const PropCard = ({ id, thumb, title, price, location }) => {
    return (
        <div className="prop-card">
            <div className="prop-card__header">
                <Link className="prop-card__thumb" to={`/property/${id}`}>
                    <img src={thumb} alt="" />
                </Link>
            </div>
            <div className="prop-card__body">
                <h6 className="prop-card__title">
                    <Link to={`/property/${id}`}>{title}</Link>
                </h6>
                <div className="invest-amount">
                    <div className="invest-amount__progress">
                        <div className="invest-amount__progress-bar" style={{width: '50%'}}></div>
                    </div>
                    <ul className="invest-amount-meta">
                        <li className="invest-amount-meta__item">12 Square Feet</li>
                        <li className="invest-amount-meta__item">$144,000.00 (100%)</li>
                    </ul>
                </div>
                <div className="prop-card-info">
                    <span className="prop-card-info__location">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                            className="lucide lucide-map-pin-icon lucide-map-pin">
                            <path
                                d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                            <circle cx="12" cy="10" r="3" />
                        </svg>
                        {location}
                    </span>
                    <h5 className="prop-card-info__price">{price}</h5>
                </div>
            </div>
            <div className="prop-card__footer">
                <a className="w-100 btn btn--base" to={`/property/${id}`}>
                    View Details
                </a>
            </div>
        </div>
    )
}

export default PropCard