import React,{Fragment} from 'react'
import Routes from './route'
import { Grid } from '@material-ui/core'
import Header from './components/header'
import Sidebar from "./components/Sidebar";
export default function App()
{
  return <Fragment>
    <Header />
  <Grid container direction="row" >
    <Grid item xs={2} direction="row"> 
    <Sidebar />
    </Grid>
    <Grid item xs={10} direction="row">
      <Routes />          
    </Grid>                       
  </Grid>
 </Fragment>
}
