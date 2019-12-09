import React from "react"
import {PageHeaderSimple} from '../components'
//import {useSelector} from "react-redux"

const Classes = () => {
 // const { classes } = useSelector(state => state.classReducer);

    return (
      <>
        <PageHeaderSimple breadcrumbItems={[{name: "Classes"}]} titlePage={"Manage Classes"} />
        
      </>
    )
}

export default Classes