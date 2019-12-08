import {combineReducers} from "redux"
import classes from "./class.reducer"
import message from "./message.reducer"

const appReducers = combineReducers({
    classes,
    message
})

export default appReducers 