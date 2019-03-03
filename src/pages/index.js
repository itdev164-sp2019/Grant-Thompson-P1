import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"
import {DropdownExampleSimple} from "../components/dropDowns"

const beerType = [{ key: 1, text: 'Light', value: 1 },
{ key: 2, text: 'Amber', value: 2 },
{ key: 3, text: 'Light', value: 3 }]

const glassType = [{ key: 1, text: 'Mug', value: 1 },
{ key: 2, text: 'Stein', value: 2 },
{ key: 3, text: 'Growler', value: 3 }]

const IndexPage = () => (
  <Layout>
    <SEO title="Beer Chooser" keywords={[`Beer`, `adult Beverage`, `react`]} />
    <h1>Beer Selector</h1>
    <p>Please make your Choice below</p>
    <p>Now go build something great.</p>
    
    <DropdownExampleSimple text="Beer Type" options= {beerType} />
    <br/>
    <DropdownExampleSimple text="Glass Type" options= {glassType}/>
  </Layout>
)

export default IndexPage
