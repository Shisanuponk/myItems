import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import ToggleButton from "react-toggle-button";


// Import Style
import NavBox from "./NavBox";

// Import Context
import ThemeContext, { Themes } from "../../storage/Themes";

// Import Components
import Hamberger from "./Hamberger";
import BtnLogin from "./BtnLogin";

const Nav = () => {
    const [themes, setThemes] = useContext(ThemeContext);
    const [auth, setAuth] = useState(false);
    const [showList, setShowList] = useState(false)

    const isUserLogin = () => {
        if (auth) {
            return (
                <div className="user-info">
                    <div className="nav-icon">
                        <img
                            src="./img/user-img2.jpg" alt="user-img"
                            // onClick={() => setShowList(!showList)}
                            onMouseEnter={() => setShowList(true)}
                            onMouseLeave={() => setShowList(false)}
                        />
                        <div
                            className="user-list-menu"
                            onMouseEnter={() => setShowList(true)}
                            onMouseLeave={() => setShowList(false)}
                        >
                            <h3>Elicia Miagu</h3>
                            <ul>
                                <li>
                                    <img src={`./img/icons/${themes.iconcoin}`} />
                                    <NavLink to="#" className="list-item">20000 coins</NavLink>
                                </li>
                                <li>
                                    <img src={`./img/icons/${themes.iconprofile}`} />
                                    <NavLink to="/profile" className="list-item">Profile</NavLink>
                                </li>
                                <li>
                                    <img src={`./img/icons/${themes.iconbill}`} />
                                    <NavLink to="#" className="list-item">My Orders</NavLink>
                                </li>
                                <li>
                                    
                                    <img src={`./img/icons/${themes.iconstore}`} />
                                    <NavLink to="/merchant-management" className="list-item">Merchant Mode</NavLink>
                                </li>
                                <li>
                                    <img src={`./img/icons/${themes.iconlogout}`} />
                                    <NavLink
                                        to="#"
                                        className="list-item"
                                        onClick={() => setAuth(!auth)}
                                    >Logout</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            );
        }
        return (
            <div className="nav-icon">
                <BtnLogin
                    theme={themes}
                    isLogin={auth}
                    setLogin={(auth) => setAuth(auth)}
                />
            </div>
        );
    };

    document.body.style.backgroundColor = themes.background;

    return (
        <NavBox theme={themes} userList={showList}>
            <div className="nav-logo">
                <NavLink to="/" exact>
                    myItem
                    {/* <img src='./img/logo6.png' alt='logo' width='90px' height='60px'/> */}
                </NavLink>

                {/* Button Toggle Change Theme */}
                <ToggleButton
                    className="nav-toggle"
                    inactiveLabel={"Light"}
                    activeLabel={"Dark"}
                    colors={{
                        active: {
                            base: "rgb(65,66,68)",
                            hover: "rgb(95,96,98)",
                        },
                        inactive: {
                            base: "rgb(207,221,245)",
                            hover: "rgb(177, 191, 215)",
                        },
                    }}
                    value={(themes === Themes.dark ? true : false) || false}
                    onToggle={() => {
                        if (themes === Themes.light) setThemes(Themes.dark);
                        else setThemes(Themes.light);
                    }}
                />
                {/* End Button Toggle Change Theme */}
            </div>

            {/* Middle Menu For Routing */}
            <div className="nav-items nav-menu-router">
                <ul className="item-box">
                    <NavLink to="/" activeClassName="nav-menu-active" exact>
                        <li className="item">Home</li>
                    </NavLink>
                    <NavLink to="/store" activeClassName="nav-menu-active" exact>
                        <li className="item">Store</li>
                    </NavLink>
                    <NavLink to="/merchant" activeClassName="nav-menu-active" exact>
                        <li className="item">Merchant</li>
                    </NavLink>
                    <NavLink to="/support" activeClassName="nav-menu-active" exact>
                        <li className="item">Support</li>
                    </NavLink>
                </ul>
            </div>

            {/* Menu User */}
            <div className="nav-items nav-menu-user">
                <ul className="item-box">
                    {isUserLogin()}
                    <NavLink
                        to="/cart"
                        className="nav-icon"
                        activeClassName="nav-icon-active"
                        exact
                    >
                        <img src={`./img/icons/${themes.iconcart}`} alt="icon-cart" />
                    </NavLink>
                    <NavLink
                        to="/favorite"
                        className="nav-icon"
                        activeClassName="nav-icon-active"
                        exact
                    >
                        <img src={`./img/icons/${themes.iconheart}`} alt="icon-favorite" />
                    </NavLink>
                </ul>
            </div>

            {/* Hamberger Menu */}
            <div className="nav-items nav-hamberger">
                <Hamberger theme={themes} />
            </div>
        </NavBox>
    );
};

export default Nav;
