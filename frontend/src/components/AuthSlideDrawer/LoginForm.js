import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { loginAPI } from '../../api/api'
import { FormAuth, BtnSubmitForm } from './SlideDrawer.styled'

const LoginForm = ({
    theme,
    isLogin,
    setLogin,
    open,
    setOpen
}) => {
    const [userLogin, setUserLogin] = useState({ email: "", password: "" })
    const [error, setError] = useState("")

    const handleSubmit = async evt => {
        evt.preventDefault()

        try{
            const { email, password} = userLogin
            const { data } = await loginAPI(email, password)

            localStorage.setItem("jwt", data.token)
            setUserLogin({...userLogin, email: "", password: ""})
            setOpen(!open)
            setLogin(!isLogin)
        } catch (err) {
            setError(err.response.data.error)
            setTimeout( () => {
                setError("")
            }, 5000)
        }
    }
    return (
        <FormAuth theme={theme} onSubmit={handleSubmit}>
            {error && <p>{error}</p>}
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
                onChange={e => setUserLogin({...userLogin, password: e.target.value})}
                value={userLogin.password}
                required
            />
            <BtnSubmitForm theme={theme}>Login</BtnSubmitForm>
            <br />
            <NavLink to="/forgotpassword" className="form-link" >Forgot my password</NavLink>
        </FormAuth>
    )
}


export default LoginForm
