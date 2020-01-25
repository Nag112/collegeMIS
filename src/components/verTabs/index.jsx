import React from "react";
import { Box, Grid } from "@material-ui/core";
import "./style.css";
import Stepper from "../stepper";
export default props => {
  switch (props.value) {
    case 0:
      return (
        <Box className="vertab">
          <Grid container>
            <Grid item xs>
              <ul>
                <li>
                  <u>Gender</u>: Male
                </li>
                <li>
                  <u>Date of birth</u>: 11-12-1998
                </li>
                <li>
                  <u>Father</u> : K.Bheemaiah
                </li>
                <li>
                  <u>Mother </u>: K.Saraswathi
                </li>
              </ul>
            </Grid>
            <Grid item xs>
              <ul>
                <li>
                  <u>Nationality</u> : Indian
                </li>
                <li>
                  <u>Religion</u> : Hindu
                </li>
                <li>
                  <u>Mother Tongue</u> : Telugu
                </li>
                <li>
                  <u>Marital Status</u> : Single
                </li>
              </ul>
            </Grid>
            <Grid item xs>
              <ul>
                <li>
                  <u>Height</u> : 5.10"
                </li>
                <li>
                  <u>Weight</u> : -
                </li>
                <li>
                  <u>Blood Group</u> : O+
                </li>
                <li>
                  <u>Age </u>:21yrs
                </li>
              </ul>
            </Grid>
          </Grid>
        </Box>
      );
    case 1:
      return (
        <Box className="vertab">
          <Grid container>
            <Grid item xs>
              <ul>
                <li>
                  <u>Flat no</u>: 202
                </li>
                <li>
                  <u>Road no</u>: 4
                </li>
                <li>
                  <u>Colony</u> : Housing board
                </li>
               
              </ul>
            </Grid>
            <Grid item xs>
              <ul>
              <li>
                  <u>Area </u>: Farmagudi
                </li>
                <li>
                  <u>City </u>: Ponda
                </li>
                <li>
                  <u>Phone no </u> : 91 9876543210
                </li>
              </ul>
            </Grid>
            <Grid item xs>
              <ul>
              <li>
                  <u>Tel no</u> : 91 9876543210
                </li>
              <li>
                  <u>email </u> : nagacharan.nitg@gmail.com
                </li>
                <li>
                  <u>whatsapp no</u> : 9876543210
                </li>
              </ul>
            </Grid>
          </Grid>
        </Box>
      );
    case 2:
      return (
        <Box className="vertab">
          <Stepper />
        </Box>
      );
    default:
      return <Box className="vertab">hello</Box>;
  }
};
