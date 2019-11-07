import React, { Component } from 'react'
import './style.css'
export default class UpcomAssign extends Component
{
    render()
    {
        return <div className="comingAssigns">
        <h6>Upcoming Assignments</h6>
        <hr/>
        <div className="assign-list">
        <div className="card mb-1">
        <div className="card-head my-0 py-0">
        Assignment No. :{2}
        </div>
        <div className="card-body py-0 text-center">
          SPPM
        </div>
        <div className="card-footer text-danger">
          Deadline:{'10-11-2019'}
        </div>
        </div>
        <div className="card mb-1">
        <div className="card-head my-0 py-0">
        Assignment No. :{1}
        </div>
        <div className="card-body py-0 text-center">
          DM
        </div>
        <div className="card-footer text-danger">
          Deadline:{'15-11-2019'}
        </div>
        </div>
        </div>
      </div>
    
    }
}
