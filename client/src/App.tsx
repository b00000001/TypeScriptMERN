import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/index";
import Home from "./components/Home/index";
import LoginSignup from "./components/LoginSignup/index";
import "./App.css";

function App() {
  console.log("West");
  return (
    <div className="App bg-gray-800 h-screen">
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path="/homepage">
              <Home />
            </Route>
            <Route path="/test">
              <LoginSignup />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
