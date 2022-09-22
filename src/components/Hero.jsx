import React from "react";
import Illustration from "../resources/Illustration.png"

const Hero = () => {
    return(
        <React.Fragment>
            <section className="container-lg pb-5">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-6 text-start">
                        <div className="d-flex p-1 mb-3 col-lg-9 col-12 bg-secondary rounded-pill">
                            <span className="rounded-pill bg-light px-2 text-dark">70% SAVE</span>
                            <span className="ps-2">For The Best Black Friday Deals</span>
                        </div>
                        <h1 className="fs-1 fw-bolder">Fastest & Secure Platform To Invest In Crypto</h1>
                        <p className="fs-6">
                            Buy and sell cyptocurrencies by trusted 10M wallets, in over 100m
                            transactions
                        </p>
                        <button className="d-none d-md-block btn btn-primary mt-2 rounded-pill px-3" type="button">Try For FREE!</button>
                        <button className="d-md-none d-grid gap-2 col-6 mx-auto btn btn-primary mt-2 rounded-pill" type="button">Try For FREE!</button>
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                        <img className="img-fluid col-10 col-md-12" src={Illustration} alt="first illustration"/>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default Hero;