const initialState = {
    loginSucessful: null,
    loginRejected: null,
    userDoesNotExist: null,
    isLoading: null
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
                loginSucessful: true
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
        default:
            return state
    }
}