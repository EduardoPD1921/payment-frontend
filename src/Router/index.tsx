import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MainPage from '../Pages/MainPage';
import RegisterPage from '../Pages/RegisterPage';
import TestPage from '../Pages/TestPage';

const Routes: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={MainPage} />
                <Route path="/register" exact component={RegisterPage} />
                <Route path="/test" exact component={TestPage} />
            </Switch>
        </Router>
    )
}

export default Routes;