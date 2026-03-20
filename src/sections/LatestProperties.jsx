import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropCard from '../components/PropCard';
import NoDataFound from '../components/NoDataFound';

const LatestProperties = () => {


    const [properties, setProperties] = useState([]);

    useEffect(() => {
        fetch('/realvest-react/data/properties.json')
            .then(res => res.json())
            .then(data => setProperties(data));
    }, []);

    return (
        <section className="latest-prop py-120">
            <div className="container">
                <div className="section-heading style-left">
                    <div className="row gy-4 justify-content-between">
                        <div className="col-lg-5">
                            <span className="section-heading__tagline">
                                Latest properties
                            </span>
                            <h2 className="section-heading__title">
                                Explore Latest Properties
                            </h2>
                        </div>
                        <div className="col-lg-5">
                            <p className="section-heading__desc">
                                Discover the newest properties on the market, featuring modern designs, prime locations, and
                                competitive prices tailored to your needs.
                            </p>
                            <Link className="btn btn--base mt-4" to="/properties">
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
                <div className="row justify-content-center gy-4 gy-xl-0">
                    {properties.length ?
                         properties.slice(0, 3).map(({ id, thumb, title, price, location }) => (
                            <div key={id} className="col-md-6 col-xl-4">
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
        </section>
    )
}

export default LatestProperties