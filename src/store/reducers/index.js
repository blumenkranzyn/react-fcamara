import {combineReducers} from "redux"
import classes from "./class.reducer"
import message from "./message.reducer"
import ui from "./ui.reducer"

const appReducers = combineReducers({
    classes,
    message,
    ui
})

export default appReducers 