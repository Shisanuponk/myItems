import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from "styled-components";

// Import Storage
import ThemeContext, {Themes} from './storage/Themes'

// Import Styles
import "./App.css";

// Import Component
import Nav from "./components/Nav";
import Home from "./screens/Home";

function App() {

  const [themes, setThemes] = useState(Themes.dark)

  return (
    <ThemeContext.Provider value={[themes, setThemes]}>
      <div className="main-app">
      
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
    </div>
    </ThemeContext.Provider>
  );
}

// Style
// Style Content
const Content = styled.div`
padding: 2% 15%;
overflow: auto;
`

export { ThemeContext };
export default App;
