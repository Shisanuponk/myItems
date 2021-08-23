import React from 'react'
import styled from 'styled-components'

// Import themes
import Themes from '../data/Themes'


// NavBox Style
const NavBox = styled.div`
padding: 0 10px;
/* width: 100%; */
height: 55px;
position: sticky;
top: 0;
display: flex;
justify-content: space-between;

${ props => `
background: ${props.theme.navcolor};
box-shadow: 0 5px 5px ${props.theme.navshadow};
`
}

`

// LogoBox Style
const LogoBox = styled.div`
padding: 10px;
`

// MenuPageRoute Component
const MenuPageRoute = styled.div`
padding: 10px;

ul{
    padding: 10px;
    list-style: none;
    display: flex;

    li{
        padding: 0 10px;
    }

}
`
// UserInfo
const UserInfo = styled.div`
padding: 10px;

ul{
    padding: 10px;
    list-style: none;
    display: flex;

    li{
        padding: 0 10px;
    }

}
`

const Nav = () => {
    const filterTheme = Themes.filter(i => i.name === "light")
    const myTheme = filterTheme[0].theme
    // console.log(myTheme.navcolor);

    return (
        <NavBox theme={myTheme}>
            <LogoBox>
                <h2>myItems</h2>
            </LogoBox>

            <MenuPageRoute>
                <ul>
                    <li>Home</li>
                    <li>Store</li>
                    <li>Merchant</li>
                    <li>Support</li>
                </ul>
            </MenuPageRoute>

            <UserInfo>
                <ul>
                    <li>img</li>
                    <li>name</li>
                    <li>cart</li>
                    <li>favorite</li>
                </ul>
            </UserInfo>
        </NavBox>
    )
}

export default Nav
