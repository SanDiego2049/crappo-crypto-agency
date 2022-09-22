import React from "react";
import "./Navbar.css";
import Logo from "../resources/Logo.png"


const Navbar = () => {
    return(
        <>
            <header>
                <nav className="navbar navbar-dark sticky-top navbar-expand-lg bg-lg-transparent">
                    <div className="container-xxl py-3 px-md-5">
                        <a className="navbar-brand" href="/#"><img src={Logo} alt="Logo"/></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="offcanvas offcanvas-end d-block d-lg-none text-bg-dark purple" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                            <div className="offcanvas-header">
                                <h4 className="offcanvas-title" id="offcanvasNavbarLabel">Get Started Today!</h4>
                                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                    <li className="nav-item mt-5">
                                        <a className="nav-link blue" href="/#">Products</a>
                                    </li>
                                    <li className="nav-item mt-3">
                                        <a className="nav-link blue" href="/#">Features</a>
                                    </li>
                                    <li className="nav-item mt-3">
                                        <a className="nav-link blue" href="/#">About</a>
                                    </li>
                                    <li className="nav-item mt-3">
                                        <a className="nav-link blue" href="/#">Contact</a>
                                    </li>
                                    <li className="nav-item mt-3">
                                        <a className="nav-link blue" href="/#">Login</a>
                                    </li>
                                    <li className="nav-item mt-3">
                                        <a className="nav-link blue" href="/#">Register</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className="nav-link text-light pe-4" href="/#">Products</a>
                                <a className="nav-link text-light pe-4" href="/#">Features</a>
                                <a className="nav-link text-light pe-4" href="/#">About</a>
                                <a className="nav-link text-light pe-4" href="/#">Contact</a>
                                <form>
                                    <button className="btn big border-end fw-semibold rounded-0 text-light py-0 px-3 me-2" type="button">Login</button>
                                    <button className="btn big btn-primary rounded-pill px-3 fw-semibold mx-2" type="button">Register</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Navbar;