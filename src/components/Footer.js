import React from "react"
import {Typography, Link, Grid} from "@material-ui/core"

const Footer = () => {
    return (
      <Grid container direction="row"justify="center"alignItems="center">
        <Grid item>
        <Typography variant="body2" color="textSecondary" align="center">
          {'Copyright © '}
          <Link color="inherit" href="#">
            Your Website
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
        </Grid>
      </Grid>
    );
  }

  export default Footer