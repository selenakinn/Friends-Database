import React, { createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [authUserInfo, setAuthUserInfo] =
    useLocalStorage('s11d2', {});

  const isAuthenticated = Object.keys(authUserInfo).length > 0;

  const login = () => {
    setAuthUserInfo({ loggedIn: true });
  };

  const logout = () => {
    setAuthUserInfo({});
  };

  const loginPost = (userInfo) => {
    setAuthUserInfo(userInfo);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
        loginPost,
        authUserInfo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
