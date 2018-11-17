export const toggleMoreInfo = () => {
    return (dispatch) => {
        dispatch({type: "TOGGLE_MORE_INFO"})
    }
}