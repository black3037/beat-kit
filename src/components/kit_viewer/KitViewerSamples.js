import React from 'react'
import Sample from './Sample'

function KitViewerSamples() {
    return(
        <div>
            <div className="tabs is-large">
            <ul>
                <li className="is-active"><a>All</a></li>
                <li><a>Kicks</a></li>
                <li><a>Snares</a></li>
                <li><a>Toms</a></li>
            </ul>
            </div>
            <Sample/>
            <Sample/>
            <Sample/>
            <Sample/>
            <Sample/>
            <Sample/>
            <Sample/>
            <Sample/>
            <Sample/>
        </div>
    )
}

export default KitViewerSamples