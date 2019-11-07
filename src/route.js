import React from "react";
import Timeline from "./timeline";
import Profile from './components/profile'
import Attendance from './components/Attendance'
import Performance from './components/performance'
import {  Switch,Route,Redirect } from "react-router-dom";
import Login from './components/Login'
export default function Routes(props){
    return  <Switch>           
      <Route exact path="/login" component={Login}/>
      <Route exact path="/timeline" component={Timeline} />
      <Route exact path="/profile" component={Profile}/>
      <Route exact path="/attendance" component={Attendance}/>
      <Route exact path="/performance" component={Performance}/>
      <Redirect from="*" to='/timeline'/>
    </Switch>
}
  
