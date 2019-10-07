import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";
import Login from './components/Login'
ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/login" component={Login}/>
    </Switch>
  </Router>,
  document.getElementById("root")
);
