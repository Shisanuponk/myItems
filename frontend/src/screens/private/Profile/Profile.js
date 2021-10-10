import React, { useContext, useEffect, useState } from 'react'
import { getUser } from '../../../api/api';

import ThemeContext from "../../../context/Themes";
import {
    ProfileBox,
    ProfileHeaderBox,
    CoinBox,
    BtnAddCoin,
    ProfileImage,
    ProfileUserInfoBox,
    UserInfo,
    UserInfoBox,
    BtnEditUserInfo,
    UserInfoMenu,
    ButtonMenu,
    UserAddr,
    AddrBox
} from './Profile.styled'

const Profile = () => {
    const [themes, setThemes] = useContext(ThemeContext);
    const [user, setUser] = useState("")
    const [addrs, setAddrs] = useState("")

    const getUserInfo = async () => {
        try {
            const {data} = await getUser()
            setUser(data.data)
        } catch (error) {
            localStorage.removeItem("jwt")
            alert(error)
        }
    }

    // For loading user's data when called this page
    useEffect(() => {
        if(localStorage.getItem("jwt")){
            getUserInfo()
            console.log('user --> ', user);
        }
            
    }, [])
    
    

    return (
        <ProfileBox theme={themes}>
            <ProfileHeaderBox theme={themes} >
                <ProfileImage src="./img/user-img2.jpg" />
                <h1>{user.name}</h1>
                <CoinBox theme={themes} >
                    <h3>{`${user.coins} Coins`}</h3>
                    <BtnAddCoin theme={themes}>Add Coins</BtnAddCoin>
                </CoinBox>
            </ProfileHeaderBox>
            <ProfileUserInfoBox>
                <UserInfo>
                    <UserInfoBox>
                        <BtnEditUserInfo src={`./img/icons/${themes.iconedit}`} />
                        <p>Authorities: {user.authorities}</p>
                        <p>Join: {user.join}</p>
                        <UserInfoMenu>
                            <ButtonMenu theme={themes}>My Orders</ButtonMenu>
                            <ButtonMenu theme={themes}>Join Us</ButtonMenu>
                        </UserInfoMenu>
                    </UserInfoBox>
                </UserInfo>
                <UserAddr theme={themes}>
                    {/* <AddrBox theme={themes}>
                        <h3>{user.address[0].addrName}</h3>
                        <p>{user.address[0].addrInfo}</p>
                    </AddrBox> */}
                </UserAddr>
            </ProfileUserInfoBox>
        </ProfileBox>
    )
}


export default Profile
