import React, { useEffect, useState, createContext } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [token, setToken] = useState("");

  useEffect(() => {
    let token = localStorage.getItem("alankarToken");
    if (token) {
      setToken(token);
      navigate("/menu/dashboard");
    }
  }, []);

  const handleToken = (newToken) => {
    localStorage.setItem("alankarToken", newToken);
    setToken(newToken);
  };

  return (
    <AuthContext.Provider value={{ token, handleToken }}>
      {children}
    </AuthContext.Provider>
  );
};
