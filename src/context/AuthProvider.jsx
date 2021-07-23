import React, { useState, useEffect } from 'react';
import { auth } from '../firebase/firebase';

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
        console.log("useEffect")
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
            setLoading(false);
            console.log("Observer");
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
        <AuthContext.Provider value={contextObject} >
            {!loading && children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
