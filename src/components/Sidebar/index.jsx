import React from "react";
import "./sidebar.css";
export default function(props) {
  return (
    <div className="sidebar text-left">
      <h5 className="text-center">Navigation</h5>
      <ul className="nav-list">
        <li className="list-item">
          <span>
            <i className="fa fa-user"></i>Time line
          </span>         
        </li>
        <li className="list-item">
          <span>
            <i className="fa fa-pencil-square-o"></i>Exams
          </span>
          <span className="list-span">&nbsp;2&nbsp;</span>
        </li>
        <li className="list-item">
          <span>
            <i className="fa fa-calendar-check-o"></i>Attendance
          </span>
          <span className="list-span">&nbsp;2&nbsp;</span>
        </li>
        <li className="list-item">
          <span>
            <i className="fa fa-bar-chart"></i>Performance
          </span>
          <span className="list-span"> &nbsp;2&nbsp;</span>
        </li>
        <li className="list-item">
          <span>
            <i className="fa fa-group"></i>Events
          </span>
          <span className="list-span">&nbsp;2&nbsp;</span>
        </li>
        <li className="list-item">
          <span>
            <i className="fa fa-feed"></i>Feed back
          </span>
          <span className="list-span">&nbsp;2&nbsp;</span>
        </li>
        <li className="list-item">
          <span>
            <i className="fa fa-certificate"></i>Courses
          </span>
          <span className="list-span">&nbsp;2&nbsp;</span>
        </li>
        <li className="list-item">
          <span>
            <i className="fa fa-book"></i>e-Library
          </span>
          <span className="list-span"></span>
        </li>
        <li className="list-item">
          <span>
            <i className="fa fa-pencil"></i>Assignments
          </span>
          <span className="list-span">&nbsp;2&nbsp;</span>
        </li>
      </ul>
    </div>
  );
}
