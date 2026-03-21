
const Dashboard = () => {
    return (
        <>
            <div className="notice">
                <div className="alert alert--base" role="alert">
                    <div className="alert__icon">
                        <i className="las la-bell"></i>
                    </div>
                    <div className="alert__content">
                        <h6 className="alert__title">Please Allow / Reset Browser Notification</h6>
                        <p className="alert__desc">
                            If you want to get push notification then you have to allow notification from your browser
                        </p>
                    </div>
                </div>
            </div>

            <div className="alert alert--danger" role="alert">
                <button className="btn-close btn--close" type="button" data-bs-dismiss="alert" aria-label="Close"></button>
                <div className="alert__icon"><i className="fas fa-check"></i></div>
                <div className="alert__content">
                    <h6 className="alert__title">KYC Documents Rejected</h6>
                    <p className="alert__desc">
                        Lorem ipsum dolor sit amet.
                        <span className="d-inline-flex align-items-center gap-2">
                            <a className="alert__link" href="#">
                                Click Here to Re-submit Documents.
                            </a>
                            <a className="text--info fw-semibold" data-bs-toggle="modal"
                                data-bs-target="#kycRejectionReason" href="javascript:void(0);">
                                Show Reason </a>
                        </span>
                    </p>
                </div>
            </div>

            <div className="alert alert--info" role="alert">
                <button className="btn-close btn--close" type="button" data-bs-dismiss="alert" aria-label="Close"></button>
                <div className="alert__icon"><i className="fas fa-check"></i></div>
                <div className="alert__content">
                    <h6 className="alert__title">KYC Verification required</h6>
                    <p className="alert__desc">

                        <a className="alert__link" href="#">
                            Click Here to Submit Documents </a>
                    </p>
                </div>
            </div>

            <div className="alert alert--warning" role="alert">
                <button className="btn-close btn--close" type="button" data-bs-dismiss="alert" aria-label="Close"></button>
                <div className="alert__icon"><i className="fas fa-check"></i></div>
                <div className="alert__content">
                    <h6 className="alert__title">KYC Verification pending</h6>
                    <p className="alert__desc">

                        <a className="alert__link" href="#">
                            See KYC Data </a>
                    </p>
                </div>
            </div>

            <div className="row gy-4 justify-content-center mb-4">
                <div className="col-sm-6 col-xl-4 col-xxl-3">
                    <div className="dashboard-widget">
                        <div className=" dashboard-widget__overlay">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                strokeLinejoin="round" className="lucide lucide-dollar-sign-icon lucide-dollar-sign">
                                <line x1="12" x2="12" y1="2" y2="22" />
                                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                            </svg>
                        </div>
                        <div className="dashboard-widget__top">
                            <div className="dashboard-widget__icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round" className="lucide lucide-dollar-sign-icon lucide-dollar-sign">
                                    <line x1="12" x2="12" y1="2" y2="22" />
                                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                </svg>
                            </div>
                            <span className="dashboard-widget__label">
                                Balance
                            </span>
                            <div className="dashboard-widget__arrow">
                                <i className="fas fa-arrow-right"></i>
                            </div>
                        </div>
                        <div className="dashboard-widget__content">
                            <h5 className="dashboard-widget__title">
                                $2,649.99
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-xl-4 col-xxl-3">
                    <div className="dashboard-widget">
                        <div className="dashboard-widget__overlay">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-banknote-arrow-up-icon lucide-banknote-arrow-up">
                                <path d="M12 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5" />
                                <path d="M18 12h.01" />
                                <path d="M19 22v-6" />
                                <path d="m22 19-3-3-3 3" />
                                <path d="M6 12h.01" />
                                <circle cx="12" cy="12" r="2" />
                            </svg>
                        </div>
                        <div className="dashboard-widget__top">
                            <div className="dashboard-widget__icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-banknote-arrow-up-icon lucide-banknote-arrow-up">
                                    <path d="M12 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5" />
                                    <path d="M18 12h.01" />
                                    <path d="M19 22v-6" />
                                    <path d="m22 19-3-3-3 3" />
                                    <path d="M6 12h.01" />
                                    <circle cx="12" cy="12" r="2" />
                                </svg>
                            </div>
                            <span className="dashboard-widget__label">
                                Total Deposit
                            </span>
                            <div className="dashboard-widget__arrow">
                                <i className="fas fa-arrow-right"></i>
                            </div>
                        </div>
                        <div className="dashboard-widget__content">
                            <h5 className="dashboard-widget__title">
                                $101,350.00
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-xl-4 col-xxl-3">
                    <div className="dashboard-widget">
                        <div className="dashboard-widget__overlay">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-banknote-arrow-down-icon lucide-banknote-arrow-down">
                                <path d="M12 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5" />
                                <path d="m16 19 3 3 3-3" />
                                <path d="M18 12h.01" />
                                <path d="M19 16v6" />
                                <path d="M6 12h.01" />
                                <circle cx="12" cy="12" r="2" />
                            </svg>
                        </div>
                        <div className="dashboard-widget__top">
                            <div className="dashboard-widget__icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-banknote-arrow-down-icon lucide-banknote-arrow-down">
                                    <path d="M12 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5" />
                                    <path d="m16 19 3 3 3-3" />
                                    <path d="M18 12h.01" />
                                    <path d="M19 16v6" />
                                    <path d="M6 12h.01" />
                                    <circle cx="12" cy="12" r="2" />
                                </svg>
                            </div>
                            <span className="dashboard-widget__label">
                                Total Withdraw
                            </span>
                            <div className="dashboard-widget__arrow">
                                <i className="fas fa-arrow-right"></i>
                            </div>
                        </div>
                        <div className="dashboard-widget__content">
                            <h5 className="dashboard-widget__title">
                                $0.00
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-xl-4 col-xxl-3">
                    <div className="dashboard-widget">
                        <div className="dashboard-widget__overlay">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                strokeLinejoin="round" className="lucide lucide-wallet-icon lucide-wallet">
                                <path
                                    d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
                                <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
                            </svg>
                        </div>
                        <div className="dashboard-widget__top">
                            <div className="dashboard-widget__icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round" className="lucide lucide-wallet-icon lucide-wallet">
                                    <path
                                        d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
                                    <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
                                </svg>
                            </div>
                            <span className="dashboard-widget__label">
                                Total Investment
                            </span>
                            <div className="dashboard-widget__arrow">
                                <i className="fas fa-arrow-right"></i>
                            </div>
                        </div>
                        <div className="dashboard-widget__content">
                            <h5 className="dashboard-widget__title">
                                $185,400.00
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-xl-4 col-xxl-3">
                    <div className="dashboard-widget">
                        <div className="dashboard-widget__overlay">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                strokeLinejoin="round" className="lucide lucide-wallet-icon lucide-wallet">
                                <path
                                    d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
                                <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
                            </svg>
                        </div>
                        <div className="dashboard-widget__top">
                            <div className="dashboard-widget__icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round" className="lucide lucide-wallet-icon lucide-wallet">
                                    <path
                                        d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
                                    <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
                                </svg>
                            </div>
                            <span className="dashboard-widget__label">
                                Total Profit
                            </span>
                            <div className="dashboard-widget__arrow">
                                <i className="fas fa-arrow-right"></i>
                            </div>
                        </div>
                        <div className="dashboard-widget__content">
                            <h5 className="dashboard-widget__title">
                                $16,999.99
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-xl-4 col-xxl-3">
                    <div className="dashboard-widget">
                        <div className="dashboard-widget__overlay">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                strokeLinejoin="round" className="lucide lucide-building-icon lucide-building">
                                <path d="M12 10h.01" />
                                <path d="M12 14h.01" />
                                <path d="M12 6h.01" />
                                <path d="M16 10h.01" />
                                <path d="M16 14h.01" />
                                <path d="M16 6h.01" />
                                <path d="M8 10h.01" />
                                <path d="M8 14h.01" />
                                <path d="M8 6h.01" />
                                <path d="M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" />
                                <rect x="4" y="2" width="16" height="20" rx="2" />
                            </svg>
                        </div>
                        <div className="dashboard-widget__top">
                            <div className="dashboard-widget__icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round" className="lucide lucide-building-icon lucide-building">
                                    <path d="M12 10h.01" />
                                    <path d="M12 14h.01" />
                                    <path d="M12 6h.01" />
                                    <path d="M16 10h.01" />
                                    <path d="M16 14h.01" />
                                    <path d="M16 6h.01" />
                                    <path d="M8 10h.01" />
                                    <path d="M8 14h.01" />
                                    <path d="M8 6h.01" />
                                    <path d="M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" />
                                    <rect x="4" y="2" width="16" height="20" rx="2" />
                                </svg>
                            </div>
                            <span className="dashboard-widget__label">
                                Total Invested Property
                            </span>
                            <div className="dashboard-widget__arrow">
                                <i className="fas fa-arrow-right"></i>
                            </div>
                        </div>
                        <div className="dashboard-widget__content">
                            <h5 className="dashboard-widget__title">
                                13
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-xl-4 col-xxl-3">
                    <div className="dashboard-widget">
                        <div className="dashboard-widget__overlay">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                strokeLinejoin="round" className="lucide lucide-network-icon lucide-network">
                                <rect x="16" y="16" width="6" height="6" rx="1" />
                                <rect x="2" y="16" width="6" height="6" rx="1" />
                                <rect x="9" y="2" width="6" height="6" rx="1" />
                                <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
                                <path d="M12 12V8" />
                            </svg>
                        </div>
                        <div className="dashboard-widget__top">
                            <div className="dashboard-widget__icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round" className="lucide lucide-network-icon lucide-network">
                                    <rect x="16" y="16" width="6" height="6" rx="1" />
                                    <rect x="2" y="16" width="6" height="6" rx="1" />
                                    <rect x="9" y="2" width="6" height="6" rx="1" />
                                    <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
                                    <path d="M12 12V8" />
                                </svg>
                            </div>
                            <span className="dashboard-widget__label">
                                My Referrals
                            </span>
                            <div className="dashboard-widget__arrow">
                                <i className="fas fa-arrow-right"></i>
                            </div>
                        </div>
                        <div className="dashboard-widget__content">
                            <h5 className="dashboard-widget__title">
                                1
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-xl-4 col-xxl-3">
                    <div className="dashboard-widget">
                        <div className="dashboard-widget__overlay">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                strokeLinejoin="round" className="lucide lucide-trophy-icon lucide-trophy">
                                <path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978" />
                                <path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978" />
                                <path d="M18 9h1.5a1 1 0 0 0 0-5H18" />
                                <path d="M4 22h16" />
                                <path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z" />
                                <path d="M6 9H4.5a1 1 0 0 1 0-5H6" />
                            </svg>
                        </div>
                        <div className="dashboard-widget__top">
                            <div className="dashboard-widget__icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round" className="lucide lucide-trophy-icon lucide-trophy">
                                    <path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978" />
                                    <path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978" />
                                    <path d="M18 9h1.5a1 1 0 0 0 0-5H18" />
                                    <path d="M4 22h16" />
                                    <path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z" />
                                    <path d="M6 9H4.5a1 1 0 0 1 0-5H6" />
                                </svg>
                            </div>
                            <span className="dashboard-widget__label">
                                Referral Commission
                            </span>
                            <div className="dashboard-widget__arrow">
                                <i className="fas fa-arrow-right"></i>
                            </div>
                        </div>
                        <div className="dashboard-widget__content">
                            <h5 className="dashboard-widget__title">
                                $0.00
                            </h5>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row gy-4">
                <div className="col-xl-6">
                    <div className="card custom--card mb-4 h-100">
                        <div className="card-header">
                            <h6 className="card-title">Next Installment</h6>
                        </div>
                        <div className="card-body">
                            <div className="table--responsive">
                                <table className="table table--custom table--responsive-sm">
                                    <thead>
                                        <tr>
                                            <th>Property</th>
                                            <th>Installment Amount</th>
                                            <th>Installment Date</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td data-label="Property">
                                                OpalOasis Estates
                                            </td>
                                            <td data-label="Installment Amount">
                                                $8,000.00
                                            </td>
                                            <td data-label="Installment Date">2025-03-21</td>
                                            <td data-label="Status">
                                                Due </td>
                                            <td data-label="Action">
                                                <button className="btn btn--sm btn--icon btn-soft--base" id="installmentBtn"
                                                    title="Pay Installment">
                                                    <i className="las la-coins"></i>
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td data-label="Property">
                                                OpalOasis Estates
                                            </td>
                                            <td data-label="Installment Amount">
                                                $8,000.00
                                            </td>
                                            <td data-label="Installment Date">2025-03-21</td>
                                            <td data-label="Status">
                                                Due </td>
                                            <td data-label="Action">
                                                <button className="btn btn--sm btn--icon btn-soft--base" id="installmentBtn"
                                                    title="Pay Installment">
                                                    <i className="las la-coins"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6">
                    <div className="card custom--card mb-4 h-100">
                        <div className="card-header">
                            <h6 className="card-title">Next Profit Schedule</h6>
                        </div>
                        <div className="card-body">
                            <div className="table--responsive ">
                                <table className="table table--custom table--responsive-sm">
                                    <thead>
                                        <tr>
                                            <th>Property</th>
                                            <th>Total Profit</th>
                                            <th>Next Profit Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td data-label="Property">
                                                Modern Loft
                                            </td>
                                            <td data-label="Total Profit">
                                                $8,000.00
                                            </td>
                                            <td data-label="Next Profit Date">
                                                <div>
                                                    2025-11-20<br />
                                                    <span className="small">2 months ago</span>
                                                </div>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;