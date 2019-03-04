import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"
import { Provider } from 'react-redux'
import { createStore} from 'redux'
import reducer from '../store/reducer'

import Joined from '../components/Joined/Joined'

const store = createStore(reducer);



const IndexPage = () => (
  <Provider store= {store}>
  <Layout>
    <SEO title="Beer Chooser" keywords={[`Beer`, `adult Beverage`, `react`]} />
    <h1>Beer Selector</h1>
    <p>Please make your Choice below</p>
    <p>Now go build something great.</p>
    
    <Joined/>
  </Layout>
  </Provider>
)

export default IndexPage
