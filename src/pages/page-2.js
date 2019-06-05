import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout/layout'

const SecondPage = () => (
  <Layout>
    <h1>Page #2</h1>
    <p>Welcome.</p>
    <Link to="/">Go back home</Link>
  </Layout>
)

export default SecondPage
