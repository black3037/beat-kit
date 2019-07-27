import React from 'react'

function GroupTag(props) {
    let color = 'tag ' + props.color
    return(
        <div className="field is-grouped is-grouped-multiline">
            <div className="control">
                <div className="tags has-addons are-small">
                    <span className="tag is-dark">{props.name}</span>
                    <span className={color}>{props.data}</span>
                </div>
            </div>
        </div>
    )
}

export default GroupTag