import React, { useContext } from 'react'
import styled from 'styled-components'

import ThemeContext, { Themes } from "../../storage/Themes";

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
                        <p>Status: Customer</p>
                        <p>Verify: Facebook</p>
                        <p>Email: elicia-miagu@myitem.com</p>
                        <p>Phone: +66 8-xxx-xxxx</p>
                        <p>Join: 2021-5-1</p>
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

const ProfileBox = styled.div`
padding: 5%;
height: 100%;
background: ${props => props.theme.navcolor};
color: ${props => props.theme.color};
border-radius: 8px;
display: block;
`
const ProfileHeaderBox = styled.div`
display: flex;
position: relative;
border-bottom: 1px solid gray;
h1{
    margin-left: 30%;
    color: ${props => props.theme.colorhighlight};
    position: absolute;
    bottom: 0;
}
`
const CoinBox = styled.div`
width: 400px;
height: 40px;
display: flex;
position: absolute;
bottom: 5%;
right: 0;
justify-content: space-between;
h3{
    margin: 5px 0 0;
    width: 60%;
    text-align: right;
    color: ${props => props.theme.colorhighlight};
}
`
const BtnAddCoin = styled.div`
padding: 2%;
width: 100px;
height: 30px;
color: ${props => props.theme.color};
font-weight: bold;
text-align: center;
border-radius: 45px;
box-shadow: 0 0 5px gray;
transition: .25s;

:hover{
    color: ${props => props.theme.colorhighlight};
    box-shadow: 0 0 5px ${props => props.theme.colorheadhighlight};
    transition: .25s;
}
`
const ProfileImage = styled.img`
padding: 50px;
width: 20%;
height: 20%;
border-radius: 50%;
`

// UserInfo
const ProfileUserInfoBox = styled.div`
margin-top: 2%;
padding: 2%;
display: flex;
`
const UserInfo = styled.div`
padding-right: 2%;
width: 50%;
display: block;
`
const UserInfoBox = styled.div`
padding: 2%;
height: 100%;
background: ${props => props.theme.navcolor};
position: relative;
border-radius: 6px;
box-shadow: 0 0 5px gray;
`
const BtnEditUserInfo = styled.img`
width: 45px;
height: 45px;
position: absolute;
top: 0;
right: 0;
`

const UserInfoMenu = styled.div`
width: 210px;
display: flex;
justify-content: space-between;
position: absolute;
bottom: 5px;
right: 5px;
`
const ButtonMenu = styled.button`
width: 100px;
height: 50px;
background: none;
color: ${props => props.theme.color};
font-weight: bold;
box-shadow: 0 0 5px gray;
transition: .25s;
border: none;
border-radius: 8px;
:hover{
    color: ${props => props.theme.colorhighlight};
    box-shadow: 0 0 5px ${props => props.theme.colorheadhighlight};
    transition: .25s;
}
`

const UserAddr = styled.div`
padding: 1%;
width: 50%;
height: 300px;
overflow: auto;
::-webkit-scrollbar-track{
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 10px;
    background-color: #F5F5F5;
}
::-webkit-scrollbar{
    width: 4px;
    background-color: #F5F5F5;
}
::-webkit-scrollbar-thumb{
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #555;
}
`
const AddrBox = styled.div`
margin-bottom: 1%;
padding: 2%;
height: 100px;
background: ${props => props.theme.navcolor};
border-radius: 6px;
box-shadow: 0 0 5px gray;
overflow: hidden;
`

export default Profile
