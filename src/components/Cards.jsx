import React from "react";

const Cards = ({ icon, title, subtitle, content, arrowRight }) => {
    return(
        <>
            <a href="/#" className="text-dark text-decoration-none">
                <div className="col">
                    <div className="card h-100 align-items-center text-center shadow mb-5 rounded-3">
                        <img src={icon} className="card-img-top shrunk mt-5" alt="cryptocurrency logo"/>
                        <div className="card-body">
                            <h5 className="fs-4 card-title">{title} <span className="fs-6 text-muted">{subtitle}</span></h5>
                            <p className="card-text mb-4">{content}</p>
                            <img src={arrowRight} className="arrow mt-5" alt="cryptocurrency logo"/>
                        </div>
                    </div>
                </div>
            </a>
        </>
    );
}

export default Cards;