import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { store } from './app'

const isAuthenticated = () => {
    let state = store.getState()
    return state.login.loginSucessful
}

export const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            render={ props => {
                if(isAuthenticated()) {
                    return <Component {...props} />
                }
                else {
                    return (
                    <Redirect to = {
                        {
                            pathname : "/",
                            state : {
                                from: props.location
                            }
                        }}
                    
                 />
                )
                }
            }}
        />
    )
}