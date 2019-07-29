import React from 'react'
import GroupTag from '../explore/GroupTag'
import KitCreator from './KitCreator'

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
                <div className="level">
                    <div className="level-left">
                        <div className="level-item">
                        <p>Created: {props.kitDateCreated}</p>
                        </div>
                    </div>
                    <div className="level-right">
                        <div className="level-item">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KitContent