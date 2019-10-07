import React, { Component } from 'react'
import Logo from "../../assets/img.jpg"
import './style.css'
export default class Wallpaper extends Component
{
    render()
    {
        return <div className="wallpaper">
        <div className="image"></div>
        <div className="text d-flex">
          <img src={Logo} alt='pic'/>
          <ul className="list d-flex">
            <li>
              <h6>P. Sai Saraswathi</h6>
              <span>Moosapet</span>
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
              <h6>16D21A544</h6>
              <span>college ID</span>
            </li>
          </ul>
        </div>
      </div>
    }
}