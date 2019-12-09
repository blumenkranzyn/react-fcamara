import React from "react";
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from "../../store/actions"
import { Drawer, IconButton, Divider, List } from "@material-ui/core";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Dashboard, Class, Schedule, PeopleAlt, MenuBook, CastForEducation } from '@material-ui/icons';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  drawerPaper: {
    height: "100vh", 
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
}));

const Navbar = ({history}) => {
  
  const dispatch = useDispatch();
  const { navbarOpen } = useSelector(state => state.ui);
  const classes = useStyles();
  const handleDrawerClose = () => {
    dispatch(actions.handleNavbarStatus(false))
  };
  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(classes.drawerPaper, !navbarOpen && classes.drawerPaperClose),
      }}
      open={navbarOpen}
    >
      <div className={classes.toolbarIcon}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        <div>
          <ListItem button onClick={() => history.push("/app")} >
            <ListItemIcon>
              <Dashboard />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button onClick={() => history.push("/classes")}>
            <ListItemIcon>
              <Class />
            </ListItemIcon>
            <ListItemText primary="Classes" />
          </ListItem>
          <ListItem button onClick={() => history.push("/class-schedule")}>
            <ListItemIcon>
              <Schedule />
            </ListItemIcon>
            <ListItemText primary="Class Schedule" />
          </ListItem>
          <ListItem button onClick={() => history.push("/students")}>
            <ListItemIcon>
              <PeopleAlt />
            </ListItemIcon>
            <ListItemText primary="Students" />
          </ListItem>
          <ListItem button onClick={() => history.push("/subjects")}>
            <ListItemIcon>
              <MenuBook />
            </ListItemIcon>
            <ListItemText primary="Subjects" />
          </ListItem>
          <ListItem button onClick={() => history.push("/teachers")}>
            <ListItemIcon>
              <CastForEducation />
            </ListItemIcon>
            <ListItemText primary="Teachers" />
          </ListItem>
        </div>

      </List>
    </Drawer>
  )
}
export default withRouter(Navbar)