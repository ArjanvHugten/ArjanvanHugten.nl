import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

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
              <div className="about-me-certifcations level">
                <div className="level-item">
                  <div>
                      <p className="heading">Azure Fundamentals (AZ-900)</p>
                      <Img fluid={data.az900CertifiedBadgeData.childImageSharp.fluid} alt="AZ-900 certification badge" imgStyle={{ objectFit: "contain" }} />
                  </div>
                </div>
                <div className="level-item">
                  <div>
                      <p className="heading">Azure Developer (AZ-204)</p>
                      <Img fluid={data.az204CertifiedBadgeData.childImageSharp.fluid} alt="AZ-204 certification badge" imgStyle={{ objectFit: "contain" }} />
                  </div>
                </div>
                <div className="level-item">
                  <div>
                      <p className="heading">Kentico 12 xperience</p>
                      <Img fluid={data.kenticoCertifiedBadgeData.childImageSharp.fluid} alt="Kentico 12 xperience certified badge" imgStyle={{ objectFit: "contain" }} />
                  </div>
                </div>
              </div>
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
  query kenticoCertifiedBadgeQueryAndAboutMePageQuery {
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
    kenticoCertifiedBadgeData: file(relativePath: { eq: "kentico-certified-developer-12.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    az900CertifiedBadgeData: file(relativePath: { eq: "azure-fundamentals-600x600.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    az204CertifiedBadgeData: file(relativePath: { eq: "azure-developer-associate-600x600.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
