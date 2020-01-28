import React, { Component, Fragment } from "react";
import Header from "../header";
import Sidebar from "../Sidebar";
import Wallpaper from "../wallpaper";
import { Grid, Paper, Tabs, Tab } from "@material-ui/core";
import VerTabs from '../verTabs'
import axios from 'axios'
export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state={
      user:{},
      tab: 0
    }
    if (!localStorage.getItem('auth-token')) {
       this.props.history.push('/login')
    }
    let token = localStorage.getItem('auth-token');
    if (token) {
      axios.get('https://misback.herokuapp.com/fetchstudent', { headers: { token: token } })
        .then((res) => {
          this.setState({ user: res.data });        
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
  handleChange = (e, newValue) => {
    this.setState({ tab: newValue });
  };
  render() {
    return (
      <Fragment>
        <Header {...this.props}/>
        <div className="App">
          <Grid container direction="row" alignItems="stretch">
            <Grid item xs>
              <Sidebar />
            </Grid>
            <Grid item xs={10}>
            <Wallpaper user={this.state.user}/>
              <Grid container>
                <Grid item xs={12}>
                  <Paper style={{borderRadius:0,borderBottom:'1px solid gray',marginLeft:'5px'}}>
                    <Tabs
                      value={this.state.tab}
                      indicatorColor="primary"
                      textColor="primary"
                      onChange={this.handleChange}
                      aria-label="profile"
                      centered
                    >
                      <Tab label="Personal" />
                      <Tab label="contact" />
                      <Tab label="education" />                                           
                    </Tabs>                    
                  </Paper>
                  <VerTabs value={this.state.tab}/>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Fragment>
    );
  }
}
