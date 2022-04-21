import React, { useEffect, useState, createContext } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [token, setToken] = useState("MzY.wmiPNSpRUO_siIfi_20gJviRqrYSKtv1uuoBJZrgjfquPKF818QdN8uUu_Bt");
  const [data, setData] = useState([]);

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

  const handleData = (newData) => {
    setData(newData);
  };

  return (
    <AuthContext.Provider value={{ token, handleToken , handleData, data}}>
      {children}
    </AuthContext.Provider>
  );
};
