import React from 'react'
import GroupTag from '../explore/GroupTag'
import KitCreator from './KitCreator'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function KitContent(props) {
    return(
        <div className="card-content">
            <KitCreator
                kitCreator = {props.kitCreator}
            />
            <div className="content">
                <p className="heading"><strong>Genre: </strong>{props.kitGenre}</p>
                <p className="heading"><strong>Sounds Like: </strong>{props.kitSoundsLike}</p>
                <p className="heading"><strong>Used In: </strong>{props.kitSoundsLike}</p>
                <p className="heading"><strong>Description: </strong>{props.kitDescription}</p>
                <hr className="dropdown-divider"></hr>
                <div class="field is-grouped is-grouped-multiline">
                    <div class="control">
                        <div class="tags has-addons">
                        <span class="tag is-dark">
                            <span class="icon is-small">
                                <FontAwesomeIcon icon="download"/>
                            </span>
                        </span>
                        <span class="tag is-info">30,000</span>
                        </div>
                    </div>

                    <div class="control">
                        <div class="tags has-addons">
                        <span class="tag is-dark">
                            <span class="icon is-small">
                                <FontAwesomeIcon icon="fire-alt"/>
                            </span>
                        </span>
                        <span class="tag is-danger">1,000</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KitContent