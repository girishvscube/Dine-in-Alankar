import React, { useEffect, useState } from "react";
import { useContext } from "react";
import axios from "axios";
import search from "../../Images/ActiveOrder/Search_fill.png";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import { SearchField } from "../SearchField";
import { AuthContext } from "../../context/AuthContext";
import "./style.scss";

const SearchForMenu = () => {
  const { data, handleData } = useContext(AuthContext);
  const [value, setValue] = useState([]);
  const [data_id, setData_id] = useState();

  const [look, setLook] = useState("");

  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const handleChange = (e) => {
    setLook(e.target.value);

    console.log("data", look);

    if (look.length >= 2) {
      stats();
    }
  };

  const handleCetegory = (e) => {
    setData_id(e.target.value);
  };

  console.log("dropdown", data_id);

  const token = localStorage.getItem("alankartoken");

  const stats = () => {
    const res = axios.get(`${BASE_URL}/admin/menus?page=1&search_key=${look}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    });
    res.then((res) => {
      handleData(res.data.data);
    });
    res.catch((err) => {
      console.log(err);
    });
  };

  const select = () => {
    const res = axios.get(`${BASE_URL}/admin/categories`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    });
    res.then((res) => {
      setValue(res.data.data.data);
    });
    res.catch((err) => {
      console.log(err);
    });
  };

  console.log("valued data", value);

  useEffect(() => {
    select();
    stats();
  }, []);

  return (
    <div className="flex justify-between">
      {/* {console.log("search data",data)} */}
      <div className=" flex ">
        <Link to="/menu/add-menu">
          <Button text="Add New Items" className="pl-6 pr-6"></Button>
        </Link>
        <div className=" text-xs ">
          <select
            className="border-2  ml-8 text-lg text-orange border-button_border h-14  pl-3 pr-12 bg-white outline-none rounded-lg"
            name="category_id"
            onChange={handleCetegory}
          >
            {value.map((option) => (
              <option value={option.id}>{option.name}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="w-1/2 bg-search focus-within:border-2 border-button_border text-orange  flex justify-between  pr-2  rounded-lg ">
        <div className=" w-11/12 text-lg font-semibold">
          <SearchField onChange={handleChange} className="w-11/12 pt-4" />
        </div>
        <div className=" bg-search pt-2">
          <img src={search} alt="search_icon" />
        </div>
      </div>
    </div>
  );
};

export default SearchForMenu;
