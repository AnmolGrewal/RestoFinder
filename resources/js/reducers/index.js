import { combineReducers } from 'redux'
import { signUpReducer } from './signUpReducer'
import { loginReducer } from './loginReducer'
import { searchReducer } from './searchReducer'
import { mainReducer } from './mainReducer'
import { favouriteReducer } from './favouriteReducer'
import { historyReducer } from './historyReducer'

const combinedReducers = combineReducers({
    signUp: signUpReducer,
    login: loginReducer,
    search: searchReducer,
    main: mainReducer,
    favourite: favouriteReducer,
    history: historyReducer
})

export default combinedReducers

