import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import PersonalCard from "../components/general/personal-card"
import Socials from "../components/general/socials"

export default ({ data }) => {
  const image = data.file.childImageSharp.fluid

  return (
    <Layout>
      <SEO title="Home" />
        <div className="container">
          <Socials />
          <div className="columns">
            <div className="column is-4 is-offset-4">
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
