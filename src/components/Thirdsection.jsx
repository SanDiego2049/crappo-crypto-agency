import React from "react";
import Imagereverseflex from "./Imagereverseflex";
import Imageflex from "./Imageflex";
import { Imageflexprops } from "./Imageflexprops";
import Illustration from "../resources/Chart.png"
import Illustration1 from "../resources/Statistic.png"
import Illustration2 from "../resources/Table.png"
import Background from "../resources/o (1).png"
import Background1 from "../resources/o.png"
import Background2 from "../resources/Vector.png"
import Background3 from "../resources/Vector (1).png"
import "./Thirdsection.css"
import Startnowcard from "./Startnowcard";

const Thirdsection = () => {
    return(
        <>
            <section className="container-fluid text-light py-5 colored justify-content-center cool-gradient">
                <div className="row justify-content-start align-items-center">
                    <img className="medium" src={Background} alt="opaque figure"/>
                </div>
                <h4 className="fs-2 fw-bolder text-center col-md-6 mx-auto">Market sentiments, portfolio and run the infrastructure of your choice</h4>
                <div className="container-lg">
                    <Imagereverseflex Illustrations={Illustration} title={Imageflexprops[1].title} content={Imageflexprops[1].content} text={Imageflexprops[1].text} />
                </div>
                <div className="container-lg mt-5">
                    <Imageflex Illustrations={Illustration1} title={Imageflexprops[2].title} content={Imageflexprops[2].content} text={Imageflexprops[2].text} />
                </div>
                <div className="container-lg mt-5 top">
                    <Imagereverseflex Illustrations={Illustration2} title={Imageflexprops[3].title} content={Imageflexprops[3].content} text={Imageflexprops[3].text} />
                </div>
                <div className="row justify-content-end align-items-center">
                    <img className="normal" src={Background1} alt="opaque figure"/>
                </div>
                <div className="row justify-content-start align-items-center">
                    <img className="tiny" src={Background2} alt="opaque figure"/>
                </div>
                <div className="container-lg row mx-auto mt-5 pt-5 ">
                    <Startnowcard />
                </div>
                <div className="row justify-content-end align-items-center">
                    <img className="secondtiny" src={Background3} alt="opaque figure"/>
                </div>
            </section>
        </>
    )
}

export default Thirdsection;