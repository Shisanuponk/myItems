import React, { useContext, useState } from "react";
import styled from "styled-components";

// Import Styled Components HomePage
import HomePage from './HomePage'

// Import Components
import ThemeContext, { Themes } from '../../storage/Themes'
import Carousel from "./Carousel";

const Home = () => {

  const [themes, setThemes] = useContext(ThemeContext)

  console.log(themes.color);
    
  return (
    
      <HomePage theme={themes}>
        <div className="header-title">
          <h1>Welcome to My Item </h1>
          <Carousel />
        </div>
      </HomePage>
    
  );
};

export default Home;
