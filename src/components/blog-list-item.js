import React from "react"
import { Link } from "gatsby"

export default ({ blog }) => (
    <div>
        <Link to={blog.frontmatter.path}>
            {blog.frontmatter.title} ({blog.frontmatter.date})
        </Link>
    </div>
)