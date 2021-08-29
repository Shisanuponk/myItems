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
import Store from './screens/Store/Store'
import Merchant from './screens/Merchant'
import Support from './screens/Support'
import Cart from './screens/Cart'
import Favorite from './screens/Favorite'

function App() {

  const [themes, setThemes] = useState(Themes.light)
  
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
          
          <Route path="/store" exact>
            <Store />
          </Route>

          <Route path="/merchant" exact>
            <Merchant />
          </Route>

          <Route path="/support" exact>
            <Support />
          </Route>

          <Route path="/profile/id=:userId" exact>
            <h1>User Profile</h1>
          </Route>

          <Route path="/cart" exact>
            <Cart />
          </Route>

          <Route path="/favorite" exact>
            <Favorite />
          </Route>

          <Route path="*" exact>
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
