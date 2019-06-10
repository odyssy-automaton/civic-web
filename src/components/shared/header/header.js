import React from 'react'
import { Link } from 'gatsby'
import Brand from '../../../images/civic-icon.png'

import './header.scss'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="Header__Container">
      <Link className="Header__Container--Brand" to="/">
        <img src={Brand} alt="Civic Logo" /><span className="BrandName">Civic Software Foundation</span>
      </Link>
    </div>
  </div>
)

export default Header
