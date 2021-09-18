import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from "styled-components";

// Import Storage
import ThemeContext, {Themes} from './storage/Themes'
// Import Styles
import AppBox from './AppBox';
// Import Component
import Nav from "./components/Nav/Nav";
// Navigator
import Routes from './components/Routes';


function App() {

  const [themes, setThemes] = useState(Themes.light)
  
  return (
    <ThemeContext.Provider value={[themes, setThemes]}>
      <AppBox theme={themes}>
      
      <Nav />

      <Content>

        {/* Routing */}
        <Routes />

      </Content>      
    </AppBox>
    </ThemeContext.Provider>
  );
}
// Style Content
const Content = styled.div`
padding: 2% 15%;
overflow: auto;
`

export { ThemeContext };
export default App;
