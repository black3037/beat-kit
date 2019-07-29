import React from 'react'
import KitDropdown from './KitDropdown'
import Kit from './Kit';

function KitHeader(props) {

    return(
        <div className="card-header">
            <p className="card-header-title">{props.kitName}</p>
            <KitDropdown/>
        </div>
    )
}

export default KitHeader
