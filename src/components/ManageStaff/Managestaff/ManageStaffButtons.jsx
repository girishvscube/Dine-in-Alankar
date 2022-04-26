import React,{useEffect,useContext,useState} from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../../context/AuthContext";
import search from "../../../Images/ActiveOrder/Search_fill.png";
import { Button } from "../../Button";
import { SearchField } from "../../SearchField";

const ManageStaffButtons = () => {
  const { data, handleData } = useContext(AuthContext);

  const [look, setLook] = useState("");

  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const handleChange = (e) => {
    setLook(e.target.value);

    console.log("data", look);

    if (look.length >= 2) {
      stats();
    }
  };

  const token = localStorage.getItem("alankartoken");

  const stats = () => {
    const res = axios.get(`${BASE_URL}/admin/users?search_key=${look}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    });
    res.then((res) => {
      handleData(res.data.data.data);
    });
    res.catch((err) => {
      console.log(err);
    });
  };

  return (
    <div className="  flex justify-between">
      <div className=" flex ">
        <Link to="/menu/addnewstaff">
          <Button text="Add New Staff" className="pl-8 pr-8"></Button>
        </Link>
        <Link to="/menu/newrole">
          <Button text="Add New Role" className="pl-8 pr-8 ml-10"></Button>
        </Link>
      </div>
      <div className="w-2/4 h-14 bg-search flex justify-between focus-within:border-2 border-button_border p-2 rounded-lg">
        <SearchField onChange={handleChange} className="w-10/12" />
        <div className="pt-1 pb-1 w-1/12 bg-search">
          <img src={search} alt="search icon" />
        </div>
      </div>
    </div>
  );
};

export default ManageStaffButtons;
