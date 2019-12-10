import { combineReducers } from "redux"
import message from "./message.reducer"
import ui from "./ui.reducer"

import classes from "./class.reducer"
import students from "./student.reducer"


const appReducers = combineReducers({
    message,
    ui,
    classes,
    students
})

export default appReducers 