import React from 'react'
import { Link, useMatch } from 'react-router-dom'

const AuthSwitcher = () => {
    const userMatch = useMatch('/user/:type');
    const vendorMatch = useMatch('/vendor/:type');

    const isUserAuthRoute =
        userMatch?.params.type === 'login' ||
        userMatch?.params.type === 'register';

    const isVendorAuthRoute =
        vendorMatch?.params.type === 'login' ||
        vendorMatch?.params.type === 'register';

    return (
        <div className="auth-switcher">
            <div className="auth-switcher__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="lucide lucide-user-icon lucide-user">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                </svg>
            </div>

            <div className="auth-switcher__content">
                <ul className="auth-switcher-links">
                    <li>
                        <Link
                            to="/user/login"
                            className={isUserAuthRoute ? "active" : ""}
                        >
                            User
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/vendor/login"
                            className={isVendorAuthRoute ? "active" : ""}
                        >
                            Vendor
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default AuthSwitcher