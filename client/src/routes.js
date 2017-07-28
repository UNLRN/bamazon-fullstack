import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Home from './components/home/home';
import Customer from './components/customer/customer';
import Manager from './components/manager/manager';

export default (
    <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='customer' component={Customer} />
        <Route path='manager' component={Manager} />
    </Route>
);