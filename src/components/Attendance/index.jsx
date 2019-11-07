/* eslint-disable eqeqeq */
import React, { Fragment } from "react";
import "./style.css";
import Axios from "axios";
import { Pie, Line } from "react-chartjs-2";
import Header from '../header';
import Sidebar from "../Sidebar";
import {Grid} from '@material-ui/core'
export default class Attendance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      c_month: "November 19",
      total_days: "",
      working_days:"",
      days: [],
      isLoading: true,
      weeks: ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"],
      months: [
        "July 19",
        "August 19",
        "September 19",
        "October 19",
        "November 19",
        "December 19",
        "January 20",
        "February 20",
        "March 20",
        "April 20",
        "May 20",
        "June 20"
      ],
      pieData: {
       
      },
      donData: {
        labels: [
          "Week-01",
          "Week-02",
          "Week-03",
          "Week-04",
          "Week-05",
          "Week-06",
          "Week-07",
          "Week-08",
          "Week-09",
          "Week-10",
          "Week-11",
          "Week-12",
          "Week-13",
          "Week-14",
          "Week-15",
          "Week-16",
          "Week-17",
          "Week-18",
          "Week-19",
          "Week-20",
          "Week-21"
        ],
        datasets: [
          {
            label: "Weekly attendance percentage",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "#192A56",
            borderColor: "#192A56",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "#192A56",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#192A56",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            //  xAxisID:'Amount in Rupees',
            // yAxisID:'Months of 2019',
            data: [100, 95, 100, 100, 90, 80, 90, 85, 95, 100, 100]
          }
        ]
      }
    };
  }

  getMonthIndex = month => {
    let index = this.state.months.findIndex(temp => {
      if (month === temp) {
        return true;
      } else return false;
    });
    if (index > 6) {
      index = index - 5;
    } else {
      index = index + 7;
    }
    return index;
  };

  getNoDays = month => {
    let year = 2019;
    let index = this.getMonthIndex(month);
    if (index <= 6) {
      year = 2020;
    }
    return new Date(year, index, 0).getDate();
  };
  getFirstday = month => {
    let year = 2019;
    let index = this.getMonthIndex(month);
    if (index <= 6) {
      year = 2020;
    }
    let temp = new Date(year, index - 1, 1).getDay();
    return temp;
  };
  prevMonth = () => {
    let temp = this.state.c_month;
    let index;
    if (temp !== "July 19") {
      index = this.state.months.findIndex(month => {
        if (month === temp) {
          return true;
        } else return false;
      });
      this.setState({ c_month: this.state.months[index - 1] });
    }
  };
  nextMonth = () => {
    let temp = this.state.c_month;
    let index;
    if (temp !== "June 20") {
      index = this.state.months.findIndex(month => {
        if (month === temp) {
          return true;
        } else return false;
      });
      this.setState({ c_month: this.state.months[index + 1] });
    }
  };
  blankDate(index) {
    switch (index) {
      case 1:
        return <h6>&nbsp;</h6>;
      case 2:
        return (
          <Fragment>
            <h6>&nbsp;</h6>
            <h6>&nbsp;</h6>
          </Fragment>
        );
      case 3:
        return (
          <Fragment>
            <h6>&nbsp;</h6>
            <h6>&nbsp;</h6>
            <h6>&nbsp;</h6>
          </Fragment>
        );
      case 4:
        return (
          <Fragment>
            <h6>&nbsp;</h6>
            <h6>&nbsp;</h6>
            <h6>&nbsp;</h6>
            <h6>&nbsp;</h6>
          </Fragment>
        );
      case 5:
        return (
          <Fragment>
            <h6>&nbsp;</h6>
            <h6>&nbsp;</h6>
            <h6>&nbsp;</h6>
            <h6>&nbsp;</h6>
            <h6>&nbsp;</h6>
          </Fragment>
        );
      case 6:
        return (
          <Fragment>
            <h6>&nbsp;</h6>
            <h6>&nbsp;</h6>
            <h6>&nbsp;</h6>
            <h6>&nbsp;</h6>
            <h6>&nbsp;</h6>
            <h6>&nbsp;</h6>
          </Fragment>
        );
      default:
        return <Fragment></Fragment>;
    }
  }
  componentDidUpdate() {
    let token = localStorage.getItem("auth-token");
    Axios.get("https://misback.herokuapp.com/attendance/get", {
      headers: { token: token }
    })
      .then(res => {
        this.setState({ total_days: res.data.total_days,working_days:res.data.working_days });        
        let index = this.getMonthIndex(this.state.c_month);
        var data = Object.entries(res.data);
        var days = [];
        data.filter(temp => {
          if (temp[0] !== "uid" || temp[0] !== "total_days") {
            let day = temp[0].split("-");
            //            console.log(day);
            if (day[1] == index) {
              let ret;
              if (temp[1].am !== "") {
                if (temp[1].am !== " ") {
                  ret =
                    day[0].padStart(2, "0") +
                    `( ${temp[1].am} | ${temp[1].pm} )`;
                } else {
                  ret = day[0].padStart(2, "0");
                }
              } else {
                ret = day[0].padStart(2, "0");
              }
              days.push(ret);
            }
          }
          return null;
        });
        this.setState({ days: days });
      })
      .catch();
  }
  componentDidMount() {
    let index = this.getFirstday(this.state.c_month);
    let no = this.getNoDays(this.state.c_month);
    let i = 0;
    let init = 1;
    let temp_days = [];
    while (init < no) {
      if (i < index) {
        temp_days[i] = " ";
      } else {
        temp_days[i] = init;
        init++;
      }
      i++;
    }
    let token = localStorage.getItem("auth-token");
    if (token) {
      Axios.get("https://misback.herokuapp.com/attendance/get", {
        headers: { token: token }
      })
        .then(res => {
          // console.log(res.data);
         this.setState({ total_days: res.data.total_days,working_days:res.data.working_days,pieData:{ datasets: [
          {
            data: [res.data.working_days-res.data.total_days, res.data.total_days],
            backgroundColor: ["#B83227", "#0A79DF"],
            hoverBackgroundColor: ["#B83227", "#0A79DF"]
          }
        ],
        labels: [
          // These labels appear in the legend and in the tooltips when hovering different arcs
          "Absent",
          "Present"
        ] }});
          let index = this.getMonthIndex(this.state.c_month);
          //   console.log(index)
          var data = Object.entries(res.data);
          var days = [];
          data.filter(temp => {
            if (temp[0] !== "uid" || temp[0] !== "total_days") {
              let day = temp[0].split("-");
              console.log(day);
              if (day[1] === index) {
                let ret;
                if (temp[1].am !== "" || temp[1].am !== " ") {
                  ret =
                    day[0].padStart(2, "0") +
                    `( ${temp[1].am} | ${temp[1].pm} )`;
                } else {
                  ret = day[0].padStart(2, "0");
                }
                days.push(ret);
              }
            }
            return null;
          });
          this.setState({ isLoading: false, days: days });
        })
        .catch();
    } else {
      this.props.history.push("/");
    }
  }
  render() {
    return  (
        <div className="attendance">
        <Header {...this.props}/>
        <Grid container spacing={1}>
          <Grid item xs={2}>  <Sidebar/></Grid>
              <Grid item xs={10} className="attendanceGrid">
                 { this.state.isLoading?<div></div>:<Fragment>
                    <div className="d-flex justify-content-around py-4">
                      <h5><u>Total present days :</u> {this.state.total_days}</h5>
                      <h5><u>Total working days :</u> {this.state.working_days}</h5>
                      <h5><u>Percentage :</u> {(this.state.total_days*100 / this.state.working_days).toFixed(2)}%</h5>
                    </div>
                    <div className="d-flex justify-content-around">
                      <h2 onClick={this.prevMonth} className="fa fa-angle-double-left">
                        &nbsp;
                      </h2>
                      <h2 className="att-heading">{this.state.c_month} Attendence</h2>
                      <h2 onClick={this.nextMonth} className="fa fa-angle-double-right">
                        &nbsp;
                      </h2>
                    </div>
                    <div className="attendance_grid">
                      {this.state.weeks.map(day => {
                        return <h6 className="heading">{day} </h6>;
                      })}
                      {this.blankDate(this.getFirstday(this.state.c_month))}
                      {this.state.days.map(date => {
                        if (date.includes("( H")) {
                          return <h6 className="holiday">{date.slice(0, 2)}</h6>;
                        } else {
                          return <h6 className="working">{date}</h6>;
                        }
                      })}
                    </div>
                    <p className="text-danger ml-5">* Red colour indicates holiday</p>
                    <div className="row my-5">
                      <div className="col-6 text-center">
                        {" "}
                        <Pie data={this.state.pieData} />
                        <div className="row ">
                          <h6 className="col text-center">
                            <u>Absent:</u>{" "}
                            <span className="text-danger">
                              {this.state.pieData.datasets[0].data[0]}
                            </span>
                          </h6>
                          
                          <h6 className="col text-center">
                            <u>Present:</u>{" "}
                            <span className="text-primary">
                              {this.state.pieData.datasets[0].data[1]}
                            </span>
                          </h6>
                          <h6 className="col text-center">
                            <u>Total:</u>{" "}
                            <span className="text-danger">
                              {this.state.working_days}
                            </span>
                          </h6>
                        </div>
                      </div>
                      <div className="col-6 text-center">
                        {" "}
                        <Line data={this.state.donData} />
                      </div>
                    </div>
                  </Fragment>}
              </Grid>
        </Grid>
        </div>
      );
  }
}
