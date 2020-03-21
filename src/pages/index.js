import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import PersonalCard from "../components/general/personal-card"
import Socials from "../components/general/socials"
import "../styles/index.scss"

export default ({ data }) => {
  const { frontmatter: home } = data.homePageData.edges[0].node

  return (
    <Layout>
      <SEO title="Home" />
        <div className="container main-page">
          <div className="columns is-centered">
            <div className="column is-two-thirds-tablet is-half-desktop is-one-third-widescreen">
              <Socials socials={home.socials}/>
              <h1 className="title small-title">{home.title}</h1>
              <PersonalCard data={home} />
            </div>
          </div>
        </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query HomePageQuery {
    homePageData: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "homepage" } } }) {
      edges {
        node {
          frontmatter {
            title
            cardImage {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            name
            function
            description
            birthdate
            techstack {
              label
            }
            socials {
              label
              icon
              linkURL
            }
          }
        }
      }
    }
  }
`;
