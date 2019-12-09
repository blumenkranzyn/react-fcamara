import * as Actions from "../actions"

const initialState = {
    navbarOpen: true,
    loading: false
}

const uiReducer = (state = initialState, action) => {

    switch (action.type) {
        case Actions.NAVBAR_STATUS:
            return {
                ...state,
                navbarOpen: action.payload
            }
        case Actions.LOADING_STATUS:
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state
    }
}

export default uiReducer