import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import { fade } from '@material-ui/core/styles/colorManipulator';
import { Grid, Divider, Typography, Fab } from "@material-ui/core";
import { DoneAll } from "@material-ui/icons";
import { DialogActions, DialogContent, DialogContentText } from "@material-ui/core"
import "./overwrite.css"

const styles = theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(2)
    },
    closeButton: {
        position: "absolute",
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500]
    },
    AppBar: {
        minHeight: "40px"
    },
    board: {
        cursor: 'pointer',
        boxShadow: theme.shadows[0],
        transitionProperty: 'box-shadow border-color',
        transitionDuration: theme.transitions.duration.short,
        transitionTimingFunction: theme.transitions.easing.easeInOut,
        background: theme.palette.primary.dark,
        color: theme.palette.getContrastText(theme.palette.primary.dark),
        '&:hover': {
            boxShadow: theme.shadows[14],
            textDecoration: "none"
        }
    },
    newBoard: {
        borderWidth: 2,
        borderStyle: 'dashed',
        borderColor: fade(theme.palette.getContrastText(theme.palette.primary.main), 0.6),
        '&:hover': {
            borderColor: fade(theme.palette.getContrastText(theme.palette.primary.main), 0.8)
        }
    },
    scrollDiv: {
        height: "120px",
        overflowY: "scroll"
    }
});

const EditStudent = withStyles(styles)(props => {
    const { closeDialog, dataPayable } = props;
    const [localPayable] = useState(dataPayable);

    useEffect(() => {
        console.log("mudou", localPayable)
    }, [localPayable])

    return (
        <>
            <DialogContent >
                <DialogContentText>
                    <Typography variant="h6" color="primary" className={"uppercase font-700 text-center mb-8 mt-24 "}>Edit Payable</Typography>
                </DialogContentText>
                <Divider />
                <div className={"p-5 w-full"}><h2>oi</h2></div>
            </DialogContent>
            <DialogActions>
                <Grid container direction="row" justify="center" alignItems="center" >
                    <Grid item xs={12} style={{ textAlign: "center" }} className={"p-5"}>
                        <Fab
                            variant="extended"
                            size="medium"
                            color="primary"
                            aria-label="add"
                            onClick={() => console.log("aksdhjgaj")} >
                            <DoneAll className="mx-24" />
                            Update Payable
                        </Fab>
                    </Grid>
                </Grid>

            </DialogActions>
        </>
    )
})

export default withStyles(null, { withTheme: true })(EditStudent);

