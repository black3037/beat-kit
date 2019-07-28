import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import GroupTag from './GroupTag'
import Like from './Like';
import KitDropdown from './KitDropdown'

function Kit(props) {

    return(
        <div className="column is-one-third-widescreen is-one-third-desktop is-one-third-tablet is-full-mobile">
            <div className="card">
                <header className="card-header">
                    <div className="card-header-title">
                        <p>Kit Name</p>
                    </div>
                    <KitDropdown/>
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
                        <p className="heading"><strong>Used In: </strong>{props.kitSoundsLike}</p>
                        <hr className="dropdown-divider"></hr>
                        <div className="level">
                            <div className="level-left">
                                <div className="level-item">
                                <p>Created: {props.kitDateCreated}</p>
                                </div>
                            </div>
                            <div className="level-right">
                                <div className="level-item">
                                    <Like likeCount="3"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="card-footer">
                    <a href="#" className="has-text-black card-footer-item"><FontAwesomeIcon icon="play"/></a>
                    <a href="#" className="has-text-info card-footer-item"><FontAwesomeIcon icon="download"/></a>
                    <a href="#" className="has-text-danger card-footer-item has-badge-rounded has-badge-danger has-badge-medium" data-badge="10"><FontAwesomeIcon icon="fire-alt"/></a>
                </footer>
            </div>
        </div>
    )
}

export default Kit
