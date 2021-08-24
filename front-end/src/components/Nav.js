import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import ToggleButton from 'react-toggle-button'

// Import Style
import NavBox from './NavBox'

// Import Storage
import ThemeContext, { Themes } from '../storage/Themes'

const Nav = () => {
    const [themes, setThemes] = useContext(ThemeContext)

    document.body.style.backgroundColor = themes.background;

    return (
        <NavBox theme={themes}>
            <div className="nav-logo">
                <h2>myItems</h2>

                {/* Button Toggle Change Theme */}
                    <ToggleButton
                        inactiveLabel={'Light'}
                        activeLabel={'Dark'}
                        colors={{
                            active: {
                                base: 'rgb(65,66,68)',
                                hover: 'rgb(95,96,98)',
                            },
                            inactive: {
                                base: 'rgb(207,221,245)',
                                hover: 'rgb(177, 191, 215)',
                            }
                        }}
                        value={ (themes === Themes.dark?true:false) || false }
                        onToggle={() => {
                            if(themes === Themes.light) setThemes(Themes.dark)
                            else setThemes(Themes.light)
                        }}
                    />
                {/* End Button Toggle Change Theme */}
            </div>

            <div className="nav-items nav-menu-router">
                <ul>
                    <NavLink to="/" activeClassName="nav-menu-active" exact>
                        <li>Home</li>
                    </NavLink>
                    <NavLink to="/store" activeClassName="nav-menu-active" exact>
                        <li>Store</li>
                    </NavLink>
                    <NavLink to="/merchant" activeClassName="nav-menu-active" exact>
                        <li>Merchant</li>
                    </NavLink>
                    <NavLink to="/support" activeClassName="nav-menu-active" exact>
                        <li>Support</li>
                    </NavLink>
                </ul>
            </div>

            <div className="nav-items nav-menu-user">
                <ul>
                    {/* <NavLink to="/userId" className="nav-icon">
                        <img src="./img/user-img2.jpg" alt="user-img" />
                    </NavLink> */}
                    <div className="nav-icon">
                        <button>Login/Register</button>
                    </div>
                    
                    <NavLink to="/cart" className="nav-icon" activeClassName="nav-icon-active" exact>
                        <img src={`./img/icons/${themes.iconcart}`} alt="icon-cart" />
                    </NavLink>
                    <NavLink to="/favorite" className="nav-icon" activeClassName="nav-icon-active" exact>
                        <img src={`./img/icons/${themes.iconheart}`} alt="icon-favorite" />
                    </NavLink>

                    <div className="nav-hamberger">
                        <img src={`./img/icons/${themes.iconhamberger}`} alt="" />
                    </div>
                </ul>
            </div>
        </NavBox>
    )
}

export default Nav
