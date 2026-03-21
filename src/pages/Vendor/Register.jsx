import { Link } from 'react-router-dom';

const VendorRegister = () => {
    return (
        <div className="account-card">
            <div className="account-card__header">
                <h5 className="account-card__title">Create an Account</h5>
                <p className="account-card__desc">Create an account to save listings, and stay
                    updated.</p>
            </div>
            <div className="account-card__body">
                <form className="account-form" action="">
                    <div className="row gy-4">
                        <div className="col-sm-6">
                            <label className="form--label required" for="">First Name</label>
                            <input className="form-control form--control" type="text" placeholder="First Name" />
                        </div>
                        <div className="col-sm-6">
                            <label className="form--label required" for="">Last Name</label>
                            <input className="form-control form--control" type="text" placeholder="Last Name" />
                        </div>
                        <div className="col-sm-12">
                            <label className="form--label required" for="">Email Address</label>
                            <input className="form-control form--control" type="text" placeholder="Email Address" />
                        </div>
                        <div className="col-sm-6">
                            <label className="form--label required" for="">Password</label>
                            <div className="input-group input--group input--group-password">
                                <input className="form-control form--control" type="password"
                                    placeholder="Password" />
                                <span className="input-group-text input-group-btn">
                                    <i className="far fa-eye-slash"></i>
                                </span>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <label className="form--label required" for="">Confirm password</label>
                            <div className="input-group input--group input--group-password">
                                <input className="form-control form--control" type="password"
                                    placeholder="Confirm password" />
                                <span className="input-group-text input-group-btn">
                                    <i className="far fa-eye-slash"></i>
                                </span>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="form--check">
                                <input type="checkbox" id="agree" name="agree" className="form-check-input"
                                    required="" />
                                <label for="agree" className="form-check-label">
                                    I agree with
                                    <a href="#" className="fs-14 ms-1" target="_blank">Privacy Policy</a>
                                    ,
                                    <a href="#" className="fs-14 ms-1" target="_blank">Terms of Service</a>
                                </label>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <img className="mb-3" src="assets/images/thumbs/captcha.png" alt="" />
                            <button className="w-100 btn btn--lg btn--base mt-1" type="submit">
                                Sign Up
                            </button>
                        </div>
                    </div>

                </form>
                <p className="account-info">
                    Already have an account? <Link to="/vendor/login">Sign In</Link>
                </p>
            </div>
        </div>
    )
}

export default VendorRegister