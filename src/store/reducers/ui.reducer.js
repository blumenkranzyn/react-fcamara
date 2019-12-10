import * as Actions from "../actions"

const initialState = {
    navbarOpen: true,
    loading: false,
    dialog: {
        state: false,
        options: {
            children: 'Hi'
        }
    }
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
        case Actions.OPEN_DIALOG:
            {
                return {
                    ...state,
                    dialog: {
                        state: true,
                        options: {
                            ...state.options,
                            ...action.options
                        }
                    }
                };
            }
        case Actions.CLOSE_DIALOG:
            {
                return {
                    ...state,
                    dialog: {
                        state: false,
                        options: {
                            ...state.options,
                            ...action.options
                        }
                    }
                };
            }
        default:
            return state
    }
}

export default uiReducer