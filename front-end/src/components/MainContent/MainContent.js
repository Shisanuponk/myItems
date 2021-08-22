import React from 'react'

// Import Component
import ListMenu from '../ListMenu/ListMenu'

// Import Style
import './MainContent.css'

// Import Screens
import Home from '../../screens/Home'
import Store from '../../screens/Store'
import Support from '../../screens/Support'
import About from '../../screens/About'

const MainContent = ({ content }) => {

    return (
        <div className="main-content">
            <ListMenu listmenu={content} />
            <div className="screen-content">
                <Store />
            </div>
        </div>
    )
}

export default MainContent
