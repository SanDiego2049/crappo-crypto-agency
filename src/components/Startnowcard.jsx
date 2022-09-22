import React from "react";

const Startnowcard =() => {
    return(
        <>
            <div className="card text-light bg-primary rounded-3">
                <div className="card-body d-md-flex justify-content-between align-items-center pt-4">
                    <div className="col-md-5 col-12 text-center text-md-start">
                        <h4 className="fs-3 pb-2 fw-bolder">Start mining now</h4>
                        <p>Join Crappo now to get the latest crypto news and start mining</p>
                    </div>
                    <div className="d-md-flex col-md-6 col-12">
                        <input className="form-control me-2 border-0 border-bottom border-light change rounded-0 bg-primary" type="email" placeholder="Enter email address"/>
                        <button className="btn btn-light rounded-pill px-4 fw-semibold d-none d-md-block" type="button">Subscribe</button>
                        <button className="btn btn-light rounded-pill px-4 fw-semibold col-12 d-md-none d-block mt-2 mx-auto" type="button">Subscribe</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Startnowcard;