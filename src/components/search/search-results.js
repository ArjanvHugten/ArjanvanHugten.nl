import React from "react"
import { Highlight, Snippet, connectHits } from "react-instantsearch-dom"
import { Link } from "gatsby"

export default connectHits(({ hits }) => (
    <div className="search-results">
        { hits.map(hit => (
            <div key={hit.path} className="box">
                <Link to={hit.path}>
                    <article className="media">
                        <div className="media-content">
                            <div className="content">
                                <p>
                                    <strong><Highlight attribute="title" hit={hit} tagName="mark" /></strong> <small>{hit.date}</small>
                                    <br />
                                    <Snippet attribute="excerpt" hit={hit} tagName="mark" />
                                </p>
                            </div>
                        </div>
                    </article>
                    <button className="button is-fullwidth"><strong>Read more</strong></button>
                </Link>
            </div>
        ))}
    </div>
))