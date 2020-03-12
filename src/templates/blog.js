import React from "react"
import { graphql } from "gatsby"

import Breadcrumb from '../components/breadcrumb'
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ pageContext, data }) => {
  const { breadcrumb: { crumbs } } = pageContext
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <SEO title="Blog title" />
        <div className="container">
          <Breadcrumb crumbs={crumbs} />
          <h1 className="title">{frontmatter.title}</h1>
          <h2 className="subtitle">{frontmatter.date}</h2>
          
          <div className="content" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`