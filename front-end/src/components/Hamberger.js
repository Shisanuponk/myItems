import React, { useState } from 'react'
import styled from 'styled-components'
import MenuSide from './MenuSide'

const BergerStyle = styled.div`
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 15px;
    right: 25px;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    z-index: 90;

    :hover{
        > * {
            /* background: white; */
            box-shadow: 0 0 10px ${ props => props.myTheme.colorheadhighlight};
        }
    }

    div{
        width: 2rem;
        height: 0.25rem;
        background: ${({ open, myTheme }) => open ? myTheme.colorhighlight : myTheme.colorhighlight};
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 0.3s linear;

        &:nth-child(1) {
            transform: ${({open}) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }
        &:nth-child(2) {
            transform: ${({open}) => open ? 'translateX(100%)' : 'translateX(0)'};
            opacity: ${({open}) => open ? '0' : '1'};
        }
        &:nth-child(3) {
            transform: ${({open}) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }
`

const Hamberger = ({ theme }) => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
        <BergerStyle myTheme={theme} open={isOpen} onClick={() => setIsOpen(!isOpen)} >
            <div />
            <div />
            <div />
        </BergerStyle>
        <MenuSide open={isOpen} />
        </>
    )
}

export default Hamberger
