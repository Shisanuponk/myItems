import React, { useState } from "react";
import styled from "styled-components";

// Import right page
import LoginSide from "./LoginSide";

const BtnLoginStyle = styled.button`
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
`;

const BtnLogin = ({ theme }) => {

    const [isOpen, setIsOpen] = useState(false)
  return (
      <>
        <BtnLoginStyle theme={theme} onClick={() => setIsOpen(!isOpen)}>Login/Register</BtnLoginStyle>
        <LoginSide theme={theme} open={isOpen} setOpen={isOpen => setIsOpen(isOpen)} />
      </>
  )
};

export default BtnLogin;
