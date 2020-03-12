import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import BlogListItem from "../components/blog-list-item"
import SEO from "../components/seo"

export default ({ data }) => {
  const edges = data.allMarkdownRemark.edges
  const posts = edges.map(edge => <BlogListItem key={edge.node.id} blog={edge.node} />)

  return (
    <Layout>
      <SEO title="Blogs" />
        <div className="container">
          <h1 className="title">Blogs</h1>
          <h2 className="subtitle">
            Here you can find all my blogs.
          </h2>
          <div>{posts}</div>
        </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`
