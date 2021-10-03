import React, { useContext, useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';

import ThemeContext, { Themes } from './context/Themes'
import { AppContainer, Content } from './App.styled';
import Nav from "./components/Nav/Nav";
import Routes from './routes/Routes';


function App() {

  const [themes, setThemes] = useState(Themes.light)

  return (
    <Router>
      <ThemeContext.Provider value={[themes, setThemes]}>
        <AppContainer theme={themes}>
          <Nav />
          <Content>
            {/* Routing */}
            <Routes />
          </Content>
        </AppContainer>
      </ThemeContext.Provider>
    </Router>
  );
}


export { ThemeContext };
export default App;
