import * as Actions from "../actions"

const initialState = {
    students: null
}

const studentReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.SET_STUDENTS:
            return {
                ...state,
                students: action.payload
            }
        case Actions.ADD_STUDENT:
            return {
                ...state,
                students: action.payload
            }
        default:
            return state
    }
}

export default studentReducer