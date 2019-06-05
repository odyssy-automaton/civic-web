import React from 'react'
import { Link } from 'gatsby'

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
      <h1 style={{ margin: 0 }}>
        <Link className="Header__Brand" to="/">
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
