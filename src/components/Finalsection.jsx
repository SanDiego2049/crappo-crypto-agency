import React from "react";
import Logo from "../resources/Logo.png"
import Visa from "../resources/Visa.png"
import Mastercard from "../resources/Mastercard.png"
import Bitcoin from "../resources/Bitcoin.png"
import Facebook from "../resources/facebook-f 1.png"
import Twitter from "../resources/twitter 1.png"
import Linkedin from "../resources/linkedin 1.png"
import Youtube from "../resources/youtube 1.png"
import Instagram from "../resources/instagram 1.png"

const Finalsection = () => {
    return(
        <>
            <footer className="container-lg pt-5">
                <div className="row mx-auto align-items-start">
                    <div class="text-center text-lg-start col-lg-2 pb-5">
                        <a href="/#"><img src={Logo} alt="Logo"/></a>
                    </div>
                    <div class="text-center text-lg-start col-lg-2">
                        <p className="fs-5 fw-semibold m-0 pb-4">Quick Link</p>
                        <p><a href="/#" class="text-decoration-none text-primary">Home</a></p>
                        <p><a href="/#" class="text-decoration-none text-primary">Product</a></p>
                        <p><a href="/#" class="text-decoration-none text-primary">About</a></p>
                        <p><a href="/#" class="text-decoration-none text-primary">Features</a></p>
                        <p><a href="/#" class="text-decoration-none text-primary">Contact</a></p>
                    </div>
                    <div class="text-center text-lg-start col-lg-3 pb-2">
                        <p className="fs-5 fw-semibold m-0 pb-4">Resources</p>
                        <p><a href="/#" class="text-decoration-none text-primary">Download Whitepaper</a></p>
                        <p><a href="/#" class="text-decoration-none text-primary">Smart Token</a></p>
                        <p><a href="/#" class="text-decoration-none text-primary">Blockchain Explorer</a></p>
                        <p><a href="/#" class="text-decoration-none text-primary">Crypto API</a></p>
                        <p><a href="/#" class="text-decoration-none text-primary">Career</a></p>
                    </div>
                    <div class="text-center text-lg-end col-lg-5">
                        <h4 className="fs-4 fw-semibold pb-4 text-md-nowrap">We accept the following payment systems</h4>
                        <div className="row justify-content-center">
                            <a className="col-md-4 pb-2" href="/#"><img src={Visa} alt="Logo"/></a>
                            <a className="col-md-4 pb-2" href="/#"><img src={Mastercard} alt="Logo"/></a>
                            <a className="col-md-4" href="/#"><img src={Bitcoin} alt="Logo"/></a>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center mt-4 mb-3">
                    <div className="col-md-6">
                        <p class="text-md-start text-center pt-4">2022 &copy; Crappo. All Rights Reserved.</p>
                    </div>
                    <div className="col-md-6">
                        <div className="row justify-content-md-end justify-content-center">
                            <a className="col-1 hovered" href="/#"><img src={Facebook} alt="Logo"/></a>
                            <a className="col-1" href="/#"><img src={Instagram} alt="Logo"/></a>
                            <a className="col-1" href="/#"><img src={Youtube} alt="Logo"/></a>
                            <a className="col-1" href="/#"><img src={Twitter} alt="Logo"/></a>
                            <a className="col-1" href="/#"><img src={Linkedin} alt="Logo"/></a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Finalsection;