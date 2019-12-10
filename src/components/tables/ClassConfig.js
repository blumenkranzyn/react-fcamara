import React from "react";
import { Link } from "@material-ui/core";


const tableStyle = {
    cellStyle: {
        fontSize: 13, padding: "6px 0", textAlign: "center"
    },
    headerStyle: { fontSize: 14, textAlign: "center", fontWeight: "bold" }
};
const options = {

    pageSize: 20,
    pageSizeOptions: [20, 50, 100, 200, 1000],
    maxBodyHeight: "75vh",
    search: true
};
export function getColumns(changeStatusModal) {
    const columns = [
        {
            title: "Description",
            field: "description",
            render: rowData => (
                <>
                    <Link style={{ cursor: "pointer" }} color={"primary"} component={"p"} className={"font-800"} onClick={() => changeStatusModal(rowData)} >
                        {rowData.description}
                    </Link>
                </>
            ),
            cellStyle: {
                ...tableStyle.cellStyle,
            },
            headerStyle: {
                ...tableStyle.headerStyle,
            }
        },
        {
            title: "Cost Code",
            field: "supplier",
            cellStyle: {
                ...tableStyle.cellStyle,
            },
            headerStyle: {
                ...tableStyle.headerStyle,
            }
        },
        {
            title: "Supplier",
            field: "supplier",
            cellStyle: {
                ...tableStyle.cellStyle,
            },
            headerStyle: {
                ...tableStyle.headerStyle,
            }
        },
        {
            title: "Project",
            field: "project",
            cellStyle: {
                ...tableStyle.cellStyle,
            },
            headerStyle: {
                ...tableStyle.headerStyle,
            }
        },
        {
            title: "Amount",
            field: "amount",
            render: rowData => (
                rowData.amount ? rowData.amount : "-"
            ),
            cellStyle: {
                ...tableStyle.cellStyle,
            },
            headerStyle: {
                ...tableStyle.headerStyle,
            }
        },
        {
            title: "Due Date",
            field: "dueDate",
            //render: rowData => <>{rowData.dueDate ? unixtimestampToDate(rowData.dueDate * 1000) : "-"}</>,
            cellStyle: {
                ...tableStyle.cellStyle,
            },
            headerStyle: {
                ...tableStyle.headerStyle,
            }
        },

    ];
    return columns
}



export function ClassConfig(statementModal) {
    return {
        title: "",
        columns: getColumns(statementModal),
        options
    }

};

