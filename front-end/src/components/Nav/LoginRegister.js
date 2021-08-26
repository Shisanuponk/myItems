import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const StylePage = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    flex-flow: column nowrap;
    
    background: ${({theme}) => theme.background};
    border: 2px solid ${({theme}) => theme.navborder};
    box-shadow: 0 0 5px ${({theme}) => theme.shadowhighlight};
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 20%;
    padding-top: 3.5rem;
    transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform .3s ease-in-out;

    * {
        /* padding-top: 18px 10px; */
        font-size: 20px;
        color: ${({theme}) => theme.color};
        list-style: none;
        transition: .25s;

        :hover{
            color: ${({theme}) => theme.colorhighlight};
            transition: .25s;
        }
    }

`

const FormBox = styled.div`

    margin: 0;
    padding: 40px;
    /* width: ; */
    font-size: 20px;
    color: ${({theme}) => theme.color};
    
    form > * {
        margin: 5px 0px;
        width: 100%;
        display: block;
        text-align: center;
    }

`

const LoginRegister = ({theme, open}) => {
    // const [isOpen, setIsOpen] = useState(open)
    console.log(`open = ${open}`);
    // console.log(`isOpen = ${isOpen}`);
    
    return (
        <StylePage theme={theme} open={open}>
            <FormBox>
                <form>
                    <h1>Login</h1>
                    <input type="text" placeholder="Email / Username" />
                    <input type="password" placeholder="Password" />
                    <input type="submit" value="Login" />
                </form>
            </FormBox>

            <FormBox>
                <form>
                    <h1>Register</h1>
                    <input type="text" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <input type="password" placeholder="Confirm Password" />
                    <input type="submit" value="Register" />
                </form>
            </FormBox>

            <button>Close</button>
        </StylePage>
    )
}

export default LoginRegister
