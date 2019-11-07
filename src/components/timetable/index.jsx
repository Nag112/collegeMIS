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
            <h6>07 November 2019</h6>
          </div>
          <div className="col-3 time">
            <div className="mb-3 ">
              <h6>09:20</h6>
              <h6>10:20</h6>
            </div>
            <div className="mb-3">
              <h6>10:20</h6>
              <h6>11:00</h6>
            </div>
            <div className="mb-3">
              <h6>11:20</h6>
              <h6>12:10</h6>
            </div>
            <div className="mb-3">
              <h6>12:10</h6>
              <h6>13:00</h6>
            </div>
            <div className="mb-3">
              <h6>13:45</h6>
              <h6>14:30</h6>
            </div>
            <div className="mb-3">
              <h6>14:30</h6>
              <h6>15:35</h6>
            </div>
            <div className="mb-3">
              <h6>15:35</h6>
              <h6>16:00</h6>
            </div>
          </div>
          <div className="col-6">
            <div className="course d-flex justify-content-between">
              <div>
                <h6>SPPM</h6>
                <p>Roomno. 204</p>
              </div>
              <p>Mr.L.Manikandan</p>
            </div>
            <div className="course d-flex justify-content-between">
              <div>
                <h6>PPL</h6>
                <p>Roomno. 204</p>
              </div>
              <p>Dr.M.Ramasubramanian</p>
            </div>
            <div className="course d-flex justify-content-between">
              <div>
                <h6>DM</h6>
                <p>Roomno. 204</p>
              </div>
              <p>Mr.K.C.Ravikumar</p>
            </div>
            <div className="course d-flex justify-content-between">
              <div>
              <h6>PPL</h6>
                <p>Roomno. 204</p>
              </div>
              <p>Dr.M.Ramasubramanian</p>
            </div>
            <div className="course d-flex justify-content-between">
              <div>
                <h6>IOT</h6>
                <p>Roomno. 204</p>
              </div>
              <p>Ms.K.Laksmi Sravani</p>
            </div>
            <div className="course d-flex justify-content-between">
              <div>
              <h6>DM</h6>
                <p>Roomno. 204</p>
              </div>
              <p>Mr.K.C.Ravikumar</p>
            </div>
            <div className="course d-flex justify-content-between">
              <div>
                <h6>CC</h6>
                <p>Roomno. 204</p>
              </div>
              <p>Dr.T.K.S.Ratish Babu</p>
            </div>
          </div>
        </div>
        <hr />
      </div>
    }
}
