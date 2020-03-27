import React from "react"
import renderer from "react-test-renderer"
import { useStaticQuery } from "gatsby"

import Homepage from "../src/pages/index"

beforeEach(() => {
    useStaticQuery.mockImplementation(() => ({
      "site": {
        "siteMetadata": {
          "title": "Test title"
        }
      },
      "footerData": {
        "edges": [{
            "node": {
                "frontmatter": {
                    "text": "This is the footer" 
                }
            }
        }]
      },
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


describe("Homepage", () => {
  it("renders correctly", () => {
    const data = {
      "homePageData": {
        "edges": [{
          "node": {
            "frontmatter": {
              "title": "This is the title",
              "name": "My name",
              "function": "My function",
              "description": "Test description",
              "cardImage": {
                "childImageSharp": {
                  "fluid": {
                    "base64": "data:image/webp;base64,UklGRq4AAABXRUJQVlA4IKIAAABwBACdASoUAA0APtFUo0uoJKMhsAgBABoJQBOmUGUkz/gPOTZOwAwWlw60aADMg9k+QTRZO+w3OzFbtmhn1vRFhN6e+wvLvXXVpzlkF8FlqpAxRjOQppZXOmOIRIy5TN3DqUa1LBOZqnBCL/Sbs4j7e+a9SZojm/MhOYSUEqke/yFFU3NNcQXghLbs6gTuiPAqksjzVlBi5g+2jgLEvDwAAAA=",
                    "aspectRatio": 1.4970760233918128,
                    "src": "/static/2e43d1ea8c87d7b77c12a92ae3990dfd/b8a88/profile-picture.webp",
                    "srcSet": "/static/2e43d1ea8c87d7b77c12a92ae3990dfd/34b62/profile-picture.webp 256w,\n/static/2e43d1ea8c87d7b77c12a92ae3990dfd/b8a88/profile-picture.webp 450w",
                    "sizes": "(max-width: 450px) 100vw, 450px"
                  }
                }
              },
              "birthdate": "1998-08-30T21:10:00.000Z",
              "techstack": [{"label": "C#"}],
              "socials": [{"label": "stackoverflow", "icon": "stack-overflow", "linkURL": "https://stackoverflow.com/users/6421230/a-van-hugten"}],
            }
          }
        }]
      }
    }

    const tree = renderer
      .create(<Homepage data={data}/>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})