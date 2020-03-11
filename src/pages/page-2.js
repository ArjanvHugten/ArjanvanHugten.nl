import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
      <div className="container">
        <h1 className="title">Hi from the second page</h1>
        <h2 className="subtitle">
          A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
        </h2>
        <Link to="/">Go back to the homepage</Link>
      </div>
  </Layout>
)

export default SecondPage
