const initialState = {
    userHistory: null,
    historyIsLoading: false
}

export const historyReducer = (state=initialState, action) => {
    switch(action.type){
        case "FETCH_USER_HISTORY_BEGIN":
            return {
                ...state,
                historyIsLoading: true
            }
        case "FETCH_USER_HISTORY_SUCCESS": 
            return {
                ...state,
                historyIsLoading: false,
                userHistory: action.userHistory
            }
        default:
            return state
    }
}