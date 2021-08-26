import React, { useContext, useState } from "react";
import styled from "styled-components";
import CarouselHome from "../components/HomeContent/CarouselHome";
import 'bootstrap/dist/css/bootstrap.min.css';


 const HomeBox = styled.div`
    width: 100%;
   color: #c9d1d9;
   background: #0d1117;
   border: 1px solid #ffcc44;

 `;

const Home = () => {
    
  return (
    
    
      <HomeBox>
        <div>
          <h1 style={{ textAlign: "center" }}>Welcome to My Item </h1>
          <CarouselHome />
        </div>
      </HomeBox>
    
  );
};

export default Home;
