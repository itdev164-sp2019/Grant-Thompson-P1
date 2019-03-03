import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Dropdown from '@bit/semantic-org.semantic-ui-react.dropdown'
import Menu from '@bit/semantic-org.semantic-ui-react.menu'





const style = <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css'/>


class DropdownExampleSimple extends Component {

  constructor(props) {
    super(props);
    this.state = {
      options:[
        { key: 1, text: 'Dark', value: 1 },
        { key: 2, text: 'Amber', value: 2 },
        { key: 3, text: 'Light', value: 3 }],
      pic1: 0,
      pic2: 0,
    }

    
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.options !== prevProps.options) {
      this.setState(this.options= this.props.options);
    }
    console.log(this.state.options);
  }


 


handleChange = (e, { value }) => {

  this.mymethod1(value);
  
};

mymethod1 = (up1 = 0) =>{

  if(up1 > 0)
 alert(up1)
};

render(options, ...props) {

    return (
  <Menu compact>
    {style}<Dropdown clearable options = {this.props.options} selection onChange={this.handleChange} />
  </Menu>
    );
    
  }

   
}

DropdownExampleSimple.protoTypes = {
  text: PropTypes.string,
  options: PropTypes.array
}


export default DropdownExampleSimple;