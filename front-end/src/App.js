import { Route, Switch } from "react-router-dom";

// Import Components
import Footer from "./components/Footer/Footer";
import MainContent from "./components/MainContent/MainContent";
import Nav from "./components/Nav/Nav";

// Import Styles
import "./App.css";

function App() {
  return (
    <div className="main-app">
      {/* Nav Header */}
      <Nav />

      {/* Router */}
      <Switch>
        <Route path="/">
          <MainContent content="home" />
        </Route>

        <Route path="/store">
          <MainContent content="store" />
        </Route>
        <Route path="/support">
          <MainContent content="support" />
        </Route>
        <Route path="/about">
          <MainContent content="about" />
        </Route>

        <Route path="*">
          <MainContent content="404" />
        </Route>
      </Switch>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
