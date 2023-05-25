import React, { useState } from "react";
import jwt_decode from "jwt-decode";
import { createContext } from "react";

const fakeAuthProvider = {
  isAuthenticated: false,
  signin(callback: VoidFunction) {
    fakeAuthProvider.isAuthenticated = true;
    setTimeout(callback, 100); // fake async
  },
  signout(callback: VoidFunction) {
    fakeAuthProvider.isAuthenticated = false;
    setTimeout(callback, 100);
  },
};

interface AuthContextType {
  token: string;
  username: string;
  signin: (user: string, callback?: VoidFunction) => void;
  signout: (callback?: VoidFunction) => void;
}

export const AuthContext = createContext<AuthContextType>(null!);

export default function AuthProvider(props: { children: React.ReactNode }) {
  const [token, setToken] = useState<string>("");
  const [username, setUserName] = useState<string>("");

  const signin = (token: string, callback?: VoidFunction) => {
    return fakeAuthProvider.signin(() => {
      setToken(token);
      const decoded = jwt_decode<{ name: string }>(token);
      setUserName(decoded.name);
      callback && callback();
    });
  };

  const signout = (callback?: VoidFunction) => {
    return fakeAuthProvider.signout(() => {
      localStorage.removeItem("token");
      localStorage.removeItem("userName");
      setToken("");
      callback && callback();
    });
  };

  return (
    <AuthContext.Provider value={{ token, username, signin, signout }}>
      {props.children}
    </AuthContext.Provider>
  );
}
