import React, { setState } from 'react'

function Search() {
    return(
        <section className="level">
            <div className="level-left">
                <div className="level-item">
                    <div className="field">
                        <div className="control">
                            <input className="input is-small" type="text" placeholder="Search Kits"></input>
                        </div>
                    </div>
                </div>
            </div>
            <div className="level-right">
                <div className="level-item">
                    <strong>Search Kits</strong>
                </div>
            </div>
        </section>
    )
}

export default Search