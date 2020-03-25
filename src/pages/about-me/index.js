import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../../components/layout/layout"
import SEO from "../../components/layout/seo"
import Repositories from "../../components/general/my-repositories"

export default ({ data }) => {
  const { frontmatter: aboutme } = data.aboutMePageData.edges[0].node
  const { html: content } = data.aboutMePageData.edges[0].node

  return (
    <Layout>
      <SEO title="About me" />
        <div className="container">
          <div className="columns is-vcentered is-desktop">
            <div className="column is-half-desktop">
              <h1 className="title">{aboutme.title}</h1>
              <h2 className="subtitle">{aboutme.subtitle}</h2>
              <div className="content" dangerouslySetInnerHTML={{ __html: content }} />
              <p>
                Want to read some of my blogs? <Link to="/blogs/">Click here!</Link> Do you need something of me? <Link to="/contact-me/">Contact me!</Link>
              </p>
            </div>
            <div className="column is-half-desktop">
              <div className="columns is-centered">
                <div className="column is-two-thirds-desktop">
                  <Repositories />
                </div>
              </div>
            </div>
          </div>
        </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query aboutMePageQuery {
    aboutMePageData: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "aboutme" } } }) {
      edges {
        node {
          html
          frontmatter {
            title
            subtitle
          }
        }
      }
    }
  }
`;
