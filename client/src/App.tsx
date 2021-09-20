import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Test from "./pages/Test";
import "./App.css";

function App() {
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
              <Test />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
