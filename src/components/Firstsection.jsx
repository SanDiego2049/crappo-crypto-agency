import React from "react";
import "./Firstsection.css" 
import Illustrations from "../resources/Illustrations.png"
import Background from "../resources/D.png"
import Background1 from "../resources/u.png"
import Numbers from "./Numbers";
import Imageflex from "./Imageflex";
import { Imageflexprops } from "./Imageflexprops";
import Calculatecard from "./Calculatecard";
import Opacityimage from "./Opacityimage";

const Firstsection = () => {
    return(
        <>
            <section className="container-lg mt-5">
                <Numbers />
                <Opacityimage Background={Background} />
                <Imageflex Illustrations={Illustrations} title={Imageflexprops[0].title} content={Imageflexprops[0].content} text={Imageflexprops[0].text} />
                <Opacityimage Background={Background1} />
                <div className="row justify-content-center align-items-center mt-3 shifted">
                    <div className="text-center">
                        <h4 className="fs-2 fw-bolder text-capitalize">check how much you can earn with us</h4>
                        <p className="lh-1 mb-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, accusamus.
                        </p>
                    </div>
                    <Calculatecard />
                </div>
            </section>
        </>
    );
}

export default Firstsection;