import React from 'react'

function Like(props) {
    return(
        <div className="is-inline-flex">
            <button className="button is-small is-rounded">
                <span className="icon">👎</span>
            </button>
            <strong><p className="is-size-6">&nbsp;{props.likeCount}&nbsp;</p></strong>
            <button className="button is-small is-rounded">
                <span className="icon">👍</span>
            </button>
        </div>
    )
}

export default Like