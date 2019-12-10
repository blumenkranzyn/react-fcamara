import React from "react"
import { BounceLoader } from "react-spinners"
import { useSelector } from "react-redux"
import {makeStyles} from "@material-ui/core/styles"


const useStyles = makeStyles(theme => ({
    loader: {
        width: "100%",
        height: "100vh",
        position:"absolute",
        top:0,
        left:0,
        background: "rgba(255,255,255,0.6)",
        zIndex: 99999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    hidden: {
        visibility: "hidden"
    }
}))
const Loading = () => {
    const classes = useStyles()
    const { loading } = useSelector(state => state.ui);
    return (
        <div className={`${classes.loader} ${loading ? "" : classes.hidden}`} >
            <BounceLoader sizeUnit={"px"} size={150} color={"#FF4A00"} loading={loading} />
        </div>
    )
}
export default Loading