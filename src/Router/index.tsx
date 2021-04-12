import React from 'react';
import Cookie from 'js-cookie';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import MainPage from '../Pages/MainPage';
import RegisterPage from '../Pages/RegisterPage';
import LoginPage from '../Pages/LoginPage';
import ProfilePage from '../Pages/ProfilePage';
import EditProfilePage from '../Pages/EditProfilePage';

const Routes: React.FC = () => {
    const cookieToken = Cookie.get('authToken');
    const sessionToken = sessionStorage.getItem('authToken');

    return (
        <Router>
            <Switch>
                <Route path="/" exact component={MainPage} />
                {!cookieToken && !sessionToken ? <Route path="/register" exact component={RegisterPage} /> : <Redirect from="/register" to="/" />}
                {!cookieToken && !sessionToken ?  <Route path="/login" exact component={LoginPage} /> : <Redirect from="/login" to="/" />}
                {cookieToken || sessionToken ? <Route path="/user/profile" exact component={ProfilePage} /> : <Redirect from="/user/profile" to="/" />}
                {cookieToken || sessionToken ? <Route path="/user/edit" exact component={EditProfilePage} /> : <Redirect from="/user/edit" to="/" />}
            </Switch>
        </Router>
    )
}

export default Routes;