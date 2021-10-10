import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ToggleButton from "react-toggle-button";


// Import Style
import NavBox from "./Nav.styled";
// Import Context
import ThemeContext, { Themes } from "../../context/Themes";
// Import Components
import Hamberger from "./Hamberger";
import BtnLogin from "./BtnLogin";
import BtnUser from "./BtnUser";
import { getUser } from "../../api/api";

const Nav = () => {
    const [themes, setThemes] = useContext(ThemeContext);
    const [auth, setAuth] = useState(false)
    const [showList, setShowList] = useState(false)
    const [userData, setUserData] = useState("")

    useEffect(() => {
        isUserLogin()
        if(localStorage.getItem("jwt"))
            fetchUserData()
    }, [auth])

    const isUserLogin = () => {
        if (localStorage.getItem("jwt")){
            return (
                <BtnUser
                    theme={themes}
                    setAuth={setAuth}
                    setShowList={setShowList}
                    userData={userData}
                />
            )
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

    const fetchUserData = async () => {
        try {
            const {data} = await getUser()
            console.log("data --> ",data);
            setUserData(data.data)
        } catch (error) {
            localStorage.removeItem("jwt")
            alert(error)
        }
    }

    document.body.style.backgroundColor = themes.background;

    return (
        <NavBox theme={themes} userList={showList}>
            <div className="nav-logo">
                <NavLink to="/" exact>
                    myItem
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
