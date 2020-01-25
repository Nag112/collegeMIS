import React, { Component } from "react";
import "./timetable.css";
export default class Timetable extends Component {
  state = {
    date: new Date()
  };
  render() {
    return (
      <div className="timeline">
        <h5>Class Time table</h5>
        <hr />
        <div className="timetable row">
          <div className="col-3">
            <h5>Today</h5>
            <h6>
              {this.state.date.getDate() +
                "-" +
                this.state.date.getMonth() +
                1 +
                "-" +
                this.state.date.getFullYear()}
            </h6>
          </div>
          <div className="col-3 time">
            <div className="mb-3 ">
              <h6>09:00</h6>
              <h6>10:00</h6>
            </div>
            <div className="mb-3">
              <h6>10:00</h6>
              <h6>11:00</h6>
            </div>
            <div className="mb-3">
              <h6>11:00</h6>
              <h6>12:00</h6>
            </div>
            <div className="mb-3">
              <h6>12:00</h6>
              <h6>13:00</h6>
            </div>
            <div className="mb-3">
              <h6>14:00</h6>
              <h6>15:00</h6>
            </div>
            <div className="mb-3">
              <h6>15:00</h6>
              <h6>17:00</h6>
            </div>
          </div>
          <div className="col-6">
            <div className="course d-flex justify-content-between">
              <div>
                <h6>AA</h6>
                <p>Roomno. 2D</p>
              </div>
              <p>Dr. B R Purushothama</p>
            </div>
            <div className="course d-flex justify-content-between">
              <div>
                <h6>Graph Theory</h6>
                <p>Roomno. 2D</p>
              </div>
              <p>Dr.S.Mini</p>
            </div>
            <div className="course d-flex justify-content-between">
              <div>
                <h6>DM</h6>
                <p>Roomno. N4</p>
              </div>
              <p>Dr.E.Damodar</p>
            </div>
            <div className="course d-flex justify-content-between">
              <div>
                <h6>Soft Computing</h6>
                <p>Roomno. 2D</p>
              </div>
              <p>Dr.Venkat Naresh Babu</p>
            </div>
            <div className="course d-flex justify-content-between">
              <div>
                <h6>Network Security</h6>
                <p>Roomno. 2D</p>
              </div>
              <p>Dr.Cirag Modi</p>
            </div>
            <div className="course d-flex justify-content-between">
              <div>
                <h6>Major Project</h6>
                <p>Roomno. 2D</p>
              </div>
              <p>Dr.Keshavamurthy.B.N</p>
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}
