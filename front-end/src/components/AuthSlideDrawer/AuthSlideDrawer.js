import React from "react";
import { LoginStyle } from './SlideDrawer.styled'
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import OAuth from "./OAuth";

const AuthSlideDrawer = ({ theme, open, setOpen, isLogin, setLogin }) => {
  const fakeUser = {email: "admin@myitems.com", passwd: "1234"}

  // Login
  const Login = userInfo => {
    console.log(userInfo)
    if(userInfo.email == fakeUser.email && userInfo.passwd == fakeUser.passwd){
      console.log("Logged in");
      setLogin(!isLogin)
    } else
      console.log("User Info do not match");
  }

  // Register
  const Register = userInfo => {
    console.log(userInfo);
  }
  
  return (
    <LoginStyle theme={theme} open={open}>
      <button
        className="btn-close"
        onClick={() => setOpen(false)}
      >X</button>

      <h1>Login</h1>
      <LoginForm theme={theme} login={Login} />

      <h1>Register</h1>
      <RegisterForm theme={theme} regist={Register} />

      {/* OAuth */}
      <OAuth theme={theme} />
      
    </LoginStyle>
  );
};

export default AuthSlideDrawer;
