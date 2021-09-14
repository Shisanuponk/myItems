import React from 'react'
import { GoogleLogin } from 'react-google-login'

const BtnGoogleLogin = ({ icon }) => {

    const googleSuccess = async (res) => {
        console.log("success => ", res);
    }
    const googleFailure = (err) => {
        console.log(err);
    }
    return (
        <GoogleLogin
            clientId="203412094120-1r14ohficmc1pr2je16j3chgafhgjuu7.apps.googleusercontent.com"
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
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
