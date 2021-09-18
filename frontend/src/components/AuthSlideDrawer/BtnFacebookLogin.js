import React from 'react'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import axios from 'axios'

const BtnFacebookLogin = ({ icon }) => {

    const UserSignIn = async response => {
        const { name, email, accessToken, userID } = response
        const user = { name, email, accessToken, userId: userID }

        await axios({
            method: 'post',
            url: 'http://localhost:4000/signin/facebook',
            data: {
                user
            }
        })
    }

    const responseFacebook = (res) => {
        console.log(res);
    }

    return (
        <FacebookLogin
            appId="360631949091496"
            // autoLoad={true}
            fields="name,email"
            scope="public_profile, email"
            callback={UserSignIn}
            render={renProps => (
                <img
                    src={`./img/icons/${icon}`}
                    onClick={renProps.onClick}
                />
            )}
        />
    )
}

export default BtnFacebookLogin
