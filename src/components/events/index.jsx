import React, { Fragment } from 'react'
import axios from 'axios'
import {Grid} from '@material-ui/core'
import Header from '../header';
import Sidebar from "../Sidebar";
export default class Events extends React.Component
{
  verifyEvent()
  {
axios.post().then().catch();
  }
    render()
    {
        return <Fragment>
           <Header {...this.props}/>
        <Grid container spacing={1}>
          <Grid item xs={2}>  <Sidebar/></Grid>
              <Grid item xs={10} className="perGrid">
              <div className="event-container">
    <form className="event-form" onSubmit={this.verifyEvent}>
  <span className="title text-center ">
    <h3 className="mb-3">Events</h3>
  </span>
  <select name="events" className="custom-select-sm">
  <option selected>Please select an option</option>
  <option value="one">Freshers</option>
  <option value="Two">TS kala vedika</option>
  <option value="Three">College dance competion</option>
</select>
  <div className="custom-file">
  <input type="file" className="custom-file-input text-dark bg-dark" id="customFile"/>
  <label className="custom-file-label text-dark" for="customFile">Choose file</label>
  </div>
  <h6 className="error text-danger mb-3">&nbsp;</h6>
  <div className="button">
    <button className="btn btn-dark mx-auto">
      Submit
    </button>
  </div>
</form>
  </div>
</Grid>
</Grid>
</Fragment>

    }
}
