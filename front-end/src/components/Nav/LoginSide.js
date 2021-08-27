import React from "react";
import styled from "styled-components";

const LoginStyle = styled.div`
  margin: 0;
  padding: 3.5rem 2rem;
  list-style: none;
  display: flex;
  flex-flow: column nowrap;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  border: 2px solid ${({ theme }) => theme.navborder};
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 400px;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in-out;

  button {
    padding: 10px 20px;
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
    position: fixed;
    top: 1rem;
    right: 1rem;
  }

  form {
    padding: 10px;
    display: block;
    text-align: center;
    * {
      width: 100%;
      text-align: center;
    }
  }
`;

const LoginSide = ({ theme, open, setOpen }) => {
  return (
    <LoginStyle theme={theme} open={open}>
      <button className="btn-close" onClick={() => setOpen(false)}>
        Close
      </button>

      <h1>Login</h1>
      <form>
        <input type="text" placeholder="Username/Email" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
      </form>

      <h1>Regisger</h1>
      <form>
        <input type="text" placeholder="Usernmae" />
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <button>Register</button>
      </form>

      <div>
          <img src="/img/icons/${}" alt="" />
          <img src="/img/icons/${}" alt="" />
      </div>
    </LoginStyle>
  );
};

export default LoginSide;
