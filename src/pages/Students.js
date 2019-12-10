import React from "react"
import { PageHeaderSimple, PageCarded, StudentsTable } from '../components'

//import {useSelector} from "react-redux"

const Students = () => {
    // const { classes } = useSelector(state => state.classReducer);

    return (
        <>
            <PageCarded
                classes={{
                    header: "h-56"
                }}
                header={
                    <PageHeaderSimple breadcrumbItems={[{ name: "Students" }]} titlePage="Manage Students" />
                }
                content={
                    <>
                        <div className="p-2">
                            <StudentsTable />
                        </div>
                    </>
                }
            />

        </>
    )
}

export default Students


