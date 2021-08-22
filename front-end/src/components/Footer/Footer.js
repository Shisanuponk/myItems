import React from "react";
import styled from "styled-components";

const FooterBox = styled.div`
  width: 100%;
  height: 100px;
  background: rgb(37, 37, 37);
  color: white;
  text-align: center;
  position: static;
  bottom: 0px;

  div{
      padding: 30px;
  }
`;

const Footer = () => {
  return (
    <FooterBox>
      <div>
        <p>We are myItems Team</p>
        <p>Contact us email@myitems.com</p>
      </div>
    </FooterBox>
  );
};

export default Footer;
