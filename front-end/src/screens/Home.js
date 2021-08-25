import React, { useContext, useState } from "react";
import styled from "styled-components";
import CarouselHome from "../components/HomeContent/CarouselHome";
// import ToggleButton from 'react-toggle-button'
// import HomeBox from '../components/HomeContent/HomeBox'
// import ThemeContext, { Themes } from '../storage/Themes'


 const HomeBox = styled.div`
// //   /* padding: 10px 20px; */
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

          <p>HomePage</p>
          <p>HomePage</p>
          <p>HomePage</p>
          <p>HomePage</p>
          <p>HomePage</p>
          <p>HomePage</p>
          <p>HomePage</p>
          <p>HomePage</p>
          <p>HomePage</p>
          <p>HomePage</p>
          <p>HomePage</p>
          <p>HomePage</p>
          <p>HomePage</p>
          <p>HomePage</p>
          <p>HomePage</p>
          <p>HomePage</p>
          <p>HomePage</p>
          <p>HomePage</p>
          <p>HomePage</p>
          <p>HomePage</p>
          <p>HomePage</p>
          <p>HomePage</p>
          <p>HomePage</p>
        </div>
      </HomeBox>
    
  );
};

export default Home;
