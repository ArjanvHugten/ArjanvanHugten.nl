import React from "react"
import renderer from "react-test-renderer"
import { render, screen } from '@testing-library/react'
import { useStaticQuery } from "gatsby"

import Footer from "../src/components/layout/footer"

beforeEach(() => {
    useStaticQuery.mockImplementationOnce(() => ({
      "footerData": {
          "edges": [{
              "node": {
                  "frontmatter": {
                      "text": "This is the footer" 
                  }
              }
          }]
      }
    }))
})  

describe("Footer", () => {
  it("Renders correctly", () => {
    const testRenderer  = renderer.create(<Footer />)

    expect(testRenderer.toJSON()).toMatchSnapshot()
  })

  it("Checks footer text setted correctly", () => {
    render(<Footer />)
    expect(screen.getByText(/Copyright/i)).toHaveTextContent(`Copyright © ${new Date().getFullYear()} -`)
    expect(screen.getByText("This is the footer")).toBeInTheDocument()
  })
})