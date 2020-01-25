import React, { Component } from "react";
import "./style.css";
export default class UpcomAssign extends Component {
  state = {
    date: new Date()
  };
  render() {
    return (
      <div className="comingAssigns">
        <h6>Upcoming Assignments</h6>
        <hr />
        <div className="assign-list">
          <div className="card mb-1">
            <div className="card-head my-0 py-0">Assignment No. :{2}</div>
            <div className="card-body py-0 text-center">AA</div>
            <div className="card-footer text-danger">
              Deadline:
              {this.state.date.getDate() +
                "-" +
                this.state.date.getMonth() +
                1 +
                "-" +
                this.state.date.getFullYear() +
                " " +
                "17:00"}
            </div>
          </div>
          <div className="card mb-1">
            <div className="card-head my-0 py-0">Assignment No. :{1}</div>
            <div className="card-body py-0 text-center">DM</div>
            <div className="card-footer text-danger">
              Deadline:
              {this.state.date.getDate() +
                "-" +
                this.state.date.getMonth() +
                1 +
                "-" +
                this.state.date.getFullYear() +
                " " +
                "11:00"}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
