import React from "react"
import { connectSearchBox } from "react-instantsearch-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../../utils/fontawesome'

export default connectSearchBox(({ currentRefinement, refine }) => (
    <div className="field has-addons" >
        <div className="control has-icons-left is-expanded">
            <input className="input" type="text" aria-label="Search" placeholder="Search term" value={currentRefinement} onChange={e => refine(e.target.value)} />
            <span className="icon is-small is-left">
                <FontAwesomeIcon icon="search" />
            </span>
        </div>
    </div>
))