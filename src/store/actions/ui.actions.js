export const OPEN_DIALOG = '[UI] DIALOG OPEN';
export const CLOSE_DIALOG = '[UI] DIALOG CLOSE';
export const NAVBAR_STATUS = "[UI] NAVBAR_STATUS"
export const LOADING_STATUS = "[UI] LOADING_STATUS"

export const handleNavbarStatus = value => ({
    type: NAVBAR_STATUS,
    payload: value
})
export const handleLoadingStatus = value => ({
    type: LOADING_STATUS,
    payload: value
})


export function closeDialog()
{
    return {
        type: CLOSE_DIALOG
    }
}

export function openDialog(options)
{
    return {
        type: OPEN_DIALOG,
        options
    }
}

