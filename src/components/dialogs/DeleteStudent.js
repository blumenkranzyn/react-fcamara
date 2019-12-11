import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux"
import { Grid, Divider, Typography, Button, TextField } from "@material-ui/core";
import { DoneAll, Close } from "@material-ui/icons";
import { DialogActions, DialogContent, DialogContentText } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import { NumberFormatCustom } from "../../components"
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker, } from '@material-ui/pickers';
import * as dateUtil from "../../utils/DateUtil"
import StudentsApi from "../../api/StudentsApi"
import * as actions from "../../store/actions";
import "./overwrite.css"

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

const DeleteStudent = ({ closeDialog, dataStudent }) => {
    const dispatch = useDispatch()
    const classes = useStyles()
   
    const handleDelete = () => {
        dispatch(actions.handleLoadingStatus(true))
        new StudentsApi().deleteStudent(dataStudent.id).then(resp => {
            dispatch(actions.handleLoadingStatus(false))
            dispatch(actions.showTopCenterMsg("success", "Student successfully deeleted!"))
            closeDialog();
            document.location.reload(true);
        })
            .catch(err => {
                dispatch(actions.handleLoadingStatus(false))
                console.log(">>>>", err);
            });
    };

    return (
        <>
            <DialogContent >
                <Grid container direction="row" justify="center" alignItems="center" spacing={2}>
                    <Grid item xs={12}>
                    <Typography>Are you sure you want to delete the student {dataStudent.data.fullname}?</Typography>
                    </Grid>
                </Grid>

            </DialogContent>
            <DialogActions>
                <Grid container direction="row" justify="center" alignItems="center" >
                    <Grid item xs={12} style={{ textAlign: "center" }} className={"p-5"}>
                        <div className={classes.root}>
                            <Button variant="contained" color="primary" className="mr-12" onClick={() => handleDelete()}>
                                <DoneAll /> Yes, Delete Student
                            </Button>
                            <Button variant="contained" onClick={() => closeDialog()}>
                                <Close />
                                No, Cancel It
                        </Button>
                        </div>
                    </Grid>
                </Grid>

            </DialogActions>
        </>
    )
}

export default withStyles(null, { withTheme: true })(DeleteStudent);

