import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Profile from './components/profile'
import Attendance from './components/Attendance'
import Performance from './components/performance'
import Events from './components/events'
import { BrowserRouter as Router, Switch,Route,Redirect } from "react-router-dom";
import Login from './components/Login'
ReactDOM.render(
  <Router>
    <Switch>           
      <Route exact path="/login" component={Login}/>
      <Route exact path="/timeline" component={App} />
      <Route exact path="/profile" component={Profile}/>
      <Route exact path="/attendance" component={Attendance}/>
      <Route exact path="/performance" component={Performance}/>
      <Route exact path="/events" component={Events}/>
      <Redirect from="*" to='/timeline'/>
    </Switch>
  </Router>,
  document.getElementById("root")
);
