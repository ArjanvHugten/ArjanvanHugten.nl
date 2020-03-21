import React from "react";
import PropTypes from "prop-types";

import "../../styles/main.scss"
import "../../styles/menu.scss"

const HeaderPreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS();
  return (
    /* eslint-disable */
    <div className="container">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item primary-color">Arjan van Hugten</a>

          <a role="button" className="navbar-burger burger is-active" aria-label="menu" aria-expanded="false" data-target="navigationbar">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navigationbar" className="navbar-menu is-active">
          <div className="navbar-start">
            { data.menuItems.map( menuItem =>
              <a className="navbar-item">{menuItem.label}</a>
            )}
          </div>
        </div>
      </nav>
    </div>
  )
};

HeaderPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default HeaderPreview;