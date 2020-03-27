import React from "react"
import renderer from "react-test-renderer"
import { render, screen } from '@testing-library/react'
import { useStaticQuery } from "gatsby"

import Header from "../src/components/layout/header"

beforeEach(() => {
    useStaticQuery.mockImplementationOnce(() => ({
      "navbarData": {
        "edges": [{
            "node": {
                "frontmatter": {
                    "menuItems": [{"label": "Home","linkURL": "/"},]
                }
            }
        }]
      }
    }))
})  

describe("Header", () => {
  it("Renders correctly", () => {
    const tree = renderer
      .create(<Header siteTitle="Default Starter" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("Checks header text setted correctly", async () => {
    render(<Header siteTitle="Default Starter" />)

    const menuItems = await screen.queryAllByRole('link')

    expect(menuItems).toHaveLength(3)
    expect(screen.getByText("Default Starter")).toBeInTheDocument()
  })
})