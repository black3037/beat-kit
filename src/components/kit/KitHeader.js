import React from 'react'
import KitDropdown from './KitDropdown'

function KitHeader(props) {
    return(
        <header className="card-header">
            <div className="card-header-title">
                <p>{props.kitName}</p>
            </div>
            <KitDropdown />
        </header>
    )
}

export default KitHeader