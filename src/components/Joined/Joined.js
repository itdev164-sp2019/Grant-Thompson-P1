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

        this.state = {};

    }

    render() {
        return(
            <div>
                <DropdownExampleSimple whichSelector="BeerType" options= {beerType} />
                <br/>
                <DropdownExampleSimple whichSelector="GlassType" options= {glassType}/>
                <br/>
                <br/>
                <Beer beerz="0" cupz="0"/>

            </div>
        );
    }
}

Joined.propTypes = {

};

export default Joined;




