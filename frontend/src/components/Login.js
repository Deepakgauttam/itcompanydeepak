// import React, { useState, useContext } from 'react';
// import { AuthContext } from '../context/AuthContext';
// import { useNavigate } from "react-router-dom";
// import { FaGoogle, FaFacebookF, FaMobileAlt } from "react-icons/fa";
// import "./Login.css";
// import Footer from "./Footer";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [rememberMe, setRememberMe] = useState(false);
//   const { setAuthTokens, userName, setUserName } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("/api/auth/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password, rememberMe }),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         setAuthTokens(data.token);
//         setUserName(data.name); // Assuming you get the name from the response
//         alert("Login successful");
//         navigate("/admin"); // Redirect to admin panel
//       } else {
//         const errorData = await response.json();
//         alert(`Login failed: ${errorData.message}`);
//       }
//     } catch (error) {
//       alert("An error occurred");
//       console.error("Login error:", error);
//     }
//   };

//   const handleGoogleLogin = () => {
//     // Handle Google login
//   };

//   const handleFacebookLogin = () => {
//     // Handle Facebook login
//   };

//   const handleOTPLogin = () => {
//     // Handle OTP login
//   };

//   return (
//     <div>
//       <div className="login">
//         <h1>Login</h1>
//         <form onSubmit={handleSubmit}>
//           <label>Email</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <label>Password</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <div className="remember-me">
//             <input
//               type="checkbox"
//               checked={rememberMe}
//               onChange={(e) => setRememberMe(e.target.checked)}
//             />
//             <label>Remember Me</label>
//           </div>
//           <button type="submit">Login</button>
//         </form>
//         <hr className="divider" />
//         <div className="social-login">
//           <button className="google-login" onClick={handleGoogleLogin}>
//             <FaGoogle className="icon" /> Login with Google
//           </button>
//           <button className="facebook-login" onClick={handleFacebookLogin}>
//             <FaFacebookF className="icon" /> Login with Facebook
//           </button>
//           <button className="otp-login" onClick={handleOTPLogin}>
//             <FaMobileAlt className="icon" /> Login with OTP
//           </button>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default Login;


import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from "react-router-dom";
import { FaGoogle, FaFacebookF, FaMobileAlt } from "react-icons/fa";
import "./Login.css";
import Footer from "./Footer";

function Login() {
  console.log("Login component rendered");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const { login, setUserName } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted");

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, rememberMe }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Login response data:", data); // Log the response data
        if (data.token && data.name) {
          login(data.token);
          setUserName(data.name);
          alert("Login successful");
          navigate("/admin");
        } else {
          alert("Login failed: Invalid response data");
        }
      } else {
        const errorData = await response.json();
        alert(`Login failed: ${errorData.message}`);
        console.error("Error data:", errorData);
      }
    } catch (error) {
      alert("An error occurred");
      console.error("Login error:", error);
    }
  };

  const handleGoogleLogin = () => {
    console.log("Google login clicked");
  };

  const handleFacebookLogin = () => {
    console.log("Facebook login clicked");
  };

  const handleOTPLogin = () => {
    console.log("OTP login clicked");
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
