import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from "@material-ui/core";
import TableCustom from "./TableCustom";
import { StudentConfig } from "./StudentConfig";
import { Fade } from 'react-reveal';
import * as actions from "../../store/actions";
import { EditStudent, NewStudent } from "../dialogs";
import StudentsApi from "../../api/StudentsApi"

const StudentsTable = () => {
    const refCustomTable = useRef(null);
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
        students && (
            dispatch(actions.handleLoadingStatus(false))
        )
    }, [students])



    const EditStudent_ = (data, ref) => {
        dispatch(actions.openDialog({
            children: (
                <EditStudent closeDialog={() => dispatch(actions.closeDialog())} dataStudent={data} refCustomTable={ref} />
            )
        }))
    }
    const NewStudent_ = (ref) => {
        dispatch(actions.openDialog({
            children: (
                <NewStudent closeDialog={() => dispatch(actions.closeDialog())} refCustomTable={ref} getStudents={getStudents} />
            )
        }))
    }
    return (
        <>
            {students ? (

                <Grid item xs={12} className={"p-8"}>
                    <Fade delay={400}>
                        <TableCustom
                            actions={[
                                {
                                    icon: 'add',
                                    tooltip: 'Add Student',
                                    isFreeAction: true,
                                    onClick: (event) => NewStudent_(refCustomTable)
                                }
                            ]}
                            config={StudentConfig((rowData) => EditStudent_(rowData, refCustomTable))}
                            data={students}
                            style={{ boxShadow: "0px 0px 2px 0px", borderRadius: 0 }}
                            showDateFilter={true}
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