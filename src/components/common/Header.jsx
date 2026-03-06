import { useState, useEffect, useRef } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink, Link } from 'react-router-dom'
import Logo from '../../assets/images/logo/logo.png'
import LogoDark from '../../assets/images/logo/logo-dark.png'
import AuthSwitcher from '../AuthSwitcher'

const Header = () => {
    const headerRef = useRef();
    const [show, setShow] = useState(false);
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const header = headerRef.current;
        const headerHeight = header?.offsetHeight || 0;
        document.documentElement.style.setProperty(
            "--header-height",
            `${headerHeight}px`
        );

        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        }
        
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <header className={`header ${isFixed ? 'fixed-header' : ''}`} id="header" ref={headerRef}>
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <Link className="navbar-brand order-1" to="/">
                        <img src={Logo} alt="" />
                    </Link>

                    <Offcanvas className="offcanvas navbar--offcanvas order-4 order-lg-2" placement="end" responsive="lg" tabIndex="-1"
                        id="navbar-offcanvas" show={show} onHide={handleClose}>
                        <Offcanvas.Header closeButton>
                            <a className="navbar-brand logo" href="index.html">
                                <img src={LogoDark} alt="" />
                            </a>
                            {/* <button type="button" className="btn btn--icon btn--close" data-bs-dismiss="offcanvas"></button> */}
                        </Offcanvas.Header>
                        <Offcanvas.Body className="offcanvas-body align-items-center">
                            <ul className="navbar-nav nav-menu mx-auto align-items-lg-center">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to='/'>
                                        Home
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to='/properties'>
                                        Properties
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to='/about'>
                                        About Us
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to='/blogs'>
                                        Blogs
                                    </NavLink>
                                </li>
                                <li className="nav-item ">
                                    <NavLink className="nav-link" to='/contact'>
                                        Contact
                                    </NavLink>
                                </li>
                            </ul>
                        </Offcanvas.Body>
                    </Offcanvas>
                    <button className="navbar-toggler order-3" type="button" onClick={handleShow}>
                        <i className="las la-bars"></i>
                    </button>
                    <div className="navbar-action order-2 order-lg-3 ms-auto ms-lg-0">
                        <AuthSwitcher />
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header


