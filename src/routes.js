import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { isAuthenticated } from "./services/auth";
import { Login, Dashboard } from "./pages"
import { Header, Navbar, Footer } from "./components"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
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
              <Component {...props} />
            </div>
            <Footer />
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
      <PrivateRoute path="/app" component={Dashboard} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;