import React, { Component } from 'react';
import Image1 from "../../images/cup1.png";
import Image2 from "../../images/cup2.png";
import Image3 from "../../images/cup3.png";
import Image4 from "../../images/color1.png";
import Image5 from "../../images/color2.png";
import Image6 from "../../images/color3.png";

class Beer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            beerz:0,
            cupz:0,
            cups:[Image1,Image2,Image3],
            beers:[Image4,Image5,Image6],
        };

    }

    render({...props}) {
        return(
            <div>
                <img src={this.state.beers[this.props.beerz]} alt="" style={{ position: "relative",left:"15px", display:"inline", left:"0px", top:"0px", zIndex: "1"}}/>
                <img src={this.state.cups[this.props.cupz]} alt="" style={{ position: "relative", left:"-300px", zIndex: "2"}}/> 
                 
            </div>
        );
    }
}

Beer.propTypes = {

};

export default Beer;
