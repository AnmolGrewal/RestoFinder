const initialState = {
    isLoading: false,
    userRegistered: false
}

export const signUpReducer = (state = initialState, action) => {
    switch(action.type){
        case "SUBMIT_BEGIN":
            return {
                ...state,
                isLoading: true
            }
        case "SUBMIT_SUCCESSFUL":
            return {
                ...state,
                isLoading: false,
                userRegistered: true
            }
        default: 
            return state
    }
}