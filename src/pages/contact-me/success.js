import React from "react"

import Layout from "../../components/layout/layout"
import SEO from "../../components/layout/seo"

export default () => (
  <Layout>
    <SEO title="Form submit success" />
      <div className="container">
        <h1 className="title">Success</h1>
        <p>Thanks! Your form submission has been sent.</p>
      </div>
  </Layout>
)
