import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authTokens, setAuthTokens] = useState(localStorage.getItem('tokens'));
  const [userName, setUserName] = useState("");

  const setTokens = (data) => {
    localStorage.setItem('tokens', data);
    setAuthTokens(data);
  };

  const logout = () => {
    localStorage.removeItem('tokens');
    setAuthTokens(null);
    setUserName("");
  };

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens, userName, setUserName, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
