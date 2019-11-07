import React from 'react';
import {Line} from 'react-chartjs-2';
import Header from '../header';
import "./style.css";
import Sidebar from "../Sidebar";
import {Grid} from '@material-ui/core'
// const options = {
//     elements: {
//       line: { tension: 0 },
//       point: { radius: 0 }
//     },
//     scales: {
//       yAxes: [{
//         //display: false,
//       //  gridLines: { display: false },
//         ticks: {
//           beginAtZero: true,         
//         }
//       }],
//       xAxes: [{
//       //  display: false,
//      //   gridLines: { display: false }
//       }],
//     },
//     legend: { display: false },
//     angleLines: { display: false },
//     responsive: true,
//     maintainAspectRatio: false,
//     animation: { duration: 0 }
//   }
export default class Performance extends React.Component
{
    state={
        donData: {
            labels: [             
              "CS401",
              "CS402",
              "CS403",
              "CS404",
              "CS405",
              "CS406"
            ],
            datasets: [
              {
                label: "Mid-1",
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
                data: [24,21,24,25,23,25]
              },
              {
                label: "Mid-2",
                fill: false,
                lineTension: 0.1,
                pointBorderColor: "#192A56",
                pointBackgroundColor: "#fff",
                pointHoverBackgroundColor: "#192A56",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [25,22,20,24,24,21]
              }
            ]
          }
    }
    render()
    {
        return(
            <div className="performance">
             <Header {...this.props}/>
        <Grid container spacing={1}>
          <Grid item xs={2}>  <Sidebar/></Grid>
              <Grid item xs={10} className="perGrid">
            <h2 className="text-center mt-3"><u>Performance</u></h2>
                    <table className="table my-2 table-bordered">
  <thead className="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">CS401</th>
      <th scope="col">CS402</th>
      <th scope="col">CS403</th>
      <th scope="col">CS404</th>
      <th scope="col">CS405</th>
      <th scope="col">CS406</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Mid-One</th>
      <td>24</td>
      <td>21</td>
      <td>24</td>
      <td>25</td>
      <td>23</td>
      <td>25</td>
    </tr>
    <tr>
    <th scope="row">Mid-two</th>
      <td>25</td>
      <td>22</td>
      <td>20</td>
      <td>24</td>
      <td>24</td>
      <td>21</td>
    </tr>
  </tbody>
</table>
<Line data={this.state.donData} /> 
</Grid>
        </Grid>
            </div>
        )
    }
}
//options={options}
