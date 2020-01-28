import React from "react";
import Calendar from "react-calendar";
import Timetable from './components/timetable'
import UpcomAssign from './components/upcomAssign'
import Messenger from './components/messenger'
import Special from './components/todays'
import "./App.css";
import Wallpaper from './components/wallpaper'
import { Grid } from '@material-ui/core'
import ScrollTop from './components/ScrollTop'
import Sidebar from "./components/Sidebar";
import Header from './components/header';
import axios from 'axios'
export default class Timeline extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      user:{}
    }
    if (!localStorage.getItem('auth-token')) {
       this.props.history.push('/login')
    }
    let token = localStorage.getItem('auth-token');
    if (token) {
      axios.get('https://misback.herokuapp.com/fetchstudent', { headers: { token: token } })
        .then((res) => {
          console.log(res.data,'res.data')
          this.setState({ user: res.data },console.log(this.state.user,'naxy'));        
        })
        .catch(err => {
          this.setState({ error: 'caught error' });
          console.log(err);
          if (err.response.status === 403) {
            this.history.push('/')
          }
          else {
            if (err.response.status === 500) {
              this.setState({ user: "an error occured please try again after sometime" })
            }
          }
        });
      }
  }
  
  state = {
    date: new Date(),
    scroll:true
  };

  onChange = date => this.setState({ date });
handleScroll=e=>
{
  //console.log("NagC")
  if(e.target.scrollHeight>10)
  {
    //console.log("NagC")
  }
}
  render() {
    return (
      <div className="App" onScroll={this.handleScroll}>  
      <Header {...this.props}/>
      <Grid container direction="row" spacing={1}>
        <Grid item xs={2}><Sidebar/></Grid>
             <Grid item xs={10}>
                <Wallpaper user={this.state.user}/>
                <Grid container direction="row">
                   <Grid item xs={7}>
                     <Timetable />
                     <Special />
                   </Grid>
                  <Grid item xs={5}> 
                    <Calendar onChange={this.onChange} value={this.state.date} />
                    <UpcomAssign />
                  </Grid>
                </Grid>
            <Messenger /> 
             </Grid>
      </Grid>
        {this.state.scroll && <ScrollTop/> }
      </div>
    );
  }
}
