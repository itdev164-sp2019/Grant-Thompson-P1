import React from 'react'
import PropTypes from 'prop-types'
import Dropdown from '@bit/semantic-org.semantic-ui-react.dropdown'
import Menu from '@bit/semantic-org.semantic-ui-react.menu'

const style = <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css'/>

const options = [
  { key: 1, text: 'Dark', value: 1 },
  { key: 2, text: 'Amber', value: 2 },
  { key: 3, text: 'Light', value: 3 },
]

export const DropdownExampleSimple = ({text, options}) => {
    return (
  <Menu compact>
    {style}<Dropdown text={text} options={options} simple item />
  </Menu>
    )
    }

    DropdownExampleSimple.protoTypes = {
      text: PropTypes.string,
      options: PropTypes.array
  }