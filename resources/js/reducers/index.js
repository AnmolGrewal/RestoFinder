import { combineReducers } from 'redux'
import { signUpReducer } from './signUpReducer'
import { loginReducer } from './loginReducer'
import { searchReducer } from './searchReducer'

const combinedReducers = combineReducers({
    signUp: signUpReducer,
    login: loginReducer,
    search: searchReducer
})

export default combinedReducers

