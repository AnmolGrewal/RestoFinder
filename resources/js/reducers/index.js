import { combineReducers } from 'redux'
import { signUpReducer } from './signUpReducer'
import { loginReducer } from './loginReducer'
import { searchReducer } from './searchReducer'
import { mainReducer } from './mainReducer';

const combinedReducers = combineReducers({
    signUp: signUpReducer,
    login: loginReducer,
    search: searchReducer,
    main: mainReducer
})

export default combinedReducers

