import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';

const DropdownProfile = ({ logout }) => {
    return (
        <>

            <Dropdown className="dropdown--profile">
                <Dropdown.Toggle variant={null} as="button">
                    <span className="dropdown-toggle__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                            className="lucide lucide-user-icon lucide-user">
                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                        </svg>
                    </span>
                    <span className="dropdown-toggle__content">
                        <span className="dropdown-toggle__name">Hi, Username</span>
                        <span className="dropdown-toggle__balance">$411.0 USD </span>
                    </span>
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu" align="end">
                    <div className="dropdown-menu__header d-sm-none">
                        <div className="dropdown-info">
                            <div className="dropdown-info__icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                    className="lucide lucide-user-icon lucide-user">
                                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                                    <circle cx="12" cy="7" r="4" />
                                </svg>
                            </div>
                            <div className="dropdown-info__content">
                                <div className="dropdown-info__name">Hi, Username</div>
                                <div className="dropdown-info__balance">$411.0 USD</div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown-menu__body">
                        <Link className="dropdown-item" to="/user/dashboard">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                className="lucide lucide-layout-dashboard-icon lucide-layout-dashboard">
                                <rect width="7" height="9" x="3" y="3" rx="1" />
                                <rect width="7" height="5" x="14" y="3" rx="1" />
                                <rect width="7" height="9" x="14" y="12" rx="1" />
                                <rect width="7" height="5" x="3" y="16" rx="1" />
                            </svg>
                            <span className="text">Dashboard</span>
                        </Link>
                        <Link className="dropdown-item" href="profile.html">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12C13.6569 12 15 10.6569 15 9Z"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                </path>
                                <path
                                    d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                </path>
                                <path d="M17 17C17 14.2386 14.7614 12 12 12C9.23858 12 7 14.2386 7 17" stroke="currentColor"
                                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                            <span className="text">Profile Setting</span>
                        </Link>
                        <Link className="dropdown-item" href="change-password.html">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M4.26781 18.8447C4.49269 20.515 5.87613 21.8235 7.55966 21.9009C8.97627 21.966 10.4153 22 12 22C13.5847 22 15.0237 21.966 16.4403 21.9009C18.1239 21.8235 19.5073 20.515 19.7322 18.8447C19.879 17.7547 20 16.6376 20 15.5C20 14.3624 19.879 13.2453 19.7322 12.1553C19.5073 10.485 18.1239 9.17649 16.4403 9.09909C15.0237 9.03397 13.5847 9 12 9C10.4153 9 8.97627 9.03397 7.55966 9.09909C5.87613 9.17649 4.49269 10.485 4.26781 12.1553C4.12105 13.2453 4 14.3624 4 15.5C4 16.6376 4.12105 17.7547 4.26781 18.8447Z"
                                    stroke="currentColor" strokeWidth="2"></path>
                                <path d="M7.5 9V6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5V9"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                </path>
                                <path d="M16 15.49V15.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round"></path>
                                <path d="M12 15.49V15.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round"></path>
                                <path d="M8 15.49V15.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round"></path>
                            </svg>
                            <span className="text">Change Password</span>
                        </Link>
                        <Link className="dropdown-item" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                className="injected-svg" role="img" color="currentColor">
                                <path
                                    d="M2 9.5V6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V9.5C20.6193 9.5 19.5 10.6193 19.5 12C19.5 13.3807 20.6193 14.5 22 14.5V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V14.5C3.38071 14.5 4.5 13.3807 4.5 12C4.5 10.6193 3.38071 9.5 2 9.5Z"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                </path>
                            </svg>
                            <span className="text">Support Tickets</span>
                        </Link>
                        <a className="dropdown-item logout" href="javascript:void(0);" onClick={() => logout()}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M15 17.625C14.9264 19.4769 13.3831 21.0494 11.3156 20.9988C10.8346 20.987 10.2401 20.8194 9.05112 20.484C6.18961 19.6768 3.70555 18.3203 3.10956 15.2815C3 14.723 3 14.0944 3 12.8373V11.1627C3 9.90561 3 9.27705 3.10956 8.71846C3.70555 5.67965 6.18961 4.32316 9.05112 3.51603C10.2401 3.18064 10.8346 3.01295 11.3156 3.00119C13.3831 2.95061 14.9264 4.52307 15 6.37501"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                <path
                                    d="M21 12H10M21 12C21 11.2998 19.0057 9.99153 18.5 9.5M21 12C21 12.7002 19.0057 14.0085 18.5 14.5"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="text">Logout</span>
                        </a>
                    </div>
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}

export default DropdownProfile;