import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Profile from './components/profile'
import { BrowserRouter as Router, Switch,Route,Redirect } from "react-router-dom";
import Login from './components/Login'
ReactDOM.render(
  <Router>
    <Switch>      
      <Route exact path="/" component={Login}/>
      <Route exact path="/timeline" component={App} />
      <Route exact path="/profile" component={Profile}/>
      <Redirect from="*" to='/timeline'/>
    </Switch>
  </Router>,
  document.getElementById("root")
);
