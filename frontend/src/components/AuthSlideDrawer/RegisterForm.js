import React, { useState } from 'react'
import { FormAuth, BtnSubmitForm } from './SlideDrawer.styled'

const RegisterForm = ({ theme ,regist }) => {
    const [userRegister, setUserRegister] = useState({
        username: "",
        email: "",
        passwd: "",
        rePasswd: ""
    })

    const handleSubmit = evt => {
        evt.preventDefault()
        regist(userRegister)
    }
    return (
        <FormAuth theme={theme} onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="First name/Last Name"
                onChange={ e => setUserRegister({...userRegister, username: e.target.value}) }
                value={userRegister.username}
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
                placeholder="Password (minimum 8 character)"
                onChange={ e => setUserRegister({...userRegister, passwd: e.target.value}) }
                value={userRegister.passwd}
                minLength="8"
                required
            />
            <input
                type="password"
                placeholder="Repeat-Password"
                onChange={ e => setUserRegister({...userRegister, rePasswd: e.target.value}) }
                value={userRegister.rePasswd}
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
