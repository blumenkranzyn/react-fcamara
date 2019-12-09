import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { isAuthenticated } from "./services/auth";
import { Login, Dashboard, Classes, ClassSchedule, Students, Subjects, Teachers } from "./pages"
import { Header, Navbar, Footer } from "./components"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    maxHeight: "100vh",
    overflow: "hidden"
  },
  content: {
    position:"relative",
    paddingTop:70,
    paddingLeft: 22
  }
}))

const PrivateRoute = ({ component: Component, ...rest }) => {
  const classes = useStyles()
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <>
            <div className={classes.root}>
              <Header />
              <Navbar />
              <div className={classes.content}>
                  <Component {...props} />
                  <Footer />
              </div>
            </div>
          </>
        ) : (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          )
      }
    />
  )
}

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <PrivateRoute exact path="/app" component={Dashboard} />
      <PrivateRoute exact path="/classes" component={Classes} />
      <PrivateRoute exact path="/class-schedule" component={ClassSchedule} />
      <PrivateRoute exact path="/students" component={Students} />
      <PrivateRoute exact path="/subjects" component={Subjects} />
      <PrivateRoute exact path="/teachers" component={Teachers} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;