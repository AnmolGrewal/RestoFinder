const initialState = {
    restaurantsNearby: null,
    searchLoading: false,
    currentLocationLoading: false,
    currentLocation: null
}

export const searchReducer = (state=initialState, action) => {
    switch(action.type){
        case "SEARCH_BEGIN":
            return {
                ...state,
                searchLoading: true
            }
        case "FAVOURITE_SERACH_DONE":
            return {
                ...state,
                searchLoading: false
            }
        case "SEARCH_SUCCESS":
            return {
                ...state,
                searchLoading: false,
                restaurantsNearby: action.restaurant
            }
        case "GET_LOCATION_BEGIN":
            return {
                ...state,
                currentLocationLoading: true
            }
        case "UPDATE_CURRENT_LOCATION":
            return {
                ...state,
                currentLocation: action.currentLocation,
                currentLocationLoading: false
            }
        default:
            return state
    }
}