const initialState = {
    userFavourites: null,
    favouritesIsLoading: false
}

const favouriteReducer = (state=initialState, action) => {
    switch(action.type){
        case "FETCH_FAVOURITES_BEGIN":
            return {
                ...state,
                favouritesIsLoading: true
            }
        case "FETCH_FAVOURITES_SUCCESS":
            return {
                ...state,
                favouritesIsLoading: false,
                userFavourites: action.favourites
            }
        default:
            return state
    }
}