import React from 'react'
import styled from 'styled-components'

const MenuStyle = styled.ul`
    margin: 0;
    list-style: none;
    display: flex;
    flex-flow: column nowrap;
    
    background: ${({theme}) => theme.background};
    border: 2px solid ${({theme}) => theme.navborder};
    border-top-left-radius: 25px;
    box-shadow: 0 0 5px ${({theme}) => theme.shadowhighlight};
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 60%;
    padding-top: 3.5rem;
    transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform .3s ease-in-out;

    li {
        /* padding-top: 18px 10px; */
        font-size: 30px;
        color: ${({theme}) => theme.color};
        transition: .25s;

        :hover{
            color: ${({theme}) => theme.colorhighlight};
            transition: .25s;
        }
    }

`

const MenuSide = ({ theme, open }) => {
    return (
        <MenuStyle theme={theme} open={open}>
            <li>Home</li>
            <li>Store</li>
            <li>MerChant</li>
            <li>Support</li>
        </MenuStyle>
    )
}

export default MenuSide
