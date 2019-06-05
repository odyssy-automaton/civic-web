import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout/layout'

const IndexPage = () => (
  <Layout>
    <h1>odyssy automaton</h1>
    <p>Welcome to your new Odyssy Gatsby site.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
