import { combineReducers } from 'redux'
import { signUpReducer } from './signUpReducer'

const combinedReducers = combineReducers({
    signUp: signUpReducer
})

export default combinedReducers

