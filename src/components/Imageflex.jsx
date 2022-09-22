import React from "react";

const Imageflex = ({ Illustrations, title, content, text }) => {
    return(
        <>
            <div className="row my-5 justify-content-center align-items-center pt-5 text-center text-md-start">
                <div className="col-md-5 text-center me-auto">
                    <img className="img-fluid col-10 col-md-12" src={Illustrations} alt="first illustration"/>
                </div>
                <div className="col-md-6">
                    <h4 className="fs-2 fw-bolder pt-4">{title}</h4>
                    <p className="fs-6">{content}</p>
                    <button className="d-none d-md-block btn btn-primary mt-2 rounded-pill px-3 ms-auto" type="button">{text}</button>
                    <button className="d-md-none d-grid gap-2 col-6 mx-auto btn btn-primary mt-2 rounded-pill" type="button">{text}</button>
                </div>
            </div>
        </>
    )
}

export default Imageflex;