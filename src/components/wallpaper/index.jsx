import React, { Component } from 'react'
import './style.css'
import axios from 'axios'
export default class Wallpaper extends Component
{
  state={
    user:''
  }
  componentDidMount()
  {
    let token = localStorage.getItem('auth-token');
    if (token) {
      axios.get('https://misback.herokuapp.com/fetchstudent', { headers: { token: token } })
        .then((res) => {
          this.setState({ user: res.data, isLoading: false }); 
          console.log(res.data)       
        })
        .catch(err => {
          this.setState({ error: 'caught error' });
          console.log(err);
          if (err.response.status === 403) {
            this.history.push('/')
          }
          else {
            if (err.response.status === 500) {
              this.setState({ user: "an error occured please try again after sometime" })
            }
          }
        });
      }
  }
    render()
    {
      const {user} = this.state
        return <div className="wallpaper">
        <div className="image"></div>
        <div className="text d-flex">
          <img src={`${window.location.origin}/assets/${user.cid}.jpg`} alt='pic'/>
          <ul className="list d-flex">
            <li>
              <h6>{user.name}</h6>
              <span>{user.address}</span>
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
              <h6>{user.cid}</h6>
              <span>college ID</span>
            </li>
          </ul>
        </div>
      </div>
    }
}
