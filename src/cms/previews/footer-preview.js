import React from "react";
import PropTypes from "prop-types";

import "../../styles/main.scss"

const FooterPreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS();
  return (
    <footer>
        <div className="container has-text-centered">
            <hr/>
            <p>
                Copyright © {new Date().getFullYear()} - <span dangerouslySetInnerHTML={{ __html: data.text }} />
            </p>
        </div>
    </footer>
  )
};

FooterPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default FooterPreview;