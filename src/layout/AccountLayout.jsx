import { Link, Outlet, useLocation } from 'react-router-dom';
import AuthSwitcher from '../components/AuthSwitcher';
import userAccountThumb from '../assets/images/thumbs/account/thumb.jpg';
import vendorAccountThumb from '../assets/images/thumbs/account/thumb2.jpg';
import avatarGroupThumb from '../assets/images/thumbs/account/avatar-group.png';
import LogoDark from '../assets/images/logo/logo-dark.png';

const AccountLayout = () => {

    const location = useLocation();
    const isUserRoute = location.pathname.startsWith('/user');
    const accountThumb = isUserRoute ? userAccountThumb : vendorAccountThumb;

    
    return (
        <main className="page-wrapper">
            <section className="account">
                <div className="account-thumb bg-img" style={{backgroundImage: `url(${accountThumb})`}}>
                    <div className="">
                        <div className="account-thumb-content">
                            <h4 className="account-thumb-title">Mange Properties Effectively</h4>
                            <p className="account-thumb-desc">Manage listings, tenants, payments, and maintenance effortlessly with
                                a system built to save time and reduce complexity.</p>
                        </div>
                    </div>
                    <div className="account-thumb-bottom">
                        <div className="account-thumb-rating">
                            <img className="account-thumb-rating__thumb" src={avatarGroupThumb} alt="" />
                            <div className="account-thumb-rating__content">
                                <p className="account-thumb-rating__label">10+ Featured Agents</p>
                                <div className="rating-list">
                                    <i className="las la-star"></i>
                                    <i className="las la-star"></i>
                                    <i className="las la-star"></i>
                                    <i className="las la-star"></i>
                                    <i className="las la-star"></i>
                                    <span className="rating-list__text">4.8 / 5</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="account-content">
                    <div className="account-content__header">
                        <Link className="account-logo" to="/">
                            <img src={LogoDark} alt="" />
                        </Link>
                        <AuthSwitcher />
                    </div>
                    <div className="account-content__body">
                        <Outlet />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default AccountLayout