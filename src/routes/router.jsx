
import { createBrowserRouter } from 'react-router';
import FrontendLayout from '../layout/FrontendLayout';
import AccountLayout from '../layout/AccountLayout';
import DashboardLayout from '../layout/DashboardLayout';
import Home from '../pages/Home';
import Properties from '../pages/Properties';
import PropertyDetails from '../pages/PropertyDetails';
import About from '../pages/About';
import Blogs from '../pages/Blogs';
import BlogDetails from '../pages/BlogDetails';
import Contact from '../pages/Contact';
import UserLogin from '../pages/User/Login';
import UserRegister from '../pages/User/Register';
import UserDashboard from '../pages/User/Dashboard';
import UserInvestHistory from '../pages/User/InvestHistory';
import UserProfitHistory from '../pages/User/ProfitHistory';
import VendorLogin from '../pages/Vendor/Login';
import VendorRegister from '../pages/Vendor/Register';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <FrontendLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: 'properties', element: <Properties /> },
            { path: 'property/:id', element: <PropertyDetails /> },
            { path: 'about', element: <About /> },
            { path: 'contact', element: <Contact /> },
            { path: 'blogs', element: <Blogs /> },
            { path: 'blog/:id', element: <BlogDetails /> }
        ]
    },
    {
        path: '/user',
        children: [
            {
                element: <AccountLayout />,
                children: [
                    { path: 'login', element: <UserLogin /> },
                    { path: 'register', element: <UserRegister /> },
                ]
            },
            {
                element: <DashboardLayout />,
                children: [
                    { path: 'dashboard', element: <UserDashboard /> },
                    { path: 'invest-history', element: <UserInvestHistory /> },
                    { path: 'profit-history', element: <UserProfitHistory /> },
                ]
            }
        ]
    },
    {
        path: '/vendor',
        element: <AccountLayout />,
        children: [
            { path: 'login', element: <VendorLogin /> },
            { path: 'register', element: <VendorRegister /> },
        ]
    },
    {
        path: '*',
        element: <h1>Not Found</h1>,
    },
], {
    basename: '/realvest-react',
});
