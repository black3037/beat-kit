import React from 'react'

function Sample() {
    return(
        <div className="box has-small-margin">
            <nav className="level is-mobile">
            <div className="level-left">
                <div className="level-item">
                <strong>Sample Name</strong>
                </div>
            </div>
            <div className="level-right">
                <div className="level-item">
                <label className="checkbox">
                    <a className="icon is-medium button is-danger has-very-small-margin">-</a>
                    <a className="icon is-medium button is-info has-very-small-margin">+</a>
                </label>
                </div>
            </div>
            </nav>
        </div>
    )
}

export default Sample