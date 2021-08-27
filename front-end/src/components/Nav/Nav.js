import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import ToggleButton from 'react-toggle-button'

// Import Style
import NavBox from './NavBox'

// Import Storage
import ThemeContext, { Themes } from '../../storage/Themes'

// Import Components
import Hamberger from './Hamberger'
import BtnLogin from './BtnLogin'

const Nav = () => {
    const [themes, setThemes] = useContext(ThemeContext)

    document.body.style.backgroundColor = themes.background;

    return (
        <NavBox theme={themes}>
            <div className="nav-logo">
                <NavLink to="/" exact>myItems</NavLink>

                {/* Button Toggle Change Theme */}
                    <ToggleButton
                        className="nav-toggle"
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

                    {/* <div className="nav-icon">
                        <BtnLogin theme={themes} />
                    </div> */}
                    
                    <NavLink to="/userId" className="nav-icon">
                        <img src="./img/user-img2.jpg" alt="user-img" />
                    </NavLink>
                    
                    
                    <NavLink to="/cart" className="nav-icon" activeClassName="nav-icon-active" exact>
                        <img src={`./img/icons/${themes.iconcart}`} alt="icon-cart" />
                    </NavLink>
                    <NavLink to="/favorite" className="nav-icon" activeClassName="nav-icon-active" exact>
                        <img src={`./img/icons/${themes.iconheart}`} alt="icon-favorite" />
                    </NavLink>
                </ul>
            </div>

            {/* Hamberger Menu */}
            <div className="nav-items nav-hamberger">
                <Hamberger theme={themes} />
            </div>
        </NavBox>
    )
}

export default Nav
