// import { useContext } from 'react';
// import { AuthContext } from '../context/AuthContext';


// export const useAuth = () => {
//   const context = useContext(AuthContext);

//   if (context === undefined) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }

//   return context;
// };

import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authTokens, setAuthTokens] = useState(localStorage.getItem('token'));

  const login = (token) => {
    setAuthTokens(token);
    localStorage.setItem('token', token);
  };

  const logout = () => {
    setAuthTokens(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ authTokens, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

