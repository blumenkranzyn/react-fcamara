import React from "react";
import { withRouter } from "react-router-dom"
import { connect } from 'react-redux';
import { Hidden, Grid, Typography, Breadcrumbs, Link, } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import { Home } from "@material-ui/icons";
import { Fade } from 'react-reveal';

const styles = theme => ({
    separator: {
        width: 1,
        height: 64,
        backgroundColor: theme.palette.secondary.main,
    },
    link: {
        display: 'flex',
        color: "white !important"
    },
});

const PageBreadcrumbs = ({ items, classes, history, ...other }) => {
    const breadcrumbItems = items.map((item, index) => {
        return (
            <>
                <Link href="#!" {...other} className={classes.link} key={index}>
                    {item.name}
                </Link>
            </>
        )
    });

    return (
        <>
            <Fade delay={200} right>
                <Grid item xs={12} sm={12} >
                    <Hidden smDown>
                        <Breadcrumbs aria-label="breadcrumb" className={"text-white mr-6"} style={{ float: "right" }}>
                            <Link href="#!" onClick={() => { history.push("/app"); }} className={classes.link}>
                                <Home className={classes.icon} />
                                Home
                            </Link>
                            {breadcrumbItems}
                        </Breadcrumbs>
                    </Hidden>
                </Grid>
            </Fade>
        </>
    )
}
export default withRouter(connect()(withStyles(styles)(PageBreadcrumbs)))
