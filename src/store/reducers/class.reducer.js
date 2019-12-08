import * as Actions from "../actions"

const initialState = {
    classes: []
}

const classReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.ADD_CLASS: 
        return {
            ...state, 
            classes: action.payload
        }
        default:
            return state
    }
}

export default classReducer