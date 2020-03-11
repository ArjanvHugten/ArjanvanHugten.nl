import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      <div className="container">
        <h1 className="title">Hi people</h1>
        <h2 className="subtitle">
          A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
        </h2>
        <Link to="/page-2/">Go to page 2</Link>
      </div>
  </Layout>
)

export default IndexPage
