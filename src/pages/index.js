import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default () => (
  <Layout>
    <SEO title="Home" />
      <div className="container">
        <h1 className="title">Hi people</h1>
        <h2 className="subtitle">
          A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
        </h2>
        <Link to="/blogs/">Go to the blog</Link>
      </div>
  </Layout>
)
