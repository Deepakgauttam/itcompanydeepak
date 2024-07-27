import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { FaGoogle, FaFacebookF, FaMobileAlt } from 'react-icons/fa';
import './Login.css';
import Footer from "./Footer";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const { login } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password, rememberMe);
  };

  const handleGoogleLogin = () => {
    // Handle Google login
  };

  const handleFacebookLogin = () => {
    // Handle Facebook login
  };

  const handleOTPLogin = () => {
    // Handle OTP login
  };

  return (
    <div>
      <div className="login">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="remember-me">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label>Remember Me</label>
          </div>
          <button type="submit">Login</button>
        </form>
        <hr className="divider" />
        <div className="social-login">
          <button className="google-login" onClick={handleGoogleLogin}>
            <FaGoogle className="icon" /> Login with Google
          </button>
          <button className="facebook-login" onClick={handleFacebookLogin}>
            <FaFacebookF className="icon" /> Login with Facebook
          </button>
          <button className="otp-login" onClick={handleOTPLogin}>
            <FaMobileAlt className="icon" /> Login with OTP
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
