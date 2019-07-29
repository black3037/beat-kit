import React from 'react'

function KitCreator(props) {
    return(
        <div className="media">
            <figure className="media-left">
                <p className="image is-48x48">
                    <img className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png"></img>
                </p>
            </figure>
            <div className="media-content">
                    <p className="title is-4">{props.kitCreator}</p>
                    <p className="subtitle is-6">@username</p>
            </div>
        </div>
 
    )
}

export default KitCreator