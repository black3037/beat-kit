import React, { setState } from 'react'
import Search from './explore/Search'
import KitSelectors from './explore/KitSelectors'
import KitExplore from './explore/KitExplore'
import KitFilters from './explore/KitFilters'

function Explore() {
    return(
        <div className='container'>
            <div className="section">
                <Search />
                
            </div>
            <KitExplore />
        </div>
    )
}

export default Explore