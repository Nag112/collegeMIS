import React, { Component } from 'react'
import { Link } from "react-router-dom";
import "./sidebar.css";
String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}
export default class Sidebar extends Component{
  constructor(props)
  {
    super(props);
    this.state={
      student:[{
        id:0,
        link:'timeline',
        icon:'list-alt',
        not:''
      },
      {
        id:1,
        link:'profile',
        icon:'user-o',
        not:''
      },
      {
        id:2,
        link:'exams',
        icon:'pencil-square-o',
        not:''
      },
      {
        id:3,
        link:'attendance',
        icon:'calendar-check-o',
        not:''
      },
      {
        id:4,
        link:'performance',
        icon:'bar-chart',
        not:''
      },
      {
        id:5,
        link:'events',
        icon:'group',
        not:''
      },{
        id:6,
        link:'feedback',
        icon:'feed',
        not:''
      },
      {
        id:7,
        link:'courses',
        icon:'certificate',
        not:''
      },
      {
        id:8,
        link:'e-library',
        icon:'book',
        not:''
      },
      {
        id:9,
        link:'assignments',
        icon:'pencil',
        not:'2'
      }]
    }
  }
  render()
  { const user = this.state.student;
    console.log(this.props.location)
    return (
    <div className="sidebar text-left">
      <h5 className="text-center">Navigation</h5>
      <ul className="nav-list">
       {
         user.map((list)=>{return  <li className="list-item">
          <Link to={`/${list.link}`}>
            <span>
              <i className={`fa fa-${list.icon}`}></i><h6>{list.link.capitalize()}</h6>
            </span>
            <span className={list.not===''?null:"list-span"}>{list.not}</span>
          </Link>
        </li>})
       }
       
      </ul>
    </div>
  );}
}
