import React from "react"
import {PageHeaderSimple, PageCarded, ClassesTable} from '../components'

//import {useSelector} from "react-redux"

const Classes = () => {
 // const { classes } = useSelector(state => state.classReducer);

    return (
      <>
      <PageCarded
                classes={{
                    header: "h-56"
                }}
                header={
                  <PageHeaderSimple breadcrumbItems={[{name: "Classes"}]} 
                  />
                }
                content={
                    <>
                        <div className="p-2">
                            <ClassesTable />
                        </div>
                    </>
                }
            />
        
      </>
    )
}

export default Classes