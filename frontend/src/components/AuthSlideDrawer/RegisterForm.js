import React, { useState, useEffect } from 'react'
import { registerAPI } from '../../api/api'

// Import Styled
import { FormAuth, BtnSubmitForm } from './SlideDrawer.styled'


const RegisterForm = ({
    theme,
    isLogin,
    setLogin,
    open,
    setOpen
}) => {
    const [userRegister, setUserRegister] = useState({
        name: "",
        email: "",
        password: "",
        repeatPassword: ""
    })
    const [error, setError] = useState("")

    const handleSubmit = async evt => {
        evt.preventDefault()

        if(userRegister.password !== userRegister.repeatPassword){
            setUserRegister({...userRegister, password: "", repeatPassword: ""})
            setTimeout(() => {
                setError("")
            }, 5000)
            return setError("Passwords don't match")
        }

        try{
            const { name, email, password} = userRegister
            const { data } = await registerAPI(name, email, password)

            localStorage.setItem("jwt", data.token)
            setUserRegister({
                ...userRegister,
                name: "",
                email: "",
                password: "",
                repeatPassword: ""
            })
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
                placeholder="First name/Last Name"
                onChange={ e => setUserRegister({...userRegister, name: e.target.value}) }
                value={userRegister.name}
                required
            />
            <input
                type="email"
                placeholder="Email"
                onChange={ e => setUserRegister({...userRegister, email: e.target.value}) }
                value={userRegister.email}
                required
            />
            <input
                type="password"
                placeholder="Password (minimum 6 character)"
                onChange={ e => setUserRegister({...userRegister, password: e.target.value}) }
                value={userRegister.password}
                minLength="6"
                required
            />
            <input
                type="password"
                placeholder="Repeat-Password"
                onChange={ e => setUserRegister({...userRegister, repeatPassword: e.target.value}) }
                value={userRegister.repeatPassword}
                required
            />
            <BtnSubmitForm
                theme={theme}
                type="submit"
            >
                Register
            </BtnSubmitForm>
        </FormAuth>
    )
}

export default RegisterForm
