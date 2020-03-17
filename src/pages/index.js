import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import PersonalCard from "../components/general/personal-card"
import Socials from "../components/general/socials"
import "../styles/index.scss"

export default ({ data }) => {
  const image = data.file.childImageSharp.fluid

  return (
    <Layout>
      <SEO title="Home" />
        <div className="container main-page">
          <div className="columns is-centered">
            <div className="column is-two-thirds-tablet is-half-desktop is-one-third-widescreen">
              <Socials />
              <h1 className="title small-title">Arjan van Hugten software development blogs</h1>
              <PersonalCard imageFluid={image}/>
            </div>
          </div>
        </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    file(relativePath: { eq: "profile-picture.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
