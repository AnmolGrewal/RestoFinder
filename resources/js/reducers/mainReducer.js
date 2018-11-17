const initialState = {
    moreInfoVisible: false
}

export const mainReducer = (state=initialState, action) => {
    switch(action.type){
        case "TOGGLE_MORE_INFO":
            return {
                ...state,
                moreInfoVisible: !state.moreInfoVisible
            }
        default:
            return state
    }
}