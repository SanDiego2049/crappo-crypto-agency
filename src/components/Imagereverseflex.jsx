import React from "react";

const Imagereverseflex = ({ Illustrations, title, content, text }) => {
    return(
        <>
            <div className="row my-5 justify-content-center align-items-center text-center text-md-start top">
                <div className="col-md-6">
                    <h4 className="fs-2 fw-bolder pt-4">{title}</h4>
                    <p className="fs-6">{content}</p>
                    <button className="d-none d-md-block btn btn-primary mt-2 rounded-pill px-3 me-auto" type="button">{text}</button>
                    <button className="d-md-none d-grid gap-2 col-6 mx-auto btn btn-primary mt-2 rounded-pill" type="button">{text}</button>
                </div>
                <div className="col-md-5 text-center ms-auto pt-4">
                    <img className="img-fluid col-10 col-md-12" src={Illustrations} alt="first illustration"/>
                </div>
            </div>
        </>
    )
}

export default Imagereverseflex;