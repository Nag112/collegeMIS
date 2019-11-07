import React, { Component } from 'react'
import './style.css'
export default class Special extends Component
{
    render()
    {
        return <div className="special">
           <h5>Today's Tasks</h5>
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
              <h6>11:20</h6>
              <h6>12:10</h6>
            </div>
            <div className="mb-3 ">
              <h6>13:45</h6>
              <h6>14:30</h6>
            </div>
          </div>
          <div className="col-6">
            <div className="course d-flex justify-content-between">
              <div>
              <h6>DM</h6>
                <p>Roomno. 204</p>
              </div>
              <p>Mr.K.C.Ravikumar</p>
            </div>
            <div className="course d-flex justify-content-between">
              <div>
                <h6>IOT</h6>
                <p>Roomno. 204</p>
              </div>
              <p>Ms.K.Laksmi Sravani</p>
            </div>
          </div>
        </div>
        </div>
    }
}
