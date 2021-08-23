import styled from "styled-components";

// Import Styles
import "./App.css";

// Import Component
import Nav from "./components/Nav";
import Home from "./screens/Home";

const Content = styled.div`
padding: 2% 15%;
min-height: 768px;
overflow: auto;

`

function App() {
  return (
    <div className="main-app">
      
      <Nav />

      <Content>
        <Home />

      </Content>      
    </div>
  );
}

export default App;
