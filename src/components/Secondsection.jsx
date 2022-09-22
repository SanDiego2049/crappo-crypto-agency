import React, { Component } from "react";
import Cards from "./Cards";
import "./Secondsection.css";
import Icon from "../resources/Icon (2).png";
import Icon1 from "../resources/Icon.png";
import Icon2 from "../resources/Icon (1).png";
import Arrow from "../resources/Arrow Right.png";
import { Cardprops } from "./Cardprops";

class Secondsection extends Component {
    constructor() {
        super();
        this.state = {
            isActive: true
        }
    }
    
    handleClick = (prevState) => {
        this.setState(prevState = { prevState: false });
    } 
    
    render() {
        return(
            <>
                <section className="container-fluid bg-light text-dark down pb-5">
                    <h4 className="fs-2 fw-bolder text-center pb-4 col-md-6 mx-auto">Trade securely and market the high growth cryptocurrencies.</h4>
                    <div className="mx-auto container row row-cols-1 row-cols-md-3 g-4">
                        <Cards icon={Icon} title={Cardprops[0].title} subtitle={Cardprops[0].subtitle} content={Cardprops[0].content} arrowRight={Arrow} style={{backgroundColor: this.state.isActive ? "purple" : "white"}} onClick={this.handleClick} />

                        <Cards icon={Icon1} title={Cardprops[1].title} subtitle={Cardprops[1].subtitle} content={Cardprops[1].content} arrowRight={Arrow} style={{backgroundColor: this.state.isActive ? "#0d0c2b" : "#ffffff"}} onClick={this.handleClick} />
                        
                        <Cards icon={Icon2} title={Cardprops[2].title} subtitle={Cardprops[2].subtitle} content={Cardprops[2].content} arrowRight={Arrow} style={{backgroundColor: this.state.isActive ? "#0d0c2b" : "#ffffff"}} onClick={this.handleClick} />
                    </div> 
                </section>
            </>
        );
    }

}

export default Secondsection;