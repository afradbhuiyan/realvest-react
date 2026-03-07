import { Link } from 'react-router-dom';
import SocialAuth from '../components/SocialAuth';

const UserLogin = () => {
    return (
        <div className="account-card">
            <div className="account-card__header">
                <h5 className="account-card__title">Account Login</h5>
                <p className="account-card__desc">
                    Login in to continue your property search and manage your dashboard.
                </p>
            </div>
            <div className="account-card__body">
                <form className="account-form" action="">
                    <div className="row gy-3">
                        <div className="col-sm-12">
                            <label className="form--label required" for="">Username or Email</label>
                            <input className="form-control form--control" type="text" placeholder="Email Address" />
                        </div>
                        <div className="col-sm-12">
                            <label className="form--label required" for="">Password</label>
                            <div className="input-group input--group input--group-password">
                                <input className="form-control form--control" type="password"
                                    placeholder="Password" />
                                <span className="input-group-text input-group-btn">
                                    <i className="far fa-eye-slash"></i>
                                </span>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="account-form__extra">
                                <div className="form--check gradient">
                                    <input className="form-check-input" type="checkbox" id="remember-me" />
                                    <label className="form-check-label" for="remember-me">Remember Me</label>
                                </div>
                                <a href="#" className="account-form__forgot-link">Forgot Password?</a>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <img className="mb-3" src="assets/images/thumbs/captcha.png" alt="" />
                            <button className="w-100 btn btn--base mt-1" type="submit">
                                Sign In
                            </button>
                        </div>
                    </div>
                </form>
                <div className="account-divider">
                    <span>Or</span>
                </div>
                <SocialAuth />
                <p className="account-info">
                    Don't have an account? <Link to="/user/register">Sign Up</Link>
                </p>
            </div>
        </div>
    )
}

export default UserLogin