import { combineReducers } from 'redux'
import { signUpReducer } from './signUpReducer'
import { loginReducer } from './loginReducer'

const combinedReducers = combineReducers({
    signUp: signUpReducer,
    login: loginReducer
})

export default combinedReducers

