import React, { Component, Fragment } from "react";
import Header from "../header";
import Sidebar from "../Sidebar";
import Wallpaper from "../wallpaper";
import { Grid, Paper, Tabs, Tab,makeStyles } from "@material-ui/core";

export default class Profile extends Component {
  state = {
    tab: 1
  };
  handleChange = (e, newValue) => {
    this.setState({ tab: newValue });
  };
  render() {
    
    return (
      <Fragment>
        <Header />
        <div className="App">
          <Grid container direction="row" alignItems="stretch">
            <Grid item xs>
              <Sidebar />
            </Grid>
            <Grid item xs={10}>
              <Wallpaper />
              <Grid container>
               <Grid item xs={12}>
                    <Paper variant="fullWidth">
                      <Tabs value={this.state.tab} indicatorColor="primary" textColor="primary" onChange={this.handleChange} aria-label="profile" centered>
                        <Tab label="Personal" />
                        <Tab label="contact" />
                        <Tab label="education" />
                      </Tabs>
                    </Paper>
               </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Fragment>
    );
  }
}
