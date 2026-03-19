
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
import UserLogin from '../pages/UserLogin';
import UserRegister from '../pages/UserRegister';
import VendorLogin from '../pages/VendorLogin';
import VendorRegister from '../pages/VendorRegister';

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
                    { path: 'dashboard', element: <h1>Dashboard</h1> }
                ]
            },
            {
                element: <DashboardLayout />,
                children: [
                    { path: 'dashboard', element: <h1>Dashboard</h1> }
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
