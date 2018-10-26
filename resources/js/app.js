require('./bootstrap');
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import createStore from './store'
import 'semantic-ui-css/semantic.min.css';

import Example from './components/Example';
import SignIn from './components/SignIn'

const store = createStore()

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route exact path='/' component={Example} />
                <Route exact path='/sign' component={SignIn} />
            </div>    
        </BrowserRouter>   
    </Provider>    
    , document.getElementById('root')
);