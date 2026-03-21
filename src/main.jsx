import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from "react-router/dom";
import { router } from './routes/router.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'odometer/themes/odometer-theme-default.css';
import "slick-carousel/slick/slick.css";
import 'line-awesome/dist/line-awesome/css/line-awesome.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import './assets/sass/main.scss';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)

