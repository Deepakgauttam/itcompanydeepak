// // src/context/AuthContext.js
// import React, { createContext, useContext, useState } from 'react';

// const AuthContext = createContext();

// export const useAuth = () => useContext(AuthContext);

// export const AuthProvider = ({ children }) => {
//   const [authTokens, setAuthTokens] = useState(null);
//   const [userName, setUserName] = useState('');

//   const login = (tokens, name) => {
//     setAuthTokens(tokens);
//     setUserName(name);
//   };

//   const logout = () => {
//     setAuthTokens(null);
//     setUserName('');
//   };

//   return (
//     <AuthContext.Provider value={{ authTokens, userName, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// src/context/AuthContext.js
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authTokens, setAuthTokens] = useState(null);
  const [userName, setUserName] = useState('');

  const login = (tokens, user) => {
    setAuthTokens(tokens);
    setUserName(user);
  };

  const logout = () => {
    setAuthTokens(null);
    setUserName('');
  };

  return (
    <AuthContext.Provider value={{ authTokens, login, logout, userName }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
