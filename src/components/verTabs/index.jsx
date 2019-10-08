import React from 'react'
import {Box,Grid} from '@material-ui/core'
import './style.css'
import Stepper from '../stepper'
export default(props) =>
{
    switch(props.value)
    {
        case 0:
            return <Box  className="vertab">                
                    <Grid container>
                            <Grid item xs>
                                <ul>
                                <li><u>Gender</u>: Female</li>
                                    <li><u>Date of birth</u>: 29-07-1999</li>
                                    <li><u>Father</u> : P. Balaram</li>
                                    <li><u>Mother </u>: P. Padma</li>
                                    
                                </ul>
                            </Grid>
                            <Grid item xs>
                            <ul>
                                    <li><u>Nationality</u> : Indian</li>
                                    <li><u>Religion</u> : Hindu</li>
                                    <li><u>Mother Tongue</u> : Telugu</li>
                                    <li><u>Marital Status</u> : Single</li>
                                </ul>
                            </Grid>
                            <Grid item xs>
                            <ul>
                                    <li><u>Height</u> : 5.10"</li>
                                    <li><u>Weight</u> : -</li>
                                    <li><u>Blood Group</u> : O+</li>
                                    <li><u>Age </u>:20yrs</li>
                                </ul>
                            </Grid>
                    </Grid>           
            </Box>
        case 1:
                return <Box  className="vertab">                
                <Grid container>
                        <Grid item xs>
                            <ul>
                            <li><u>Flat no</u>: 202</li>
                                <li><u>Road no</u>: 4</li>
                                <li><u>Colony</u> : Anjaneya Nagar</li>
                                <li><u>Area </u>: Moosapet</li>
                                <li><u>City </u>: Hyderabad</li>
                                
                            </ul>
                        </Grid>
                        <Grid item xs>
                        <ul>
                                <li><u>Phone no 1</u> : 91 9876543210</li>
                                <li><u>Phone no 2</u> : 91 9876543210</li>
                                <li><u>Tel no</u> : 91 9876543210</li>
                                <li><u>email </u> : pssgoud@gmail.com</li>
                                <li><u>whatsapp no</u> : 9876543210</li>                                
                            </ul>
                        </Grid>
                        <Grid item xs>
                        <ul>
                                <li><u>Height</u> : 5.10"</li>
                                <li><u>Weight</u> : -</li>
                                <li><u>Blood Group</u> : O+</li>
                                <li><u>Age </u>:20yrs</li>
                            </ul>
                        </Grid>
                </Grid>           
        </Box>
         case 2:
                return <Box  className="vertab">                
               <Stepper/>            
        </Box>
        default:
            return <Box  className="vertab">                
            hello                
    </Box>
    }
}