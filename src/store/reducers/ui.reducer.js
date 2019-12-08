import * as Actions from "../actions"

const initialState = {
    navbarOpen: true
}

const uiReducer = (state = initialState, action) => {

    switch (action.type) {
        case Actions.NAVBAR_STATUS:
            return {
                ...state,
                navbarOpen: action.payload
            }
        default:
            return state
    }
}

export default uiReducer