import React, { useContext, useState } from "react";


// Import Styled Components HomePage
import HomePage from './HomePage'

// Import Components
import ThemeContext, { Themes } from '../../storage/Themes'
import SlideCarousel from "./SlideCarousel";

const Home = () => {

  const [themes, setThemes] = useContext(ThemeContext)

  console.log(themes.color);
    
  return (
    
      <HomePage theme={themes}>
        <div className="header-title">
          <h1>Welcome to My Item </h1>
          <SlideCarousel />
        </div>
      </HomePage>
    
  );
};

export default Home;
