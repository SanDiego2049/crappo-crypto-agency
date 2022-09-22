import React from "react";
import Icon from "../resources/Icon (5).png";
import Icon1 from "../resources/Icon (4).png";
import Icon2 from "../resources/Icon (3).png";

const Numbers = () => {
    return(
        <>
            <div className="row justify-content-center align-items-center">
                <div className="col-md-4 col-9 justify-content-between d-flex align-items-center text-end">
                    <img className="img-fluid sized" src={Icon} alt="numbers showing values"/>
                    <div className="row">
                        <h4 className="fw-bolder">$31B</h4>
                        <small><p className="lh-1">Digital Cyptocurrencies Exchanged</p></small>
                    </div>
                </div>
                <div className="col-md-4 col-9 justify-content-between d-flex align-items-center text-end">
                    <img className="img-fluid sized" src={Icon1} alt="numbers showing values"/>
                    <div className="row">
                        <h4 className="fw-bolder">169+</h4>
                        <small><p className="lh-1">Countries Around The World</p></small>
                    </div>
                </div>
                <div className="col-md-4 col-9 justify-content-between d-flex align-items-center text-end">
                    <img className="img-fluid sized" src={Icon2} alt="numbers showing values"/>
                    <div className="row">
                        <h4 className="fw-bolder">27M</h4>
                        <small><p className="lh-1">Trusted Wallet Investors</p></small>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Numbers;