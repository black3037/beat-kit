import React from 'react'
import KitDropdown from './KitDropdown'

function KitHeader(props) {
    return(
        <header className="card-header">
            <div className="media">
                <figure className="media-left">
                    <p className="image is-48x48">
                    <img src="https://bulma.io/images/placeholders/128x128.png"></img>
                    </p>
                </figure>
                <div className="media-content">
                    <div className="content">
                        <div className="card-header-title">
                            <p>{props.kitName}</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default KitHeader
