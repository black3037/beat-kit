import React from 'react'

function KitViewerInfo() {
    return(
        <div>
            <article className="media">
                <figure className="media-left">
                    <p className="image is-64x64">
                    <img src="https://bulma.io/images/placeholders/128x128.png"></img>
                    </p>
                </figure>
                <div className="media-content">
                    <div className="content">
                    <p>
                        <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                        <br></br>
                        <strong>About the creator:</strong>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                        <br></br>
                        <strong>About this Kit:</strong>
                    </p>
                    </div>
                </div>
            </article>

        </div>
    )
}

export default KitViewerInfo