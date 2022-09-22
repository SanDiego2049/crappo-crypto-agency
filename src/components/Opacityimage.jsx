import React from "react";

const Opacityimage = ({Background}) => {
    return(
        <>
            <div className="row justify-content-end align-items-center">
                <img className="small" src={Background} alt="numbers showing values"/>
            </div>
        </>
    )
}

export default Opacityimage;