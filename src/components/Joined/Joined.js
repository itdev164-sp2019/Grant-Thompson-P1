import React, { Component } from 'react';
import DropdownExampleSimple from '../dropDowns/DropdownExampleSimple';
import Beer from '../theBeers/Beer';

const beerType = [{ key: 1, text: 'Light', value: 1 },
{ key: 2, text: 'Medium', value: 2 },
{ key: 3, text: 'Dark', value: 3 }]

const glassType = [{ key: 1, text: 'Pint', value: 1 },
{ key: 2, text: 'Mug', value: 2 },
{ key: 3, text: 'Growler', value: 3 }]


class Joined extends Component {
    constructor(props) {
        super(props);

        

        this.state = {
            beerImage:0,
            cupImage:1,
        };

    }

    beerzImage(pos){

        this.setState({
            beerImage:pos
        });

    };

    cupzImage(pos){
        this.setState({
            cupImage:pos
        });
    };



    render() {
        return(
            <div>
                <DropdownExampleSimple whichSelector="BeerType" options= {beerType} handleClick={(arg1=0) => this.beerzImage(arg1)}/>
                <br/>
                <DropdownExampleSimple whichSelector="GlassType" options= {glassType} handleClick={(arg1=0) => this.cupzImage(arg1)}/>
                <br/>
                <br/>
                <Beer beerz={this.state.beerImage} cupz={this.state.cupImage}/>

            </div>
        );
    }
}

Joined.propTypes = {

};

export default Joined;




