import React, { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { navigate } from "gatsby"

import '../../utils/fontawesome'

export default () => {
  const [searchInput, setSearchInput] = useState('');

  function handleSearchClick(event) { 
    event.preventDefault()

    navigate(`/search/`, {
      state: { query: searchInput },
    })
  }

  return (
    <form onSubmit={handleSearchClick}>
        <div className="field has-addons" >
            <div className="control search-field has-icons-left">
                <input className="input" type="text" placeholder="Search term" value={searchInput} onChange={e => setSearchInput(e.target.value)} />
                <span className="icon is-small is-left">
                    <FontAwesomeIcon icon="search" />
                </span>
            </div>
            <div className="control">
                <button type="submit" className="button">Search</button>
            </div>
        </div>
    </form>
  )
}