import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

export default ({ blog }) => (
    <div className="box">
        <Link to={blog.frontmatter.path}>
            <article className="media">
                <div className="media-left is-hidden-mobile">
                    <Img fluid={blog.frontmatter.cardImage.childImageSharp.fluid} alt={blog.frontmatter.title} className="image is-96x96" />
                </div>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>{blog.frontmatter.title}</strong> <small>{blog.frontmatter.date}</small>
                        </p>
                        <div className="tags">
                            {blog.frontmatter.tags.map(tag =>
                                <span key={tag} className="tag is-primary">{tag}</span>
                            )}
                        </div>
                        <p>{blog.frontmatter.intro}</p>
                    </div>
                </div>
            </article>
            <button className="button is-fullwidth"><strong>Read more</strong></button>
        </Link>
    </div>
)