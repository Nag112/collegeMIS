import React, { Component } from 'react'

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
          Wireless Network
        </div>
        <div className="card-footer text-danger">
          Deadline:{'10-10-2019'}
        </div>
        </div>
        <div className="card mb-1">
        <div className="card-head my-0 py-0">
        Assignment No. :{1}
        </div>
        <div className="card-body py-0 text-center">
          AOS
        </div>
        <div className="card-footer text-danger">
          Deadline:{'15-10-2019'}
        </div>
        </div>
        </div>
      </div>
    
    }
}