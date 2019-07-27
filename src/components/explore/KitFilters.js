import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function KitFilters() {
    return(
    <div className="tile is-ancestor">
        <div className="tile is-parent">
            <div className="tile is-child">
                <FontAwesomeIcon icon="filter"/>
            </div>
        </div>
        <div className="tile is-parent">
            <div className="is-child">
                <div className="field">
                    <input id="switchExample" type="checkbox" name="switchExample" className="switch is-small" checked="checked"></input>
                    <label for="switchExample">Trending</label>
                </div>
            </div>
        </div>
        <div className="tile is-parent">
            <div className="is-child">
                <div className="field">
                    <input id="switchExample" type="checkbox" name="switchExample" className="switch is-small" checked="checked"></input>
                    <label for="switchExample">Most Downloaded</label>
                </div>
            </div>
        </div>
    </div>
    )
}

export default KitFilters