import React, { useContext } from "react";

// Import Styled Components HomePage
import HomePage from './HomePage'

// Import Components
import ThemeContext from '../../storage/Themes'
import SlideCarousel from "./SlideCarousel";
import UploadImageProduct from "../../components/Upload/UploadImageProduct";

const Home = () => {

  const [themes, setThemes] = useContext(ThemeContext)

  console.log(themes.color);
    
  return (
    
      <HomePage theme={themes}>
        <div className="header-title">
          <h1>Welcome to My Item </h1>
          <UploadImageProduct />
          <SlideCarousel />
        </div>
      </HomePage>
    
  );
};

export default Home;
