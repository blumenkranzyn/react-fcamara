import React, { useRef } from "react";
import { useDispatch } from 'react-redux';
import { Grid } from "@material-ui/core";
import TableCustom from "./TableCustom";
import { ClassConfig } from "./ClassConfig";
import { Fade } from 'react-reveal';
import * as actions from "../../store/actions";
import EditClass from "../dialogs/EditClass";

const ClassTable = () => {
    const refCustomTable = useRef(null);
    const dispatch = useDispatch()
    const data = [{
        "description": "Tools",
        "supplier": "Pixope",
        "project": "Testing",
        "amount": "36660.46",
        "dueDate": "07/01/2019"
    }, {
        "description": "Books",
        "supplier": "DabZ",
        "project": "Testing",
        "amount": "79340.86",
        "dueDate": "29/05/2019"
    }, {
        "description": "Clothing",
        "supplier": "Skivee",
        "project": "Testing",
        "amount": "74197.34",
        "dueDate": "06/06/2019"
    }, 
]

    const EditClasses = (data, ref) => {
        dispatch(actions.openDialog({
            children: (
                <EditClass closeDialog={() => dispatch(actions.closeDialog())} dataClass={data} refCustomTable={ref} />
            )
        }))
    }
    return (

        <Grid item xs={12} className={"p-4"}>
            <Fade delay={400}>
                <TableCustom
                    config={ClassConfig((rowData) => EditClasses(rowData, refCustomTable))}
                    data={data}
                    style={{ boxShadow: "0px 0px 2px 0px", borderRadius: 0 }}
                    showDateFilter={true}
                />
            </Fade>
        </Grid>
    )
}

export default ClassTable