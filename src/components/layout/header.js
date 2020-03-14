import React, { useState } from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from "prop-types"

import '../../utils/fontawesome'

const Header = ({ siteTitle }) => {
  const [ menuActive, setMenuState ] = useState(false);

  return (
    <header>
      <div className="container">
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item primary-color">{siteTitle}</Link>

            <a role="button" href="#menu" className={`navbar-burger burger ${menuActive ? "is-active" : "" }`} onClick={() => setMenuState(!menuActive)} aria-label="menu" aria-expanded="false" data-target="navigationbar">
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
                <div className="field has-addons" >
                  <div className="control has-icons-left">
                    <input className="input" type="text" placeholder="Search term" />
                    <span className="icon is-small is-left">
                      <FontAwesomeIcon icon="search" />
                    </span>
                  </div>
                  <div className="control">
                    <button className="button">Search</button>
                  </div>
                </div>
              </div>
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
