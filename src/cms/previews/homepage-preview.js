import React from "react";
import PropTypes from "prop-types";

import Socials from "../../components/general/socials";
import PersonalCard from "../../components/general/personal-card";

import "../../styles/main.scss"
import "../../styles/index.scss"

const HomePagePreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS();
  console.log(data)

  return (
    <section className="section">
        <div className="container main-page">
            <div className="columns is-centered">
                <div className="column is-half">
                    <Socials socials={data.socials}/>
                    <h1 className="title small-title">{data.title}</h1>
                    <PersonalCard data={data} imageFluid={data.cardImage} />
                </div>
            </div>
        </div>
    </section>
  )
};

HomePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default HomePagePreview;