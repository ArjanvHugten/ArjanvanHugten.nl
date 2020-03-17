import React from "react"

import Layout from "../../components/layout/layout"
import SEO from "../../components/layout/seo"
import ContactForm from "../../components/general/contact-form"

export default () => (
  <Layout>
    <SEO title="Contact me" />
      <div className="container">
        <h1 className="title">Contact me</h1>
        <h2 className="subtitle">
          You can fill in the contact form below to get in touch.
        </h2>
        <div className="columns">
            <div className="column is-two-thirds-desktop">
              <ContactForm />
            </div>
          </div>
      </div>
  </Layout>
)
