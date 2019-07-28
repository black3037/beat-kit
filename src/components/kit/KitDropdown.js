import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function KitDropdown(props) {

    return(
        <div className="dropdown is-right is-active">
            <div className="dropdown-trigger">
                <a href="#" class="card-header-icon" aria-label="more options"> 
                <span className="icon is-small">
                    <FontAwesomeIcon icon="caret-down"/>
                </span>
                </a>
            </div>
            <div className="dropdown-menu" id="dropdown-menu2" role="menu">
                <div className="dropdown-content">
                    <a href="#" className="dropdown-item">
                        Add to favorites
                    </a>
                    <hr className="dropdown-divider"></hr>
                    <a href="#" className="dropdown-item">
                        Contribute to kit
                    </a>
                    <hr className="dropdown-divider"></hr>
                    <a href="#" className="dropdown-item">
                        This is a link
                    </a>
                </div>
            </div>
        </div>
    )
}

export default KitDropdown
