import React from 'react'
import KitContent from'./KitContent'
import KitHeader from './KitHeader'
import KitFooter from './KitFooter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Kit(props) {

    return(
        <div className="column is-one-third-widescreen is-one-third-desktop is-one-third-tablet is-full-mobile">
            <div className="card">
                <KitHeader 
                    kitName={props.kitName}
                />
                <KitContent 
                    kitGenre={props.kitGenre}
                    kitSoundsLike={props.kitSoundsLike}
                    kitCreator={props.kitCreator}
                    kitDateCreated={props.kitDateCreated}
                    kitDescription={props.kitDescription}
                />
                <KitFooter
                    button1={<FontAwesomeIcon icon="play"/>}
                    button2={<FontAwesomeIcon icon="window-maximize"/>}    
                    button3={<FontAwesomeIcon icon="download"/>}
                    button4={<FontAwesomeIcon icon="fire-alt"/>}
                    button4Data={props.kitRating}
                />
            </div>
        </div>
    )
}

export default Kit
