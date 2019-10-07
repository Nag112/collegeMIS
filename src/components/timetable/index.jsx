import React, { Component } from 'react'
import './timetable.css'
export default class Timetable extends Component
{

    render()
    {
        return  <div className="timeline">
        <h5>Class Time table</h5>
        <hr />
        <div className="timetable row">
          <div className="col-3">
            <h5>Today</h5>
            <h6>07 Oct 2019</h6>
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
              <h6>16:00</h6>
            </div>
            <div className="mb-3">
              <h6>16:00</h6>
              <h6>17:00</h6>
            </div>
          </div>
          <div className="col-6">
            <div className="course d-flex justify-content-between">
              <div>
                <h6>Advanced OS</h6>
                <p>Class N4</p>
              </div>
              <p>Damodar</p>
            </div>
            <div className="course d-flex justify-content-between">
              <div>
                <h6>Advanced OS</h6>
                <p>Class N4</p>
              </div>
              <p>Damodar</p>
            </div>
            <div className="course d-flex justify-content-between">
              <div>
                <h6>Advanced OS</h6>
                <p>Class N4</p>
              </div>
              <p>Damodar</p>
            </div>
            <div className="course d-flex justify-content-between">
              <div>
                <h6>Advanced OS</h6>
                <p>Class N4</p>
              </div>
              <p>Damodar</p>
            </div>
            <div className="course d-flex justify-content-between">
              <div>
                <h6>Advanced OS</h6>
                <p>Class N4</p>
              </div>
              <p>Damodar</p>
            </div>
            <div className="course d-flex justify-content-between">
              <div>
                <h6>Advanced OS</h6>
                <p>Class N4</p>
              </div>
              <p>Damodar</p>
            </div>
            <div className="course d-flex justify-content-between">
              <div>
                <h6>Advanced OS</h6>
                <p>Class N4</p>
              </div>
              <p>Damodar</p>
            </div>
          </div>
        </div>
        <hr />
      </div>
    }
}