import React from 'react'
import KitViewerHeader from './KitViewerHeader'
import KitViewerContent from './KitViewerContent'

function KitViewer() {
    return(
        <div className="modal-full is-active">
            <KitViewerHeader/>
            <KitViewerContent/>
        </div>
    )
}

export default KitViewer