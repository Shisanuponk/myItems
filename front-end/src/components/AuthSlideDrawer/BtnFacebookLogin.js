import React from 'react'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import axios from 'axios'
import { authFacebook } from '../../api/Oauth'

const BtnFacebookLogin = ({ icon }) => {

    const UserSignIn = async response => {
        console.log('res --> ', response);
        const { name, email, accessToken, userID } = response
        const user = { name, email, accessToken, userId: userID }

        await axios.post(
            'http://localhost:5000/api/oauth/facebook',
            {user}
        )
    }

    const responseFacebook = (res) => {
        console.log(res);
    }

    return (
        <FacebookLogin
            appId={authFacebook.appId}
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
