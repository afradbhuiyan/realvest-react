import DropdownProfile from "../DropdownProfile";

const DashboardHeader = ({ dashboardSidebarIsOpen, setDashboardSidebarIsOpen }) => {
    return (
        <>
            <div className="dashboard-header">
                <div className="dashboard-header__left">
                    <button
                        className="btn btn--icon btn--xsm btn--dark d-lg-none"
                        type="button"
                        onClick={() => setDashboardSidebarIsOpen(true)}
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                    <h5 className="dashboard-title">Dashboard</h5>
                </div>
                <div className="dashboard-header__right">
                    <DropdownProfile />
                </div>
            </div>
        </>
    )
}

export default DashboardHeader;