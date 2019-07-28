import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Switch from './Switch';

function KitFilters() {
    return(
    <div className="tile is-ancestor">
        <div className="tile is-parent">
            <div className="is-child">
                <Switch id="1" label="Trending" checked=""/>
            </div>
        </div>
        <div className="tile is-parent">
            <div className="is-child">
                <Switch id="1" label="Most Downloaded" checked=""/>
            </div>
        </div>
        <div className="tile is-parent">
            <div className="is-child">
                <Switch id="1" label="Recent" checked="checked"/>
            </div>
        </div>
        <div className="tile is-parent">
            <div className="is-child">
                <Switch id="1" label="Most Liked" checked=""/>
            </div>
        </div>
    </div>
    )
}

export default KitFilters