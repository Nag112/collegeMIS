import React, { Component } from 'react'
import './style.css'
export default class Special extends Component
{
    render()
    {
        return <div className="special">
           <h5>Today's specials</h5>
        <hr/>
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
              <h6>09:00</h6>
              <h6>10:00</h6>
            </div>
            <div className="mb-3 ">
              <h6>12:00</h6>
              <h6>13:00</h6>
            </div>
          </div>
          <div className="col-6">
            <div className="course d-flex justify-content-between">
              <div>
                <h6>Advanced OS</h6>
                <p>Class N4</p>
              </div>
              <p>Dr.Damodar Reddy</p>
            </div>
            <div className="course d-flex justify-content-between">
              <div>
                <h6>Management</h6>
                <p>class N8</p>
              </div>
              <p>Dr.Sunil Kumar</p>
            </div>
          </div>
        </div>
        </div>
    }
}