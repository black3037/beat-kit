import React, { setState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Search() {
    return(
        <nav class="panel">
  <p class="panel-heading">
    Find Kits
  </p>
  <div class="panel-block">
    <p class="control has-icons-left">
      <input class="input is-small" type="text" placeholder="search"></input>
      <span class="icon is-small is-left">
        <FontAwesomeIcon icon="search"/>
      </span>
    </p>
  </div>
  <p class="panel-tabs">
    <a className="is-small is-left"><FontAwesomeIcon icon="filter"/></a>
    <a class="is-active">
        <FontAwesomeIcon icon="globe-americas"/>
        Recent
    </a>
    <a>
        <span class="icon is-small is-left">
            <FontAwesomeIcon icon="chart-line"/>
        </span>
        Trending
    </a>
    <a>
        <span class="icon is-small is-left">
            <FontAwesomeIcon icon="fire-alt"/>
        </span>
        Liked
    </a>
    <a>
        <span class="icon is-small is-left">
            <FontAwesomeIcon icon="download"/>
        </span>
        Downloaded
    </a>
  </p>
  <div class="panel-block">
    <button class="button is-link is-outlined is-fullwidth">
      reset all filters
    </button>
  </div>
</nav>
      
    )
}

export default Search