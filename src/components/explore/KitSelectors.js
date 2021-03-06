import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function KitSelectors() {
    return(
        <div className="section">
            <div className="level">
                <div className="level-left">
                    <div className="level-item">
                    <p className="heading"><strong>Search by genre:	&nbsp;</strong></p>
                        <div className="field">
                            <div className="control has-icons-left">
                                <div className="select">
                                <select>
                                    <option>Country</option>
                                    <option>Select dropdown</option>
                                    <option>With options</option>
                                </select>
                                </div>
                                <div className="icon is-small is-left">
                                    <FontAwesomeIcon icon="music"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="level-right">
                    <div className="level-item">
                        <p className="heading"><strong>Search by sound:	&nbsp;</strong></p>
                        <div className="field">
                            <div className="control has-icons-left">
                                <div className="select">
                                <select>
                                    <option>Country</option>
                                    <option>Select dropdown</option>
                                    <option>With options</option>
                                </select>
                                </div>
                                <div className="icon is-small is-left">
                                <FontAwesomeIcon icon="sliders-h"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KitSelectors