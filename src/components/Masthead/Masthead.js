import React from 'react'
import PropTypes from 'prop-types'
import {Box} from 'rebass'
import styled from 'styled-components'
import { Link } from 'rebass'

const Outer = styled(Box)`
height: ${props => props.height};
width: 100%;
background-color: #ffbf00;
margin-bottom: 1.0rem;
padding-top: 1.0rem;
padding-left: 1.0rem;
height:50px
`

const StyledLink = styled(Link)`
color: white;
text-decoration: none;
font-size: 30px;
`

export const Masthead = ({ height, siteTitle}) => {
    return (
        <Outer height={height}>
            <StyledLink href="/">{siteTitle}</StyledLink>
        </Outer>
    )
}

Masthead.protoTypes = {
    height: PropTypes.string.isRequired,
    siteTitle: PropTypes.string
}