import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { loginUser } from '../services';
import LoginUserModel from '../models/loginUserModel';
import { BrowserInfoModel } from '../models/browserInfoModel';
import '../styles/login.css';

const Login = ({ setLoggedIn }) => {
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // Change error initial state to null
  const [loginResponse, setLoginResponse] = useState(null); // Change initial state to null

  const loginBtn = async () => {
    try {
      setError(null); // Reset error state
      setLoading(true);
  
      const userData = {
        email: email,
        password: password,
      };
  
      const user = new LoginUserModel(userData);
      const browserData = new BrowserInfoModel();
      const payload = {
        user: user,
        data: browserData
      };
  
      const response = await loginUser(payload);
      console.log("response : ", response);  

      if (response.success) {
        setLoggedIn(true);
        setLoginResponse(response.data);  
 
      } else {
        setError('Invalid username or password');  
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('An error occurred during login');  
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="main_conainer" style={styles.container}>
      <form style={styles.form}>
        <h2 style={styles.heading}>Login</h2>
        <label className='username' style={styles.label}>
          Username:
          <input
            type="text"
            value={email}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
            required
          />
        </label>
        <label className='password' style={styles.label}>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />
        </label>

        <div onClick={loginBtn} style={styles.button}>
          Login
        </div>

        <Link to="/Signup">Do signup here</Link>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {loginResponse && <p>Login Response: {JSON.stringify(loginResponse)}</p>}

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
