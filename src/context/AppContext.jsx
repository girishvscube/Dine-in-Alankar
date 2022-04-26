import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [customerDetails, setCustomerDetails] = useState({});
  const [orderData, setOrderData] = useState([]);
  const [show, setShow] = useState(false);
  const [date, setDate] = useState();

  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const token = localStorage.getItem("alankartoken");

  const [takeAwayCart, setTakeawayCart] = useState([]);

  const handleTakeawayCart = (newCart) => {
    setTakeawayCart(newCart);
  };

  const handleCustomerDetails = (newDetails) => {
    setCustomerDetails(newDetails);
  };

  const getAllOrdersData = () => {
    axios
      .get(`${BASE_URL}/orders/type?page=2&order_type=1`, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      })

      .then((res) => {
        // console.log(res.data.data.data, "all data");
        setOrderData(res.data.data.data);
        //  console.log("HEllo");
      })
      .then((error) => {
        // console.log("All Orders Active Order Error : ", error);
      });
  };

  const handleShow = (value) => {
    setShow(value);
  };

  const handleDate = (newDate) => {
    setDate(newDate);
  };
  useEffect(() => {
    getAllOrdersData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        customerDetails,
        handleCustomerDetails,
        takeAwayCart,
        handleTakeawayCart,
        orderData,
        getAllOrdersData,
        show,
        handleShow,
        date,
        handleDate,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
