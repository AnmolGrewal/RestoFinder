import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {createLogger } from 'redux-logger'
import rootReducer from './reducers'

const configureStore  = (initialState)  => {
	const middleware = process.env.NODE_ENV !== 'production' ?
		[ thunk, createLogger()] :
		[ thunk]
	const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore)
	const store = createStoreWithMiddleware(rootReducer, initialState)
	return store;
}

export default configureStore