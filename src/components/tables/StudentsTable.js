import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from "@material-ui/core";
import TableCustom from "./TableCustom";
import { StudentConfig } from "./StudentConfig";
import { Fade } from 'react-reveal';
import * as actions from "../../store/actions";
import { EditStudent, NewStudent, DeleteStudent } from "../dialogs";
import StudentsApi from "../../api/StudentsApi"

const StudentsTable = () => {
    const dispatch = useDispatch()

    const { students } = useSelector(state => state.students)

    const getStudents = () => {
        dispatch(actions.handleLoadingStatus(true))
        return new Promise(async resolve => {
            const { data } = await new StudentsApi().getAllStudents()
            dispatch(actions.setStudents(data))
            resolve()
        })
    }

    useEffect(() => {
        getStudents()
        dispatch(actions.handleLoadingStatus(false))
    }, []);




    const EditStudent_ = (data) => {
        dispatch(actions.openDialog({
            children: (
                <EditStudent closeDialog={() => dispatch(actions.closeDialog())} dataStudent={data} />
            )
        }))
    }
    const NewStudent_ = () => {
        dispatch(actions.openDialog({
            children: (
                <NewStudent closeDialog={() => dispatch(actions.closeDialog())}  />
            )
        }))
    }
    const DeleteStudent_ = (rowData) => {
        dispatch(actions.openDialog({
            children: (
                <DeleteStudent closeDialog={() => dispatch(actions.closeDialog())} dataStudent={rowData} />
            )
        }))
    }
    return (
        <>
            {students ? (

                <Grid item xs={12} className={"p-4"}>
                    <Fade delay={400}>
                        <TableCustom
                            actions={[
                                {
                                    icon: 'add',
                                    tooltip: 'Add Student',
                                    isFreeAction: true,
                                    onClick: (event) => NewStudent_()
                                },
                                {
                                    icon: 'delete',
                                    tooltip: 'Delete Student',
                                    onClick: (e, rowData) => DeleteStudent_(rowData)
                                },
                            ]}
                            config={StudentConfig((rowData) => EditStudent_(rowData))}
                            data={students.slice(0).reverse()}
                            style={{ boxShadow: "0px 0px 2px 0px", borderRadius: 0 }}
                            filtering={true}
                        />
                    </Fade>
                </Grid>
            ) : (
                    ""
                )}
        </>
    )
}

export default StudentsTable