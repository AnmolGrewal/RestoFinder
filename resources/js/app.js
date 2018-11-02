require('./bootstrap');
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Router, Route, Switch, Link } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import createStore from './store'
import 'semantic-ui-css/semantic.min.css';


import { PrivateRoute } from './PrivateRoute'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Main from './components/Main/Main'

export const store = createStore();
export const history = createBrowserHistory()

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <div>
                <Route exact path='/' component={SignIn} />
                <Route exact path='/signup' component={SignUp} />
                <PrivateRoute exact path='/home' component={Main} />
            </div>    
        </Router>   
    </Provider>    
    , document.getElementById('root')
);