import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Result } from "./screens";

const NotFound = () => {
  return <h1>not found</h1>;
};

const App = () => {
  return (
    <Router>
      <div className="main">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Result} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
