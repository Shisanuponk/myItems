import React, { useContext } from 'react'

import ThemeContext, { Themes } from "../../../context/Themes";
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

    return (
        <ProfileBox theme={themes}>
            <ProfileHeaderBox theme={themes} >
                <ProfileImage src="./img/user-img2.jpg" />
                <h1>Elicia Miagu</h1>
                <CoinBox theme={themes} >
                    <h3>2000 Coins</h3>
                    <BtnAddCoin theme={themes}>Add Coins</BtnAddCoin>
                </CoinBox>
            </ProfileHeaderBox>
            <ProfileUserInfoBox>
                <UserInfo>
                    <UserInfoBox>
                        <BtnEditUserInfo src={`./img/icons/${themes.iconedit}`} />
                        <p>Status: verify</p>
                        <p>Verify: -</p>
                        <p>Email: -</p>
                        <p>Phone: -</p>
                        <p>Join: -</p>
                        <UserInfoMenu>
                            <ButtonMenu theme={themes}>My Orders</ButtonMenu>
                            <ButtonMenu theme={themes}>Join Us</ButtonMenu>
                        </UserInfoMenu>
                    </UserInfoBox>
                </UserInfo>
                <UserAddr theme={themes}>
                    <AddrBox theme={themes}>
                        <h3>Home</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi beatae iusto placeat quisquam, dolore voluptas deleniti, iste sunt quia ducimus mollitia quos animi natus ex neque consectetur nostrum quis nihil!</p>
                    </AddrBox>
                    <AddrBox theme={themes}>
                        <h3>Home</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi beatae iusto placeat quisquam, dolore voluptas deleniti, iste sunt quia ducimus mollitia quos animi natus ex neque consectetur nostrum quis nihil!</p>
                    </AddrBox>
                    <AddrBox theme={themes}>
                        <h3>Home</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi beatae iusto placeat quisquam, dolore voluptas deleniti, iste sunt quia ducimus mollitia quos animi natus ex neque consectetur nostrum quis nihil!</p>
                    </AddrBox>
                    <AddrBox theme={themes}>
                        <h3>Home</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi beatae iusto placeat quisquam, dolore voluptas deleniti, iste sunt quia ducimus mollitia quos animi natus ex neque consectetur nostrum quis nihil!</p>
                    </AddrBox>
                    <AddrBox theme={themes}>
                        <h3>Home</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi beatae iusto placeat quisquam, dolore voluptas deleniti, iste sunt quia ducimus mollitia quos animi natus ex neque consectetur nostrum quis nihil!</p>
                    </AddrBox>
                </UserAddr>
            </ProfileUserInfoBox>
        </ProfileBox>
    )
}


export default Profile
