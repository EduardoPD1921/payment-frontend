import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MainPage from '../Pages/MainPage';

const Routes: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={MainPage} />
            </Switch>
        </Router>
    )
}

export default Routes;