export const ADD_STUDENT = "[STUDENT] ADD_STUDENT"
export const SET_STUDENTS = "[STUDENT] SET_STUDENTS"

export const setStudents = (value) => {
        return dispatch => {
                dispatch({
                        type: SET_STUDENTS,
                        payload: value
                })
        }
}
export const addStudent = (value) => {
        return dispatch => {
                dispatch({
                        type: ADD_STUDENT,
                        payload: value
                })
        }
}