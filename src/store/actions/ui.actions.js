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
