import React from 'react';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import AuthProvider from './context/AuthProvider';
import './styles/App.css';
import Ioa from './poc/Ioa'
function App() {
  return (
    // <AuthProvider>
    //   <Login/>
    //   {/* <SignUp/> */}
    // </AuthProvider>
    <Ioa />
  );
}

export default App;
