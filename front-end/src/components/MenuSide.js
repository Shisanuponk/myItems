import React from 'react'
import styled from 'styled-components'

const MenuStyle = styled.ul`

    list-style: none;
    display: ${({open}) => open ? 'flex':'none'};
    flex-flow: column nowrap;
    
    background: white;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform .3s ease-in-out;

    li {
        padding-top: 18px 10px;
        color: #fff;
    }

`

const MenuSide = ({open}) => {
    return (
        <MenuStyle open={open}>
            <li>Home</li>
            <li>Store</li>
            <li>MerChant</li>
            <li>Support</li>
        </MenuStyle>
    )
}

export default MenuSide
