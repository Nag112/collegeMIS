import React, { Fragment } from "react";
import Sidebar from "./components/Sidebar";
import Calendar from "react-calendar";
import Timetable from './components/timetable'
import UpcomAssign from './components/upcomAssign'
import Messenger from './components/messenger'
import "./App.css";
import Header from './components/header'

import Profile from './components/profile'
export default class App extends React.Component {
  state = {
    date: new Date()
  };
  onChange = date => this.setState({ date });
  render() {
    return (
      <Fragment>
        <Header/>
        <div className="App">
          <Sidebar />
          <Profile/>
          <Calendar className="calendar" onChange={this.onChange} value={this.state.date}/>
         <Timetable/>
         <UpcomAssign/>
         </div>
        <Messenger/>
      </Fragment>
    );
  }
}
