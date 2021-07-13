import React, { useState, useEffect } from 'react';
import { auth } from '../firebase';

export const AuthContext = React.createContext();

function AuthProvider({ children }) {

    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    const login = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password);
    }

    const signup = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    const logout = () => {
        return auth.signOut();
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
            setLoading(false);
        });

        return () => {
            unsubscribe();
        }
    }, []);

    const contextObject = {
        currentUser,
        login,
        signup,
        logout
    }

    return (
        <AuthContext.Provider value={contextObject}>
            {loading === false ? children : 'Loading...'}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
