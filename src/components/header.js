import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div className="container">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">{siteTitle}</Link>

          <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navigationbar">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navigationbar" className="navbar-menu">
          <div className="navbar-start">
            <Link to="/" className="navbar-item">Home</Link>
            <Link to="/page-2/" className="navbar-item">Blog</Link>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <Link to="/contact-me/" className="button is-primary"><strong>Contact me</strong></Link>
              <Link to="/page-2/" className="button is-light">Andere link</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
