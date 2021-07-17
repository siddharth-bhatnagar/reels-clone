import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

function Login() {

    const { login } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    
    const handleSubmit = async (e) => {
        console.log('handle form submission');
        e.preventDefault()
        try {
            console.log('Logging in user...');
            setLoading(true);
            await login(email, password);
            console.log("Success");
            setLoading(false);
        } catch {
            setError("Failed to log in")
            setTimeout(() => setError(''), 2000)
            setLoading(false)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <div>
                    <label htmlFor=''>Email: </label>
                    <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor='password'>Password: </label>
                    <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type='submit' disabled={loading}>Login</button>
            </form>
        </div>
    );
}

export default Login;

