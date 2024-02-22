import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { loginUser } from '../services';
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
            <form style={styles.form} onSubmit={handleSubmit}>
                <h2 style={styles.heading}>Login</h2>
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
                <Link to="/Signup">Do signup here</Link>
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
        height: '70vh',
    },
    heading: {
        fontSize: '24px',
        marginBottom: '20px',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: '2px solid #ccc',
        width: '300px',
    },
    label: {
        margin: '10px 0',
        fontSize: '16px',
        textAlign: 'left',
    },
    input: {
        padding: '8px',
        fontSize: '14px',
        margin: '5px 10px',
        border: '2px solid #ccc',
        borderRadius: '4px',
    },
    button: {
        backgroundColor: '#000d6b',
        color: '#ffffff',
        padding: '10px',
        fontSize: '16px',
        border: 'none',
        borderRadius: '15px',
        cursor: 'pointer',
        marginTop: '10px',
        marginBottom: '10px',
    },
};

export default Login;
