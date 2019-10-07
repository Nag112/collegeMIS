import React, { Component,Fragment } from 'react'
import Header from '../header'
import Sidebar from "../Sidebar";
import Wallpaper from '../wallpaper'
export default class Profile extends Component
{
    render()
    {
        return <Fragment>
         <Header/>
                 <div className="App">
                <Wallpaper/>
                <Sidebar/>
            </div>
            </Fragment>
    }
}