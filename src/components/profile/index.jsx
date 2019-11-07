import React, { Component, Fragment } from "react";
import Header from "../header";
import Sidebar from "../Sidebar";
import Wallpaper from "../wallpaper";
import { Grid, Paper, Tabs, Tab } from "@material-ui/core";
import VerTabs from '../verTabs'

export default class Profile extends Component {
  state = {
    tab: 0
  };
  handleChange = (e, newValue) => {
    this.setState({ tab: newValue });
  };
  render() {
    return <div className="App">      
              <Wallpaper />
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
        </div>
  }
}
