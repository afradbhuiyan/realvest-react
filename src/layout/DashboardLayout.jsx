import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import DashboardHeader from '../components/common/DashboardHeader';
import DashboardSidebar from '../components/common/DashboardSidebar';


const DashboardLayout = () => {
    const [dashboardSidebarIsOpen, setDashboardSidebarIsOpen] = useState(false);
    return (
        <div className="dashboard">
            <DashboardSidebar dashboardSidebarIsOpen={dashboardSidebarIsOpen} setDashboardSidebarIsOpen={setDashboardSidebarIsOpen} />
            <div className="dashboard-content">
                <DashboardHeader dashboardSidebarIsOpen={dashboardSidebarIsOpen} setDashboardSidebarIsOpen={setDashboardSidebarIsOpen} />
                <div className="dashboard-body">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout