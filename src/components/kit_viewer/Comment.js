import React from 'react'

function Comment() {
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                    </p>
                    </div>
                    <nav className="level is-mobile">
                    <div className="level-left">
                        <a className="level-item">
                        <span className="icon is-small"><i className="fas fa-reply"></i></span>
                        </a>
                        <a className="level-item">
                        <span className="icon is-small"><i className="fas fa-retweet"></i></span>
                        </a>
                        <a class="level-item">
                        <span className="icon is-small"><i class="fas fa-heart"></i></span>
                        </a>
                    </div>
                    </nav>
                </div>
            </article>
        </div>
    )
}

export default Comment