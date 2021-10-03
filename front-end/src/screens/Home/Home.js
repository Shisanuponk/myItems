import React, { useContext, useEffect, useState } from "react";
import axios from 'axios';

// Import Styled Components HomePage
import HomePage from './HomePage'

// Import Components
import ThemeContext from '../../context/Themes'

const Home = () => {

  const [themes, setThemes] = useContext(ThemeContext)
  const [data, setData] = useState("")
  
  const getData = async () => {
    try{
      const res = await axios.get("http://localhost:5000/getdata")
      setData(res)
      console.log(res);
    }catch(error){
      console.log(error);
    }
  }
    
  return (
    
      <HomePage theme={themes}>
        <div className="header-title">
          <h1>Welcome to My Item </h1>
          <p>API: {data}</p>
        </div>
      </HomePage>
    
  );
};

export default Home;
