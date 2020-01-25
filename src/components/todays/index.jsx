import React, { Component } from "react";
import "./style.css";
export default class Special extends Component {
  render() {
    return (
      <div className="special">
        <h5>Today's Tasks</h5>
        <hr />
        <div className="timetable row">
          <div className="col-3">
            <div className="mb-3 ">
              <h6>Test</h6>
              <h6>&nbsp;</h6>
            </div>
            <div className="mb-3 ">
              <h6>Presentation</h6>
              <h6>&nbsp;</h6>
            </div>
          </div>
          <div className="col-3 time">
            <div className="mb-3 ">
              <h6>11:00</h6>
              <h6>12:00</h6>
            </div>
            <div className="mb-3 ">
              <h6>14:00</h6>
              <h6>15:00</h6>
            </div>
          </div>
          <div className="col-6">
            <div className="course d-flex justify-content-between">
              <div>
                <h6>DM</h6>
                <p>Roomno. N4</p>
              </div>
              <p>Dr.E.Damodar</p>
            </div>
            <div className="course d-flex justify-content-between">
              <div>
                <h6>Network Security</h6>
                <p>Roomno. 2D</p>
              </div>
              <p>Dr.Chirag Modi</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
