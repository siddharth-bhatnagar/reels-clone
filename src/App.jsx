import React from 'react';
import SignUp from './components/SignUp/SignUp';
import AuthProvider from './context/AuthProvider';
import './styles/App.css';

function App() {
  return (
    <AuthProvider>
      <SignUp />
    </AuthProvider>
  );
}

export default App;
