import axios from 'axios'
import React from 'react'
import { GoogleLogin } from 'react-google-login'
import { authGoogle } from '../../api/Oauth'


const BtnGoogleLogin = ({ icon }) => {
    const googleSuccess = async (res) => {
        console.log("success => ", res);
        const {
            tokenObj: { access_token },
            profileObj: { googleId, email, name }
        } = res

        const user = { userId: googleId, name }

        const {data} = await axios.post(
            'http://localhost:5000/api/oauth/google',
            {user}
        )
        localStorage.setItem("jwt", data.token)
    }
    const googleFailure = (err) => {
        console.log(err);
    }
    return (
        <GoogleLogin
            clientId={authGoogle.clientId}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy={authGoogle.cookiePolicy}
            render={ renderProps =>
                <img
                    src={`./img/icons/${icon}`}
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                />
            }
        />
    )
}

export default BtnGoogleLogin
