import React from 'react'
import { NavLink } from 'react-router-dom'

const BtnUser = ({
    theme,
    setShowList,
    userData
}) => {
    
    return (
        <div className="user-info">
            <div className="nav-icon">
                <img
                    src="./img/user-img2.jpg" alt="user-img"
                    onClick={() => setShowList(true)}
                    onMouseLeave={() => setShowList(false)}
                />
                <div
                    className="user-list-menu"
                    onMouseEnter={() => setShowList(true)}
                    onMouseLeave={() => setShowList(false)}
                >
                    <h3>{userData.name}</h3>
                    <ul>
                        <li>
                            <img src={`./img/icons/${theme.iconcoin}`} />
                            <NavLink to="#" className="list-item">{userData.coins} coins</NavLink>
                        </li>
                        <li>
                            <img src={`./img/icons/${theme.iconprofile}`} />
                            <NavLink to="/profile" className="list-item">Profile</NavLink>
                        </li>
                        <li>
                            <img src={`./img/icons/${theme.iconbill}`} />
                            <NavLink to="#" className="list-item">My Orders</NavLink>
                        </li>
                        {userData.authorities === "merchant" ?
                            <li>
                            <img src={`./img/icons/${theme.iconstore}`} />
                            <NavLink to="/dashboard" className="list-item">Merchant Mode</NavLink>
                            </li>
                            :
                            ''
                        }
                        <li>
                            <img src={`./img/icons/${theme.iconlogout}`} />
                            <NavLink
                                to="#"
                                className="list-item"
                                onClick={() => localStorage.removeItem("jwt")}
                            >Logout</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default BtnUser
