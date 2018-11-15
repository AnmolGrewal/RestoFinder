const initialState = {
    restaurantsNearby: null,
    searchLoading: false,
    currentLocation: null
}

export const searchReducer = (state=initialState, action) => {
    switch(action.type){
        case "SEARCH_BEGIN":
            return {
                ...state,
                searchLoading: true
            }
        case "SEARCH_SUCCESS":
            return {
                ...state,
                searchLoading: false,
                restaurantsNearby: action.restaurant
            }
        case "UPDATE_CURRENT_LOCATION":
            return {
                ...state,
                currentLocation: action.currentLocation
            }
        default:
            return state
    }
}