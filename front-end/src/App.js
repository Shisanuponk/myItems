import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from "styled-components";

// Import Storage
import ThemeContext, {Themes} from './storage/Themes'

// Import Styles
import AppBox from './AppBox';

// Import Component
import Nav from "./components/Nav/Nav";

// Screen
import Home from './screens/HomeSceen/Home'

function App() {

  const [themes, setThemes] = useState(Themes.dark)
  
  return (
    <ThemeContext.Provider value={[themes, setThemes]}>
      <AppBox theme={themes}>
      
      <Nav />

      <Content>

        {/* Routing */}
        <Switch>

          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="*">
            <p>404 Page not found</p>
          </Route>

        </Switch>

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
