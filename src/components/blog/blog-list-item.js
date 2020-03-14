import React from "react"
import { Link } from "gatsby"

export default ({ blog }) => (
    <div className="box blog-post">
        <Link to={blog.frontmatter.path}>
            <article className="media">
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>{blog.frontmatter.title}</strong> <small>{blog.frontmatter.date}</small>
                            <br />
                            {blog.frontmatter.intro}
                        </p>
                    </div>
                    <button className="button is-primary"><strong>Read</strong></button>
                </div>
            </article>
        </Link>
    </div>
)