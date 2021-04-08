import React from 'react';
import Cookie from 'js-cookie';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import MainPage from '../Pages/MainPage';
import RegisterPage from '../Pages/RegisterPage';
import LoginPage from '../Pages/LoginPage';

const Routes: React.FC = () => {
    const cookieToken = Cookie.get('authToken');
    const sessionToken = sessionStorage.getItem('authToken');

    return (
        <Router>
            <Switch>
                <Route path="/" exact component={MainPage} />
                {!cookieToken && !sessionToken ? <Route path="/register" exact component={RegisterPage} /> : <Redirect from="/register" to="/" />}
                {!cookieToken && !sessionToken ?  <Route path="/login" exact component={LoginPage} /> : <Redirect from="/login" to="/" />}
            </Switch>
        </Router>
    )
}

export default Routes;