import React from 'react'
import './style.css'
export default function Header()
{
    return <div className="App-header px-4 py-3">
    <h3>College MIS</h3>
    <div className="header-icons">
      <i className="fa fa-check-square-o"></i>
      <i className="fa fa-bell-o"></i>
      <i className="fa fa-user-circle-o"></i>
    </div>
  </div>
}