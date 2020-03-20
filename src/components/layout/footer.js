import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default () => {
    const data = useStaticQuery(graphql`
        query FooterContentQuery {
            footerData: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "footer" } } }) {
                edges {
                    node {
                        frontmatter {
                            text
                        }
                    }
                }
            }
        }
    `)
    const { frontmatter: footer } = data.footerData.edges[0].node

    return (
        <footer>
            <div className="container has-text-centered">
                <hr/>
                <p>
                    Copyright © {new Date().getFullYear()} - <span dangerouslySetInnerHTML={{ __html: footer.text }} />
                </p>
            </div>
        </footer>
    )
}