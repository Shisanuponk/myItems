import React, { useState } from "react";
import styled from "styled-components";

// Import Slide Drawer
import AuthSlideDrawer from "../AuthSlideDrawer/AuthSlideDrawer";

const BtnLogin = ({
  theme,
  isLogin,
  setLogin
}) => {
    const [isOpen, setIsOpen] = useState(false)
    
  return (
      <>
        <BtnLoginStyle
          theme={theme}
          onClick={() => setIsOpen(!isOpen)}
        >Login/Register</BtnLoginStyle>

        <AuthSlideDrawer
          theme={theme}
          open={isOpen}
          setOpen={isOpen => setIsOpen(isOpen)}
          isLogin={isLogin}
          setLogin={setLogin}
        />
      </>
  )
};

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

export default BtnLogin;
