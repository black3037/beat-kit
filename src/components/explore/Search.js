import React, { setState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Search() {
    return(
        <div className="section">
            <div className="field has-addons">
                <div className="control has-icons-left is-expanded">
                    <input className="input is-small" type="search" placeholder="Search Kits"></input>
                    <span class="icon is-small is-left">
                        <FontAwesomeIcon icon="search"/>
                    </span>
                </div>
                <div className="control">
                    <a class="button is-info is-small is-expanded">Search</a>
                </div>
            </div>
        </div>
    )
}

export default Search