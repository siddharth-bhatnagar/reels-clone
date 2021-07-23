import React from 'react';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import AuthProvider from './context/AuthProvider';
import './styles/App.css';

function App() {
    return (
        <AuthProvider>
            <Login />
            {/* <Signup /> */}
        </AuthProvider>
    );
}

export default App;
