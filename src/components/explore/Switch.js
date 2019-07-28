import React from 'react'

function Switch(props) {
    return(
        <div className="field">
            <input id={props.id} type="checkbox" name="name" className="switch is-small is-rounded" checked={props.checked}></input>
            <label for={props.id}>{props.label}</label>
        </div>
    )

}

export default Switch