import { Link } from 'react-router-dom';
import pageBannerBg from '../assets/images/thumbs/page-banner/bg.jpg';

const PageBanner = ({ title }) => {

    return (
        <section className="page-banner bg-img" style={{ backgroundImage: `url(${pageBannerBg})` }}>
            <div className="page-banner-border">
                <span className="banner-border__item"></span>
                <span className="banner-border__item"></span>
                <span className="banner-border__item"></span>
                <span className="banner-border__item"></span>
                <span className="banner-border__item"></span>
            </div>
            <div className="container">
                <h3 className="page-banner__title">{title}</h3>
                <ul className="breadcrumb custom--breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to="/">
                            <i className="las la-home"></i>
                            Home
                        </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        {title}
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default PageBanner