import { Link } from "react-router-dom"

const OurLocationCard = ({ thumb, title, total }) => {
    return (
        <Link class="our-location-card" to="#">
            <img class="our-location-card__thumb" src={thumb} alt="" />
            <div class="our-location-card__content">
                <span class="our-location-card__total">{title}</span>
                <h6 class="our-location-card__title">{total}</h6>
            </div>
        </Link>
    )
}

export default OurLocationCard