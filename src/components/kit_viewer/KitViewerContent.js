import React from 'react'
import KitViewerInfo from './KitViewerInfo'
import Comments from './Comments'
import KitViewerSamples from './KitViewerSamples'

function KitViewerContent() {
    return(
        <div className="modal-full-content">
            <div class="columns">
                <div class="column is-one-quarter">
                    <KitViewerInfo/>
                </div>
                <div class="column">
                    <KitViewerSamples/>
                </div>
            </div>
            <div className="columns">
                <div className="column is-full">
                    <Comments/>
                </div>
            </div>
        </div>
    )
}

export default KitViewerContent