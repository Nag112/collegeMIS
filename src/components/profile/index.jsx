import React, { Component,Fragment } from 'react'
import Header from '../header'
import Sidebar from "../Sidebar";
export default class Profile extends Component
{
    render()
    {
        return <Fragment>
         <Header/>
                 <div className="App">
                
                <Sidebar/>
            </div>
            </Fragment>
    }
}