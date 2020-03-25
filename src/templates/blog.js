import React from "react"
import { graphql } from "gatsby"

import Breadcrumb from '../components/general/breadcrumb'
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

import "../styles/blog.scss"
import "prismjs/themes/prism-tomorrow.css"

export default ({ pageContext, data }) => {
  const { breadcrumb: { crumbs } } = pageContext
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout sectionClass={"blog-section"}>
      <SEO title={frontmatter.title} />
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