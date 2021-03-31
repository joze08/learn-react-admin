import React from 'react';

import {Route, Switch} from 'react-router-dom'

import Login from 'pages/AuthPages/Login';
import SignIn from 'pages/AuthPages/Signin';

const AuthRoutes = () => {
    return (
        <Switch>
            <Route path="/Login" component={Login}/>
            <Route path="/" component={SignIn}/>
        </Switch>
    );
}

export default AuthRoutes;
