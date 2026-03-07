import { Link } from 'react-router-dom';

const OurLocationCard = ({ thumb, title, total }) => {
    return (
        <Link className="our-location-card" to="#">
            <img className="our-location-card__thumb" src={thumb} alt="" />
            <div className="our-location-card__content">
                <span className="our-location-card__total">{title}</span>
                <h6 className="our-location-card__title">{total}</h6>
            </div>
        </Link>
    )
}

export default OurLocationCard