import { Link } from 'react-router-dom'
import Thumb1 from '../assets/images/thumbs/properties/thumb-1.png'
import Thumb2 from '../assets/images/thumbs/properties/thumb-2.png'
import Thumb3 from '../assets/images/thumbs/properties/thumb-3.png'
import PropCard2 from '../components/PropCard2'

const FeatureProperties = () => {

    const properties = [
        {
            id: 1,
            thumb: Thumb1,
            title: 'Luxury Condominiums',
            price: '$12,000.00',
            location: 'New York, USA',
        },
        {
            id: 2,
            thumb: Thumb2,
            title: 'Traditional Machiya Townhouse',
            price: '$20,000.00',
            location: 'San Francisco, USA',
        },
        {
            id: 3,
            thumb: Thumb3,
            title: 'Elite Horizon',
            price: '$25,000.00',
            location: 'Tokyo, Japan',
        },
    ]

    return (
        <section className="feature-prop py-120">
            <div className="container">
                <div className="section-heading style-left">
                    <div className="row gy-4 justify-content-between">
                        <div className="col-lg-5">
                            <span className="section-heading__tagline">
                                Featured properties
                            </span>
                            <h2 className="section-heading__title">
                                All Properties Spotlight
                            </h2>
                        </div>
                        <div className="col-lg-5">
                            <p className="section-heading__desc">
                                Discover a curated collection of all available properties in one place. Explore featured
                                listings,
                                compare options, and find the perfect property that matches your needs and lifestyle.
                            </p>
                            <Link className="btn btn--base mt-4" top="/properties">
                                <span className="btn__text">Explore More</span>
                                <span className="btn__icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round" className="lucide lucide-chevron-right-icon lucide-chevron-right">
                                        <path d="m9 18 6-6-6-6"></path>
                                    </svg>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center gy-4">
                    {properties.map(({ id, thumb, title, price, location }) => (
                        <div key={id} className="col-md-12">
                            <PropCard2
                                id={id}
                                thumb={thumb}
                                title={title}
                                price={price}
                                location={location}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FeatureProperties