import React from "react"
import { Link } from "gatsby"

export default ({ crumbs }) => (
    <nav className="breadcrumb" aria-label="breadcrumbs">
        <ul>
            {crumbs.map((item) => <li key={item.pathname}><Link to={item.pathname}>{item.crumbLabel}</Link></li>)}
        </ul>
    </nav>
)