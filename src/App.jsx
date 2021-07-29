import React from 'react';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Feed from './components/Feed/Feed';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Profile from './components/Profile/Profile';
import './styles/App.css';

function App() {
    return (
        <Router>
            <AuthProvider>
                <Switch>
                    <PrivateRoute exact path="/" privateComponent={Feed} />
                    <PrivateRoute exact path="/profile" privateComponent={Profile} />
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Signup} />
                </Switch>
            </AuthProvider>
        </Router>
    );
}

export default App;
