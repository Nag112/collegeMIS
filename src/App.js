import React, { Fragment } from "react";
import Sidebar from "./components/Sidebar";
import Calendar from "react-calendar";
import Timetable from './components/timetable'
import UpcomAssign from './components/upcomAssign'
import Messenger from './components/messenger'
import "./App.css";
import Header from './components/header'
import Wallpaper from './components/wallpaper'
export default class App extends React.Component {
  constructor(props)
  {
    super(props);
    if(!localStorage.getItem('auth-token'))
    {
      this.props.history.push('/login')
    }
  }
  state = {
    date: new Date(),
    login:false
  };
  login=()=>
  {
    this.setState({login:true},console.log(this.state.login))
  }
  onChange = date => this.setState({ date });

  render() {
    return (   
      <Fragment>
        <Header/>
        <div className="App">
          <Sidebar />
          <Wallpaper/>
          <Calendar className="calendar" onChange={this.onChange} value={this.state.date}/>
         <Timetable/>
         <UpcomAssign/>
         </div>
        <Messenger/>
      </Fragment>
    );
  }
}
