import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { loginUser } from '../services';
import LoginUserModel from '../models/loginUserModel';
import{ BrowserInfoModel } from '../models/browserInfoModel.js';
import logincss from '../styles/login.css';



const Login = () => {
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const loginBtn = async () => {

    console.log('Login button clicked');

    try {

      setError(null);
      setLoading(true);
        console.log("error null, loading true")
      const userData = {
        email: email,
        password: password,
      };

      console.log('User data:', userData);
      const user = new LoginUserModel(userData);
      const browserData = new BrowserInfoModel();
      const payload = {
        user: user,
        data : browserData
      };

      console.log('Payload:', payload);

      // API Call
      const response = await loginUser(payload);

      console.log('Response:', response);

    } catch (error) {
      setError('Invalid username or password');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginBtn();
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
                <button type="submit" style={styles.button} onClick={loginBtn}>
                    Log In
                </button>
                <Link to="/Signup">Do signup here</Link>
            </form>
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
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
  // Media query
  '@media (max-width: 768px)': {
    container: {
      height: '100vh',
    },
    form: {
      width: '80%',
    },
  },
};
export default Login;
