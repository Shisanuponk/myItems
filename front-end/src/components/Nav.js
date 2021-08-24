import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import ToggleButton from 'react-toggle-button'

// Import Storage
import ThemeContext, { Themes } from '../storage/Themes'

const Nav = () => {
    // const [isToggle, setIsToggle] = useState(true)
    const [themes, setThemes] = useContext(ThemeContext)

    // useEffect(() => {
    //     if(isToggle) setThemes(Themes.light)
    //     else setThemes(Themes.dark)
    // }, [isToggle])

    return (
        <NavBox theme={themes}>
            <div className="nav-logo">
                <h2>myItems</h2>
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
                                label: '#fff'
                            }
                        }}
                        value={ (themes === Themes.dark?true:false) || false }
                        onToggle={() => {
                            if(themes === Themes.light) setThemes(Themes.dark)
                            else setThemes(Themes.light)
                        }}
                    />
            </div>

            <div className="nav-items">
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

            <div className="nav-items">
                <ul>
                    {/* <NavLink to="/userId" className="nav-icon">
                        <img src="./img/user-img2.jpg" alt="user-img" />
                    </NavLink> */}
                    <NavLink to="#" className="nav-icon">
                    <button>Login/Register</button>
                    </NavLink>
                    
                    <NavLink to="/cart" className="nav-icon">
                        <img src={`./img/icons/${themes.iconcart}`} alt="icon-cart" />
                    </NavLink>
                    <NavLink to="/favorite" className="nav-icon">
                        <img src={`./img/icons/${themes.iconheart}`} alt="icon-favorite" />
                    </NavLink>
                </ul>
            </div>
        </NavBox>
    )
}

// Style for this Component

// NavBox Style
const NavBox = styled.div`
padding: 0 10px;
/* width: 100%; */
height: 55px;
color: ${props => props.theme.fontcolor};
position: sticky;
top: 0;
display: flex;
justify-content: space-between;

${ props => `
background: ${props.theme.navcolor};
box-shadow: 0 5px 5px ${props.theme.navshadow};
`
}

.nav-logo{
    padding: 3px 10px;
    color: ${props => props.theme.colorhighlight};
    display: flex;
    > * {
        padding: 10px;
    }
}

.nav-items {
    padding: 10px;
    ul{
        list-style: none;
        display: flex;

        *{
            text-decoration: none;
        }

        li{
            padding: 15px 10px;
            color: ${props => props.theme.fontcolor};
            transition: .25s;

            :hover {
                /* border-bottom: 2px solid ${ props => props.theme.borderhighlight}; */
                color: ${ props => props.theme.colorhighlight};
                transition: .25s;
            }
        }
        .nav-menu-active {
            li{
                font-size: 1.5rem;
                text-shadow: 0 0 5px ${ props => props.theme.shadowhighlight};
                color: ${ props => props.theme.colorhighlight};
            }
        }
        

        .nav-icon{
            padding: 0 10px;
        }
        

        img{
            /* padding: 0 10px; */
            width: 40px;
            border: 0 solid black;
            border-radius: 50%;
            :hover{
                box-shadow: 0px 0px 5px #1F4280;
                transition: .25s;
            }
        }
        button{
            padding: 10px 20px;
            background: none;
            ${ props => `
                color: ${props.theme.fontcolor};
                border: 2px solid ${props.theme.borderhighlight};
            `
            }
            border-radius: 45px;
            transition: .25s;
            :hover{
                ${
                    props => `
                        color: ${props.theme.colorhighlight};
                        box-shadow: 0 0 5px ${props.theme.shadowhighlight};
                    `
                }
                transition: .25s;
            }
        }

    }
}

`


export default Nav
