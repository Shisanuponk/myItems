import React from 'react'

// Import Style
import './Nav.css'

const Nav = () => {
    return (
        <div className="container-nav">
            <div className="nav-logo">
                <h2>myItems</h2>
            </div>

            <ul>
                <li className="nav-menu" ><img src="./img/icons/icons8-home.png" alt="icon-home" /></li>
                <li className="nav-menu" ><img src="./img/icons/icons8-news.png" alt="icon-news" /></li>
                <li className="nav-menu" ><img src="./img/icons/icons8-support.png" alt="icon-support" /></li>
                <li className="nav-menu" ><img src="./img/icons/icons8-about.png" alt="icon-about" /></li>
            </ul>

            <ul>
                <li><img src="./img/icons/icons8-shopping-cart.png" alt="icon-cart" /></li>
                <li><img src="./img/icons/icons8-heart.png" alt="icon-favorite" /></li>
                <li><img className="nav-user" src="./img/icons/icons8-login.gif" alt="icon-login" /></li>
                {/* <li><h2>Login/Register</h2></li> */}
                {/* <li className="nav-user"><img src="./img/user-img.png" alt="icon-favorit" /></li> */}
            </ul>
            <img className="nav-hamberger" src="./img/icons/icons8-menu.png" alt="icon-hamberger-menu" />
        </div>
    )
}

export default Nav
