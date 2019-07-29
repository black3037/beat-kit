import React, { useState } from 'react'
import Kit from '../kit/Kit'


function KitExplore() {

    const [response,setResponse] = useState([])
    // Load progress bar until card data has been received.
    let cards = <progress class="progress is-small is-info" max="120"></progress>;
    // Grab JSON data from site's RESTful API
    fetch('http://www.mocky.io/v2/5d3dcd5c320000fa1b6e557d?mocky-delay=10ms')
    .then(data => data.json())
    .then(data => setResponse(data))
  
    try {
        cards = response.data.kits.map(kit => 
            <Kit 
                kitName={kit.kitName}
                kitGenre={kit.kitGenre}
                kitRating={kit.kitRating}
                kitDescription={kit.kitDescription}
                kitDateCreated={kit.kitDateCreated}
                kitCreator={kit.kitCreator}
                kitSoundsLike={kit.kitSoundsLike}
            />
        )
    } catch (error) {
        console.log(error)
    }

    return(
        <div className="section">
            <div className="container">
                <div className="columns is-multiline is-mobile">
                    {cards}
                </div>
            </div>
        </div>
    )
}

export default KitExplore