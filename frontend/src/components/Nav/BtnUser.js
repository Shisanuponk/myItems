import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { logout } from '../../api/api'

const BtnUser = ({
    theme,
    setShowList,
    userData
}) => {

    const handleLogout = async () => {
        const res = await logout()
        if(res.data === "success"){
            localStorage.removeItem("authToken")
        }
    }
    
    return (
        <div className="user-info">
            <div className="nav-icon">
                <img
                    src="./img/user-img2.jpg" alt="user-img"
                    onMouseEnter={() => setShowList(true)}
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
                        <li>

                            <img src={`./img/icons/${theme.iconstore}`} />
                            <NavLink to="/merchant-management" className="list-item">Merchant Mode</NavLink>
                        </li>
                        <li>
                            <img src={`./img/icons/${theme.iconlogout}`} />
                            <NavLink
                                to="#"
                                className="list-item"
                                onClick={handleLogout}
                            >Logout</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default BtnUser
