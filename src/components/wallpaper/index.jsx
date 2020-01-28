import React, { Component } from "react";
import "./style.css";

export default class Wallpaper extends Component {
  render() {
    const { user } = this.props;
    return (
      <div className="wallpaper">
        <div className="image"></div>
        <div className="text d-flex">
          <img
            src={`${window.location.origin}/assets/${user.cid}.jpg`}
            alt="pic"
          />
          <ul className="list d-flex">
            <li>
              <h6>{user.name}</h6>
              <span>{user.address}</span>
            </li>
            <li>
              <h6>Computer Science</h6>
              <span>department</span>
            </li>
            <li>
              <h6>B.Tech IV year</h6>
              <span>Student</span>
            </li>
            <li>
              <h6>{user.cid}</h6>
              <span>college ID</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
