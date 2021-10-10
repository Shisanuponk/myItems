import React from 'react'
import BtnFacebookLogin from './BtnFacebookLogin'
import BtnGoogleLogin from './BtnGoogleLogin'
import { IconOAuth } from './SlideDrawer.styled'
const OAuth = ({theme}) => {
    return (
        <IconOAuth theme={theme}>
            <h3>Login By Socail Media</h3>
            <BtnFacebookLogin icon={theme.iconfacebook} />
            <BtnGoogleLogin icon={theme.icongoogle} />
            <img src={`./img/icons/${theme.icontwitter}`} />
            <img src={`./img/icons/${theme.iconline}`} />
        </IconOAuth>
    )
}

export default OAuth
