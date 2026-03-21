
import Collapse from 'react-bootstrap/Collapse';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo/logo.png';

const DashboardSidebar = ({ dashboardSidebarIsOpen, setDashboardSidebarIsOpen }) => {

    const [activeCollapses, setActiveCollapses] = useState([]);
    const allowMultiple = false;

    const handleCollapse = (id) => {
        setActiveCollapses(prev => {
            if (prev.includes(id)) {
                // close
                return prev.filter(item => item !== id);
            } else {
                // open
                return allowMultiple ? [...prev, id] : [id];
            }
        });
    };

    const handleClose = () => {
        setDashboardSidebarIsOpen(false);
        document.body.classList.remove("scroll-hide");
    };

    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") {
                handleClose();
            }
        };

        if (dashboardSidebarIsOpen) {
            document.body.classList.add("scroll-hide");
            document.addEventListener("keydown", handleEsc);
        }

        return () => {
            document.removeEventListener("keydown", handleEsc);
        };
    }, [dashboardSidebarIsOpen]);

    return (
        <>
            {dashboardSidebarIsOpen && (
                <div className="sidebar-overlay show" onClick={handleClose}></div>
            )}
            <aside className={`dashboard-sidebar ${dashboardSidebarIsOpen ? "show" : ""}`}>
                <div className="dashboard-sidebar__header">
                    <Link to="/" className="dashboard-sidebar-logo">
                        <img src={Logo} alt="" />
                    </Link>
                    <button className="btn btn--icon btn--sm btn--close d-lg-none" type="button" onClick={handleClose}></button>
                </div>
                <div className="dashboard-sidebar__body">
                    <ul className="dashboard-sidebar-menu">
                        <li className="dashboard-sidebar-menu__item active">
                            <Link className="dashboard-sidebar-menu__link" to="/user/dashboard">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                    className="injected-svg" role="img" color="currentColor">
                                    <path
                                        d="M21 6.75C21 4.67893 19.3211 3 17.25 3C15.1789 3 13.5 4.67893 13.5 6.75C13.5 8.82107 15.1789 10.5 17.25 10.5C19.3211 10.5 21 8.82107 21 6.75Z"
                                        stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"></path>
                                    <path
                                        d="M10.5 6.75C10.5 4.67893 8.82107 3 6.75 3C4.67893 3 3 4.67893 3 6.75C3 8.82107 4.67893 10.5 6.75 10.5C8.82107 10.5 10.5 8.82107 10.5 6.75Z"
                                        stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"></path>
                                    <path
                                        d="M21 17.25C21 15.1789 19.3211 13.5 17.25 13.5C15.1789 13.5 13.5 15.1789 13.5 17.25C13.5 19.3211 15.1789 21 17.25 21C19.3211 21 21 19.3211 21 17.25Z"
                                        stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"></path>
                                    <path
                                        d="M10.5 17.25C10.5 15.1789 8.82107 13.5 6.75 13.5C4.67893 13.5 3 15.1789 3 17.25C3 19.3211 4.67893 21 6.75 21C8.82107 21 10.5 19.3211 10.5 17.25Z"
                                        stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"></path>
                                </svg>
                                <span className="text">Dashboard</span>
                            </Link>
                        </li>
                        <li className="dashboard-sidebar-menu__item">
                            <Link className="dashboard-sidebar-menu__link" to="/user/invest-history">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                    className="lucide lucide-land-plot-icon lucide-land-plot">
                                    <path d="m12 8 6-3-6-3v10" />
                                    <path
                                        d="m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12" />
                                    <path d="m6.49 12.85 11.02 6.3" />
                                    <path d="M17.51 12.85 6.5 19.15" />
                                </svg>
                                <span className="text">My Investments</span>
                            </Link>
                        </li>
                        <li className="dashboard-sidebar-menu__item">
                            <Link className="dashboard-sidebar-menu__link" to="/user/profit-history">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                    className="lucide lucide-coins-icon lucide-coins">
                                    <circle cx="8" cy="8" r="6" />
                                    <path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
                                    <path d="M7 6h1v4" />
                                    <path d="m16.71 13.88.7.71-2.82 2.82" />
                                </svg>
                                <span className="text">Profit History</span>
                            </Link>
                        </li>
                        <li className="dashboard-sidebar-menu__item">
                            <a
                                className="dashboard-sidebar-menu__link"
                                href="javascript:void(0);"
                                role="button"
                                aria-expanded={activeCollapses.includes('deposit')}
                                onClick={(e) => {
                                    e.preventDefault()
                                    handleCollapse('deposit')
                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                    className="lucide lucide-wallet-icon lucide-wallet">
                                    <path
                                        d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
                                    <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
                                </svg>
                                <span className="text">Deposit</span>
                            </a>
                            <Collapse in={activeCollapses.includes('deposit')}>
                                <ul className="dashboard-sidebar-submenu">
                                    <li className="dashboard-sidebar-submenu__item">
                                        <a href="#" className="dashboard-sidebar-submenu__link">
                                            <span className="text">Deposit Money</span>
                                        </a>
                                    </li>
                                    <li className="dashboard-sidebar-submenu__item">
                                        <a href="#" className="dashboard-sidebar-submenu__link">
                                            <span className="text">Deposit History</span>
                                        </a>
                                    </li>
                                </ul>
                            </Collapse>
                        </li>
                        <li className="dashboard-sidebar-menu__item">
                            <a
                                className="dashboard-sidebar-menu__link"
                                href="javascript:void(0);"
                                role="button"
                                aria-expanded={activeCollapses.includes('withdraw')}
                                onClick={() => handleCollapse('withdraw')}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                    className="lucide lucide-landmark-icon lucide-landmark">
                                    <path d="M10 18v-7" />
                                    <path
                                        d="M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z" />
                                    <path d="M14 18v-7" />
                                    <path d="M18 18v-7" />
                                    <path d="M3 22h18" />
                                    <path d="M6 18v-7" />
                                </svg>
                                <span className="text">Withdraw</span>
                            </a>
                            <Collapse in={activeCollapses.includes('withdraw')}>
                                <ul className="dashboard-sidebar-submenu">
                                    <li className="dashboard-sidebar-submenu__item">
                                        <a href="#" className="dashboard-sidebar-submenu__link">
                                            <span className="text">Withdraw Money</span>
                                        </a>
                                    </li>
                                    <li className="dashboard-sidebar-submenu__item">
                                        <a href="#" className="dashboard-sidebar-submenu__link">
                                            <span className="text">Withdraw History</span>
                                        </a>
                                    </li>
                                </ul>
                            </Collapse>
                        </li>
                        <li className="dashboard-sidebar-menu__item">
                            <a className="dashboard-sidebar-menu__link" href="transactions.html">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                    className="lucide lucide-arrow-right-left-icon lucide-arrow-right-left">
                                    <path d="m16 3 4 4-4 4" />
                                    <path d="M20 7H4" />
                                    <path d="m8 21-4-4 4-4" />
                                    <path d="M4 17h16" />
                                </svg>
                                <span className="text">Transactions</span>
                            </a>
                        </li>
                        <li className="dashboard-sidebar-menu__item">
                            <a className="dashboard-sidebar-menu__link" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                    className="lucide lucide-users-round-icon lucide-users-round">
                                    <path d="M18 21a8 8 0 0 0-16 0"></path>
                                    <circle cx="10" cy="8" r="5"></circle>
                                    <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"></path>
                                </svg>
                                <span className="text">Manage Referral</span>
                            </a>
                        </li>
                        <li className="dashboard-sidebar-menu__item">
                            <a className="dashboard-sidebar-menu__link" data-bs-toggle="collapse" href="#dashboard-collapse-3"
                                role="button" aria-expanded="false" aria-controls="dashboard-collapse-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                    className="lucide lucide-ticket-icon lucide-ticket">
                                    <path
                                        d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z">
                                    </path>
                                    <path d="M13 5v2"></path>
                                    <path d="M13 17v2"></path>
                                    <path d="M13 11v2"></path>
                                </svg>
                                <span className="text">Support Ticket</span>
                            </a>
                            <div className="dashboard-collapse collapse" id="dashboard-collapse-3">
                                <ul className="dashboard-sidebar-submenu">
                                    <li className="dashboard-sidebar-submenu__item">
                                        <a href="#" className="dashboard-sidebar-submenu__link">
                                            <span className="text">My Tickets</span>
                                        </a>
                                    </li>
                                    <li className="dashboard-sidebar-submenu__item">
                                        <a href="#" className="dashboard-sidebar-submenu__link">
                                            <span className="text">Open New Ticket</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="dashboard-sidebar-menu__item">
                            <a className="dashboard-sidebar-menu__link" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                    className="lucide lucide-user-round-cog-icon lucide-user-round-cog">
                                    <path d="m14.305 19.53.923-.382" />
                                    <path d="m15.228 16.852-.923-.383" />
                                    <path d="m16.852 15.228-.383-.923" />
                                    <path d="m16.852 20.772-.383.924" />
                                    <path d="m19.148 15.228.383-.923" />
                                    <path d="m19.53 21.696-.382-.924" />
                                    <path d="M2 21a8 8 0 0 1 10.434-7.62" />
                                    <path d="m20.772 16.852.924-.383" />
                                    <path d="m20.772 19.148.924.383" />
                                    <circle cx="10" cy="8" r="5" />
                                    <circle cx="18" cy="18" r="3" />
                                </svg>
                                <span className="text">Profile Setting</span>
                            </a>
                        </li>
                        <li className="dashboard-sidebar-menu__item">
                            <a className="dashboard-sidebar-menu__link" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                    className="lucide lucide-lock-icon lucide-lock">
                                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                </svg>
                                <span className="text">Change Password</span>
                            </a>
                        </li>
                        <li className="dashboard-sidebar-menu__item">
                            <a className="dashboard-sidebar-menu__link" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                    className="lucide lucide-scan-line-icon lucide-scan-line">
                                    <path d="M3 7V5a2 2 0 0 1 2-2h2" />
                                    <path d="M17 3h2a2 2 0 0 1 2 2v2" />
                                    <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
                                    <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
                                    <path d="M7 12h10" />
                                </svg>
                                <span className="text">2FA Security</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="dashboard-sidebar__footer">
                    <a className="w-100 btn btn--lg btn-soft--danger" href="#">
                        <span className="btn__text">Log Out</span>
                        <span className="btn__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                className="lucide lucide-log-out-icon lucide-log-out">
                                <path d="m16 17 5-5-5-5" />
                                <path d="M21 12H9" />
                                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                            </svg>
                        </span>
                    </a>
                </div>
            </aside>
        </>
    )
}

export default DashboardSidebar;