import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../gatsby-components/seo"

import Joined from '../components/Joined/Joined'
import { IconButton, Section, LinkButton } from '../components/Element'
import { Search } from 'styled-icons/feather'





const IndexPage = () => (
  

  <Layout>
    <SEO title="Beer Chooser" keywords={[`Beer`, `adult Beverage`, `react`]} />
    <h1>Beer Selector</h1>
    <p>Please make your selections below.</p>
    <p>Now go build something great.</p>
    
    <Joined/>
    <br/>
    <br/>
    <Section flex justifyContent="space-evenly" m={2}>
  <LinkButton variant="primary">My Custom Button!</LinkButton>
  <IconButton icon={<Search />} />
  </Section>
  </Layout>

  

  
)

export default IndexPage
