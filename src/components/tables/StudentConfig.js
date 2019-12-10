import React from "react";
import { Link } from "@material-ui/core";


const tableStyle = {
    cellStyle: {
        fontSize: 13, padding: "6px 0", textAlign: "center"
    },
    headerStyle: { fontSize: 14, textAlign: "center", fontWeight: "bold" }
};
const options = {

    pageSize: 15,
    pageSizeOptions: [15, 50, 100, 200, 1000],
    maxBodyHeight: "75vh",
    search: true
};
export function getColumns(changeStatusModal) {
    const columns = [
        {
            title: "Full Name",
            field: "fullname",
            render: rowData => (
                <>
                    <Link style={{ cursor: "pointer" }} color={"primary"} component={"p"} className={"font-800"} onClick={() => changeStatusModal(rowData)} >
                        {rowData.fullname}
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
            title: "Email",
            field: "email",
            cellStyle: {
                ...tableStyle.cellStyle,
            },
            headerStyle: {
                ...tableStyle.headerStyle,
            }
        },
        {
            title: "Federal Id",
            field: "federalId",
            cellStyle: {
                ...tableStyle.cellStyle,
            },
            headerStyle: {
                ...tableStyle.headerStyle,
            }
        },
        {
            title: "Birthday Date",
            field: "birthdayDate",
            cellStyle: {
                ...tableStyle.cellStyle,
            },
            headerStyle: {
                ...tableStyle.headerStyle,
            }
        },
        {
            title: "phoneNumber",
            field: "phoneNumber",
            render: rowData => (
                rowData.phoneNumber ? rowData.phoneNumber : "-"
            ),
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



export function StudentConfig(statementModal) {
    return {
        title: "",
        columns: getColumns(statementModal),
        options
    }

};

