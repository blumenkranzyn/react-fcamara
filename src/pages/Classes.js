import React from "react"
import {PageHeaderSimple, PageCarded} from '../components'

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
                  <PageHeaderSimple breadcrumbItems={[{name: "Classes"}]} titlePage={"Manage Classes"} />
                }
                content={
                    <>
                        <div className="p-24">
                            
                        </div>
                    </>
                }
            />
        
      </>
    )
}

export default Classes