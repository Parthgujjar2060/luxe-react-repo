import React, { useRef, useState } from 'react';
import { signUpuser } from '../services';
import SignUpUserModel from '../models/signUpUserModel';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../styles/login.css'; // Import the shared CSS file

const Signup = () => {
  const navigate = useNavigate();
  const firstname = useRef('');
  const lastname = useRef('');
  const username = useRef('');
  const password = useRef('');
  const [signupStatus, setSignupStatus] = useState('');

  const checkInputs = async () => {
    try {
      const user = {
        fname: firstname.current.value,
        lname: lastname.current.value,
        email: username.current.value,
        password: password.current.value,
      };

      const signUpUser = new SignUpUserModel(user);

      const response = await signUpuser(user);
      console.log("User", response);

      if (response && response.status === 200) {
        setSignupStatus("User signed up successfully");
        navigate('/login');
      } else if (response && response.status === 409) {
        setSignupStatus("User already exists");
        // Handle the case where the user already exists, show an error message or update UI accordingly
      }
    } catch (e) {
      console.log("Error", e);
      setSignupStatus("Error during signup");
    }
  };

  return (
    <div className="main_container" style={styles.container}>
      <div style={styles.form}>
        <h2 style={styles.heading}>Sign up to Luxe Wheels</h2>
        <input
          type="text"
          placeholder="First Name"
          ref={firstname}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Last Name"
          ref={lastname}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Username or Email Address"
          ref={username}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          ref={password}
          style={styles.input}
        />
        <div onClick={checkInputs} style={styles.button}>
          Sign up
        </div>
        {signupStatus && (
          <p style={{ color: signupStatus.includes("Error") ? 'red' : 'green' }}>
            {signupStatus}
          </p>
        )}
      </div>
      <div className='signUp'>
        <Link to="/login">Already have an account? Log in</Link>
      </div>
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
    backgroundColor: '#fff', 
    borderRadius: '10px', 
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)', 
    padding: '20px', 
    width: '300px',
    boxSizing: 'border-box', 
  },
  input: {
    padding: '8px',
    fontSize: '14px',
    margin: '10px 0',
    border: '2px solid #ccc',
    borderRadius: '4px',
    width: '100%',
    boxSizing: 'border-box',
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
    width: '40%',
    boxSizing: 'border-box',
  },
  link: {
    textDecoration: 'none', 
    color: '#000d6b',  
    marginTop: '10px',  
  },
};

export default Signup;
