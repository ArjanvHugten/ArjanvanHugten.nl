import React, { useState } from "react"
import { InstantSearch, Index, connectStateResults } from "react-instantsearch-dom"
import algoliasearch from "algoliasearch/lite"
import { navigate } from "gatsby"

import SearchInput from "../../components/search/search-input"
import SearchResultsComponent from "../../components/search/search-results"
import Layout from "../../components/layout/layout"
import SEO from "../../components/layout/seo"
import "../../styles/search.scss"

const searchIndice = { name: `Blogs`, title: `Blog Posts`, hitComp: `BlogHit` }

const Results = connectStateResults(
    ({ searchState: state, searchResults: res, children }) =>
        res && res.nbHits > 0 ? children : `No results for '${state.query}'`
)

const Stats = connectStateResults(
    ({ searchResults: res }) =>
        res && res.nbHits > 0 && `${res.nbHits} result${res.nbHits > 1 ? `s` : ``}`
)

export default function Search(data) {
    let currentQuery = data.location.state ? data.location.state.query : ""
    const [query, setQuery] = useState(currentQuery)
    const searchClient = algoliasearch(
        process.env.GATSBY_ALGOLIA_APP_ID,
        process.env.GATSBY_ALGOLIA_SEARCH_KEY
    )

    // Remove location state query, this fixes having the same initial search query after a refresh
    if (currentQuery){
        navigate(
            "/search/",
            { replace: true }
        )
    }

    return (
        <Layout hideSearchBar={true}>
            <SEO title="Search" />
                <div className="container">
                    <InstantSearch 
                        searchClient={searchClient} 
                        indexName={searchIndice.name} 
                        searchState={{query: query}} 
                        onSearchStateChange={({ query }) => setQuery(query)}
                    >
                        <div className="column is-half is-offset-one-quarter">
                            <div className="column">
                                <h1 className="title">Search page</h1>
                            </div>
                            <div className="column">
                                <SearchInput defaultRefinement={query}/>
                            </div>
                            <div className="column">
                                <Index key={searchIndice.name} indexName={searchIndice.name}>
                                    <p><Stats/></p>
                                    <Results>
                                        <SearchResultsComponent/>
                                    </Results>
                                </Index>
                            </div>
                        </div>
                    </InstantSearch>
                </div>
        </Layout>
    )
}