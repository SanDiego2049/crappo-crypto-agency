import React from "react";

const Calculatecard = () => {
    return(
        <>
            <div className="card w-75 text-dark">
                <div className="card-body row mt-4">
                    <input className="d-none d-md-block form-control w-50 me-4 ms-2 border-0 border-bottom border-dark rounded-0 fs-5" type="text" placeholder="Enter your hash rate" aria-label="default input example"/>
                    <select className="d-none d-md-block form-select w-25 my-2 my-md-0 me-4 border-bottom border-0 rounded-0 border-dark" aria-label="Default select example">
                        <option defaultValue>TH/s</option>
                        <option value="1">H/s</option>
                        <option value="2">KH/s</option>
                        <option value="3">MH/s</option>
                        <option value="4">GH/s</option>
                    </select>
                    <input className="d-md-none d-block form-control border-0 border-bottom border-dark rounded-0 fs-5" type="text" placeholder="Enter your hash rate" aria-label="default input example"/>
                    <select className="d-md-none d-block form-select my-2 my-md-0 border-bottom border-0 rounded-0 border-dark" aria-label="Default select example">
                        <option defaultValue>TH/s</option>
                        <option value="1">H/s</option>
                        <option value="2">KH/s</option>
                        <option value="3">MH/s</option>
                        <option value="4">GH/s</option>
                    </select>
                    <a href="/#" className="btn btn-primary col-lg-2 rounded-pill mt-3">Calculate</a>
                    <div className="row mt-3">
                        <p className="text-capitalize text-primary text-center text-md-start pt-4">
                            estimated 24 hour revenue:
                        </p>
                        <h4 className="text-capitalize text-center text-md-start">
                            <span className="text-primary">0.05513059 ETH</span> ($1275)
                        </h4>
                        <p className="text-muted mt-2 text-center text-md-start">
                            Revenue will change based on mining difficulty and Ethereum price.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Calculatecard;