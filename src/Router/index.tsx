import React from 'react';
import Cookie from 'js-cookie';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import MainPage from '../Pages/MainPage';
import RegisterPage from '../Pages/RegisterPage';
import LoginPage from '../Pages/LoginPage';
import ProfilePage from '../Pages/ProfilePage';
import EditProfilePage from '../Pages/EditProfilePage';

const Routes: React.FC = () => {
    const cookie_token = Cookie.get('authToken');
    const session_token = sessionStorage.getItem('authToken');

    return (
        <Router>
            <Switch>
                <Route path="/" exact component={MainPage} />
                {!cookie_token && !session_token ? <Route path="/register" exact component={RegisterPage} /> : <Redirect from="/register" to="/" />}
                {!cookie_token && !session_token ?  <Route path="/login" exact component={LoginPage} /> : <Redirect from="/login" to="/" />}
                {cookie_token || session_token ? <Route path="/profile" exact component={ProfilePage} /> : <Redirect from="/profile" to="/" />}
                {cookie_token || session_token ? <Route path="/profile/edit" exact component={EditProfilePage} /> : <Redirect from="/profile/edit" to="/" />}
            </Switch>
        </Router>
    )
}

export default Routes;