import React, { Component } from 'react'
import { Link } from "react-router-dom";
import "./sidebar.css";
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
        not:'1'
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
  capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1)
  render()
  { const user = this.state.student;
    const loc = window.location.pathname;
    return (
    <div className="sidebar text-left">
      <h5 className="text-center">Navigation</h5>
      <ul className="nav-list">
       {
         user.map((list)=>{return  <li className={loc.slice(1)===list.link?"list-item active":"list-item"}>
          <Link to={`/${list.link}`}>
            <span>
              <i className={`fa fa-${list.icon}`}></i><h6>{this.capitalize(list.link)}</h6>
            </span>
            <span className={list.not===''?null:"list-span"}>{list.not}</span>
          </Link>
        </li>})
       }
       
      </ul>
    </div>
  );}
}
