import React, { useState } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Header = ({ siteTitle }) => {
  const [ menuActive, setMenuState ] = useState(false);

  return (
    <header>
      <div className="container">
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item primary-color">{siteTitle}</Link>

            <a role="button" className={`navbar-burger burger ${menuActive ? "is-active" : "" }`} onClick={() => setMenuState(!menuActive)} aria-label="menu" aria-expanded="false" data-target="navigationbar">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navigationbar" className={`navbar-menu ${menuActive ? "is-active" : "" }`}>
            <div className="navbar-start">
              <Link to="/" className="navbar-item">Home</Link>
              <Link to="/blogs/" className="navbar-item">Blogs</Link>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <Link to="/contact-me/" className="button is-primary"><strong>Contact me</strong></Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
