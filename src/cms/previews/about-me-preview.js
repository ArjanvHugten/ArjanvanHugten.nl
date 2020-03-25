import React from "react";
import PropTypes from "prop-types";
import remark from 'remark'
import remarkHTML from 'remark-html'

import "../../styles/main.scss"

const AboutMePagePreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS();
  const html = remark().use(remarkHTML).processSync(data.body).toString()

  return (
    /* eslint-disable */
    <div className="container">
        <div className="columns">
            <div className="column">
                <h1 className="title">{data.title}</h1>
                <h2 className="subtitle">{data.subtitle}</h2>
                <div className="content" dangerouslySetInnerHTML={{ __html: html }} />
                <p>
                    Want to read some of my blogs? <a>Click here!</a> Do you need something of me? <a>Contact me!</a>
                </p>
            </div>
        </div>
    </div>
  )
};

AboutMePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default AboutMePagePreview;