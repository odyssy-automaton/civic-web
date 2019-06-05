import React from 'react'
import { Link } from 'gatsby'
import Brand from '../../../images/civic-logo_standard-wide.png'

import './header.scss'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="Header__Container"
      style={{
        margin: '0 auto',
        maxWidth: 1200,
        padding: '0px',
        height: '100px'
      }}
    >
      <Link className="Header__Container--Brand" to="/">
        <img src={Brand} alt="Civic Logo" />
      </Link>
    </div>
  </div>
)

export default Header
