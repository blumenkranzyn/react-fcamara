export const HIDE_MESSAGE = '[MESSAGE] CLOSE';
export const SHOW_MESSAGE = '[MESSAGE] SHOW';

export function hideMessage() {
    return {
        type: HIDE_MESSAGE
    }
}

export function showError(msg) {
    return (dispatch, getState) => {
        dispatch(showTopCenterMsg("error", msg))
    }
}

export function showTopCenterMsg(variant, msg) {
    return (dispatch, getState) => {
        dispatch(showMessage({
            message: msg,
            autoHideDuration: 3000,
            variant: variant,
            anchorOrigin: {
                vertical: 'top',
                horizontal: 'center'
            }
        }))
    }
}

export function showMessage(options) {
    return {
        type: SHOW_MESSAGE,
        options
    }
}

