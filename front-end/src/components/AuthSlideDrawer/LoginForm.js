import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FormAuth, BtnSubmitForm } from './SlideDrawer.styled'

const LoginForm = ({theme, login}) => {
    const [userLogin, setUserLogin] = useState({ email: "", passwd: "" })

    const handleSubmit = evt => {
        evt.preventDefault()
        console.log(`login by[email: ${userLogin.passwd}, passwd: ${userLogin.email}]`);
        login(userLogin)
    }
    return (
        <FormAuth theme={theme} onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Username/Email"
                onChange={e => setUserLogin({...userLogin, email: e.target.value})}
                value={userLogin.email}
                required
            />
            <input
                type="password"
                placeholder="Password"
                onChange={e => setUserLogin({...userLogin, passwd: e.target.value})}
                value={userLogin.passwd}
                required
            />
            <BtnSubmitForm theme={theme}>Login</BtnSubmitForm>
            <br />
            <NavLink to="#" className="form-link" >Forgot my password</NavLink>
        </FormAuth>
    )
}


export default LoginForm
