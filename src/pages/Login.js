import React, { useState } from 'react';
import { useDispatch } from "react-redux"
import { Avatar, Button, TextField, Link, Paper, Box, Grid, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import * as loginApi from "../api/LoginApi"
import * as actions from "../store/actions";
import { login } from "../services/auth";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://images.unsplash.com/photo-1534644107580-3a4dbd494a95?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(10),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = ({ history }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [localLogin, setLocalLogin] = useState({
    email: "",
    password: ""
  })

  const handleSignIn = async e => {
    dispatch(actions.handleLoadingStatus(true))
    e.preventDefault();
    if (!localLogin.email || !localLogin.password) {
      dispatch(actions.showTopCenterMsg("error", "Fill the form to continue!"))
    } else {
      try {
        const verifyCredentials = await loginApi.checkCredentials(localLogin);
        dispatch(actions.handleLoadingStatus(false))
        if (verifyCredentials) {
          login("@TokenMockup");
          history.push("/app");
        }
        else {
          dispatch(actions.showTopCenterMsg("error", "Invalid credentials. Verify your information and try again"))
        }
      } catch (err) {
        dispatch(actions.showTopCenterMsg("error", err))
        dispatch(actions.handleLoadingStatus(false))
      }
    }
  };

  return (
    <>

      <Grid container component="main" className={classes.root}>

        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in - Escola Estadual Luiz D'tinho
          </Typography>
            <form className={classes.form} >
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoFocus
                onChange={e => setLocalLogin({ ...localLogin, email: e.target.value })}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                onChange={e => setLocalLogin({ ...localLogin, password: e.target.value })}
                id="password"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                onClick={(e) => handleSignIn(e)}
                className={classes.submit}
                disabled={!localLogin.email || !localLogin.password}>
                Sign In
            </Button>
              <Box mt={5}>
                <Copyright />
              </Box>
            </form>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default Login