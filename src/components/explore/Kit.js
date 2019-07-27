import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import GroupTag from './GroupTag'

function Kit(props) {

    return(
        <div className="column is-one-third-widescreen is-one-third-desktop is-one-third-tablet is-full-mobile">
            <div className="card">
                <header className="card-header">
                    <div className="card-header-title">
                        <p>Kit Name</p>
                    </div>
                    <a href="#" className="card-header-icon" aria-label="more options">
                    <span className="icon">
                        <FontAwesomeIcon icon="caret-down"/>
                    </span>
                    </a>
                </header>
                <div className="card-content">
                    <div className="content">
                        <span className="is-flex">
                            <GroupTag 
                                name="Artist" 
                                data={props.kitCreator}
                                color="is-danger"
                            />
                        </span>
                        <br></br>
                        <p className="heading"><strong>Genre: </strong>{props.kitGenre}</p>
                        <p className="heading"><strong>Sounds Like: </strong>{props.kitSoundsLike}</p>
                        <p className="heading"><strong>Sounds Like: </strong>{props.kitSoundsLike}</p>
                        <hr className="dropdown-divider"></hr>
                        <time dateTime="2016-1-1">{props.kitDateCreated}</time>
                    </div>
                </div>
                <footer className="card-footer">
                    <a href="#" className="card-footer-item"><FontAwesomeIcon icon="play"/>&nbsp;Preview</a>
                    <a href="#" className="card-footer-item"><FontAwesomeIcon icon="download"/>&nbsp;Download</a>
                    <a href="#" className="card-footer-item"><FontAwesomeIcon icon="asterisk"/>&nbsp;Details</a>
                </footer>
            </div>
        </div>
    )
}

export default Kit