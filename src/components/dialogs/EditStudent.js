import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux"
import { Grid, Divider, Typography, Button, TextField } from "@material-ui/core";
import { DoneAll, Close } from "@material-ui/icons";
import { DialogActions, DialogContent, DialogContentText } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import { NumberFormatCustom } from "../../components"
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker, } from '@material-ui/pickers';
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

const EditStudent = ({ closeDialog, dataStudent }) => {
    const dispatch = useDispatch()
    const classes = useStyles()
    const [localStudent, setLocalStudent] = useState(dataStudent.data);

    const handleUpdate = () => {
        let dataToUpdate = {
            ...localStudent,
            id: dataStudent.id
        }
        dispatch(actions.handleLoadingStatus(true))
        new StudentsApi().editStudent(dataToUpdate).then(() => {
            dispatch(actions.handleLoadingStatus(false))
            dispatch(actions.showTopCenterMsg("success", "Student successfully updated!"))
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
                <DialogContentText>
                    <Typography variant="h6" color="primary" className={"uppercase font-700 text-center mb-8 mt-24 "}>Edit Student</Typography>
                </DialogContentText>
                <Divider />
                <Grid container direction="row" justify="center" alignItems="center" spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            defaultValue={localStudent.fullname}
                            label="Full Name"
                            onChange={e =>
                                setLocalStudent({ ...localStudent, fullname: e.target.value })
                            }
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            defaultValue={localStudent.email}
                            label="Email"
                            onChange={e =>
                                setLocalStudent({ ...localStudent, email: e.target.value })
                            }
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <NumberFormatCustom
                            fullWidth
                            variant="outlined"
                            label="Federal Id"
                            format={"###.###.###-##"}
                            mask="_"
                            defaultValue={localStudent.federalId}
                            onBlur={e =>
                                setLocalStudent({ ...localStudent, federalId: e.target.value })
                            }
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                fullWidth
                                inputVariant="outlined"
                                format="dd/MM/yyyy"
                                margin="normal"
                                id="date-picker-inline"
                                label="Birthday Date"
                                value={localStudent.birthdayDate}
                                onChange={e =>
                                    setLocalStudent({ ...localStudent, birthdayDate: dateUtil.formatDate(e) })
                                }
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </MuiPickersUtilsProvider>
                    </Grid>
                    <Grid item xs={12}>
                        <NumberFormatCustom
                            fullWidth
                            variant="outlined"
                            label="Phone Number"
                            format={"(##) #####-####"}
                            mask="_"
                            defaultValue={localStudent.phoneNumber}
                            onBlur={e =>
                                setLocalStudent({ ...localStudent, phoneNumber: e.target.value })
                            }
                        />
                    </Grid>

                </Grid>

            </DialogContent>
            <DialogActions>
                <Grid container direction="row" justify="center" alignItems="center" >
                    <Grid item xs={12} style={{ textAlign: "center" }} className={"p-5"}>
                        <div className={classes.root}>
                            <Button variant="contained" color="primary" className="mr-12" onClick={() => handleUpdate()}>
                                <DoneAll /> Update Student
                            </Button>
                            <Button variant="contained" onClick={() => closeDialog()}>
                                <Close />
                                Cancel
                        </Button>
                        </div>
                    </Grid>
                </Grid>

            </DialogActions>
        </>
    )
}

export default withStyles(null, { withTheme: true })(EditStudent);

