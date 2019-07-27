import React, { setState } from 'react'
import Search from './explore/Search'
import KitSelectors from './explore/KitSelectors'

function Explore() {
    return(
        <div className='container'>
            <Search/>
            <KitSelectors/>
        </div>
    )
}

export default Explore