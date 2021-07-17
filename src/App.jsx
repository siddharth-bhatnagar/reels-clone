import React from 'react';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Feed from './components/Feed/Feed';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/App.css';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path='/' component={Feed} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={SignUp} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
