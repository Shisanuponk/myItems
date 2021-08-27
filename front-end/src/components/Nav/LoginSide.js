import React from "react";
import styled from "styled-components";

const LoginStyle = styled.div`
  margin: 0;
  padding: 3.5rem 2rem;
  display: flex;
  flex-flow: column nowrap;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  border-left: 2px solid ${({ theme }) => theme.navborder};
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 300px;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in-out;

  .auth-icons{
    padding: 10px;
    display: block;
    /* background: white; */
    img {
      margin: 5px;
      width: 45px;
      border: 1px solid ${props => props.theme.navborder};
    }
  }

  .btn-form {
    margin-top: 10px;
    padding: 10px 20px;
    width: 100px;
    background: none;
    font-weight: bold;

    ${(props) => `
                color: ${props.theme.color};
                border: 2px solid ${props.theme.borderhighlight};
            `}
    border-radius: 45px;
    transition: 0.25s;
    :hover {
      ${(props) => `
                        color: ${props.theme.colorhighlight};
                        box-shadow: 0 0 5px ${props.theme.shadowhighlight};
                    `}
      transition: .25s;
    }
  }

  .btn-close {
    width: 30px;
    height: 30px;
    position: fixed;
    top: 1rem;
    right: 1rem;
    border-radius: 50px;
  }

  form {
    padding: 10px;
    /* display: block; */
    text-align: right;
    .group-input {
      display: flex;
      
      > input{
        margin: 0px 2px;
      }
    }
    input {
      margin-top: 5px;
      width: 100%;
      height: 30px;
      background: ${({theme}) => theme.background};
      border: 1px solid ${({theme}) => theme.navborder};
      text-align: center;
    }
  }

  
`;

const LoginSide = ({ theme, open, setOpen }) => {
  return (
    <LoginStyle theme={theme} open={open}>
      <button className="btn-close" onClick={() => setOpen(false)}>X</button>

      <h1>Login</h1>
      <form>
        <input type="text" placeholder="Username/Email" />
        <input type="password" placeholder="Password" />
        <button className="btn-form">Login</button>
      </form>
      <h1>Regisger</h1>
      <form>
        <div className="group-input">
        <input type="text" placeholder="Usernmae" />
        <input type="text" placeholder="Email" />
        </div>
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <input type="text" placeholder="Phone" />
        <button className="btn-form">Register</button>
      </form>

      <div className="auth-icons">
        <h3>Login By Socail Media</h3>
          <img src={`./img/icons/${theme.iconfacebook}`} />
          <img src={`./img/icons/${theme.icongoogle}`} />
          <img src={`./img/icons/${theme.icontwitter}`} />
          <img src={`./img/icons/${theme.iconline}`} />
      </div>

    </LoginStyle>
  );
};

export default LoginSide;
