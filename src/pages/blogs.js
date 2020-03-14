import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout/layout"
import BlogListItem from "../components/blog/blog-list-item"
import SEO from "../components/layout/seo"

export default ({ data }) => {
  const edges = data.allMarkdownRemark.edges
  const posts = edges.map(edge => <BlogListItem key={edge.node.id} blog={edge.node} />)

  return (
    <Layout>
      <SEO title="Blogs" />
        <div className="container">
          <div className="column is-three-fifths">
            <h1 className="title">Blogs</h1>
            {posts}
          </div>
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
            intro
          }
        }
      }
    }
  }
`
