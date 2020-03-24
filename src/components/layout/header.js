import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"

import SearchInput from '../search/search-navbar-form'
import '../../utils/fontawesome'
import "../../styles/menu.scss"

const Header = ({ siteTitle, hideSearchBar }) => {
  const data = useStaticQuery(graphql`
      query NavbarContentQuery {
        navbarData: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "navbar" } } }) {
          edges {
            node {
              frontmatter {
                menuItems {
                  label
                  linkURL
                }         
              }
            }
          }
        } 
      }
  `)

  const { frontmatter: navbar } = data.navbarData.edges[0].node
  const [menuActive, setMenuState] = useState(false);

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
              { hideSearchBar === false && 
                  <div className="navbar-item is-hidden-desktop">
                    <SearchInput />
                  </div>
              }
              { navbar.menuItems.map( menuItem =>
                <Link key={menuItem.label} to={menuItem.linkURL} className="navbar-item" activeClassName="is-active">{menuItem.label}</Link>
              )}
            </div>

            <div className="navbar-end">
              { hideSearchBar === false && 
                  <div className="navbar-item is-hidden-touch">
                    <SearchInput />
                  </div>
              }
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
