import React from "react";
import { LoginStyle } from './SlideDrawer.styled'
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import OAuth from "./OAuth";

const AuthSlideDrawer = ({
  theme,
  open,
  setOpen,
  isLogin,
  setLogin
}) => {

  return (
    <LoginStyle theme={theme} open={open}>
      <button
        className="btn-close"
        onClick={() => setOpen(false)}
      >X</button>

      <h1>Login</h1>
      <LoginForm
        theme={theme}
        isLogin={isLogin}
        setLogin={setLogin}
        open={open}
        setOpen={open => setOpen(open)}
      />

      <h1>Register</h1>
      <RegisterForm
        theme={theme}
        isLogin={isLogin}
        setLogin={setLogin}
        open={open}
        setOpen={open => setOpen(open)}
      />

      {/* OAuth */}
      <OAuth theme={theme} />

    </LoginStyle>
  );
};

export default AuthSlideDrawer;
