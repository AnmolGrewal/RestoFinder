const initialState = {
    loginSucessful: false,
    loginRejected: false,
    userDoesNotExist: false,
    isLoading: false,
    loggedInAs: null
}

export const loginReducer = (state=initialState, action) => {
    switch(action.type){
        case "AUTHENTICATE_BEGIN":
            return {
                ...state,
                isLoading: true
            }
        case "AUTHENTICATE_SUCCESS":
            return {
                ...state,
                isLoading: false,
                loginSucessful: true,
                loggedInAs: action.loggedInAs
            }
        case "AUTHENTICATE_FAIL":
            return {
                ...state,
                isLoading: false,
                loginRejected: true
            }
        case "USER_DOES_NOT_EXIST":
            return {
                ...state,
                isLoading: false,
                userDoesNotExist: true
            }
        case "LOGOUT_USER":
            return {
                ...state,
                loginSucessful: false
            }
        default:
            return state
    }
}