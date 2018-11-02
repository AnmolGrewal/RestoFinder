require('./bootstrap');
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import createStore from './store'
import 'semantic-ui-css/semantic.min.css';

import Example from './components/Example';
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Main from './components/Main/Main'

const store = createStore();

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route exact path='/' component={SignIn} />
                <Route exact path='/login' component={SignIn} />
                <Route exact path='/signup' component={SignUp} />
                <Route exact path='/home' component={Main} />
            </div>    
        </BrowserRouter>   
    </Provider>    
    , document.getElementById('root')
);