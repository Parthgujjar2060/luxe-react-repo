import React, { useState } from 'react';
import { loginUser } from '../services'
import LoginUserModel from '../models/loginUserModel';


const Login = () => {

    const [email, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const loginBtn = async () => {
        try {
            const userData = {
                email: email,
                password: password
            }
            const user = new LoginUserModel(userData);
            console.log(user);
            await loginUser(user);
          
        } catch (error) {
         
        }
    };
    

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Login</h2>
            <form style={styles.form} onSubmit={handleSubmit}>
                <label style={styles.label}>
                    Username:
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setUsername(e.target.value)}
                        style={styles.input}
                        required
                    />
                </label>
                <label style={styles.label}>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={styles.input}
                        required
                    />
                </label>
                <button onClick={loginBtn} type="submit" style={styles.button}>
                    Log In
                </button>

            </form>
        </div>
    );
};


const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
    },
    heading: {
        fontSize: '24px',
        marginBottom: '20px',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        width: '300px',
    },
    label: {
        margin: '10px 0',
        fontSize: '16px',
    },
    input: {
        padding: '8px',
        fontSize: '14px',
        margin: '5px 0',
        border: '1px solid #ccc',
        borderRadius: '4px',
    },
    button: {
        backgroundColor: '#4CAF50',
        color: 'white',
        padding: '10px',
        fontSize: '16px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
};

export default Login;
