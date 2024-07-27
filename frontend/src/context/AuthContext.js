import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authTokens, setAuthTokens] = useState(null);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const tokens = localStorage.getItem('authTokens');
    const name = localStorage.getItem('userName');
    if (tokens) {
      setAuthTokens(tokens);
      setUserName(name);
    }
  }, []);

  const setTokens = (data) => {
    localStorage.setItem('authTokens', data);
    setAuthTokens(data);
  };

  const setName = (name) => {
    localStorage.setItem('userName', name);
    setUserName(name);
  };

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens, userName, setUserName: setName }}>
      {children}
    </AuthContext.Provider>
  );
};
