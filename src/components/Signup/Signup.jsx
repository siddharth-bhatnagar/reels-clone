import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../context/AuthProvider';

function Signup() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const { signup } = useContext(AuthContext);
    console.log(signup);

    const handleSignUp = async (event) => {
        event.preventDefault();
        setLoading(true);
        let res = await signup(email, password);
        let uid = res.user.uid;
        console.log(uid);
        setLoading(false);
    }

    return (
        <div>
            <form onSubmit={handleSignUp} >
                <div>
                    <label htmlFor=''>UserName</label>
                    <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor=''>Email</label>
                    <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor=''>Password</label>
                    <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type='submit' disabled={loading}>SignUp</button>
            </form>
        </div>
    );
}

export default Signup;
