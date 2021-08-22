import React from 'react'
import { NavLink } from 'react-router-dom'

// Import Data List Menu
import ListMenuData from './ListMenuData'

// Import Style
import './ListMenu.css'


const ListMenu = ({ listmenu }) => {

    console.log(listmenu);

    const ShowListMenu = () => {
        ListMenuData.filter(e => e.name === listmenu).map(i => {
            return(
                <li>{i.name}</li>
            )
        })
    }

    return (
        <div className="list-menu-box">
            <ul>
                <h1>Menu</h1>
                <hr /><br />
                {ShowListMenu}
            </ul>
        </div>
    )
}

export default ListMenu
