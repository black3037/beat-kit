import React from 'react'
import Kit from './Kit'

function KitExplore() {
    return(
        <div className="section">
            <div className="container">
                <div className="columns is-multiline is-mobile">
                    <Kit 
                        kitName="My Kit"
                        kitGenre="Hip-Hop"
                        kitRating="10"
                        kitDescription="This is a very basic description of the kit that goes here"
                        kitDateCreated="1 Jan 2016"
                        kitCreator="Derek Black"
                        kitSoundsLike="Made in Heights"
                    />
                    <Kit />
                    <Kit />
                    <Kit />
                    <Kit />
                    <Kit />
                    <Kit />
                    <Kit />
                    <Kit />
                    <Kit />
                    <Kit />
                    <Kit />
                    <Kit />
                </div>
            </div>
        </div>
    )
}

export default KitExplore