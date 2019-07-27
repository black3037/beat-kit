import React, { setState } from 'react'
import Search from './explore/Search'
import KitSelectors from './explore/KitSelectors'
import KitExplore from './explore/KitExplore'

function Explore() {
    return(
        <div className='container'>
            <Search />
            <KitSelectors />
            <KitExplore />
        </div>
    )
}

export default Explore