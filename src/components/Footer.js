import React from "react"
import {Typography, Link, Grid} from "@material-ui/core"
import {makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  footer: {
    position: "fixed",
    bottom: 0,
    left: 0,
    background: theme.palette.background.paper,
    width: "100%"
  }
}))

const Footer = () => {
const classes = useStyles()
    return (
      <div className={classes.footer}>
        <Grid container direction="row" justify="flex-end" alignItems="center" spacing={3}>
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
      </div>
    );
  }

  export default Footer