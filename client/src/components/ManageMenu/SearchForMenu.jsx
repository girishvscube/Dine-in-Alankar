import React, { useState} from "react";
import "./style.scss";
import search from "../../Images/ActiveOrder/Search_fill.png";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import { TextField } from "../TextField";
import { SearchField } from "../SearchField";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";



const SearchForMenu = () => {

  const {token,data,handleData } = useContext(AuthContext);

  const[look, setLook]=useState("")

  console.log("token",token)

  const handleChange=(e)=>{
    setLook(e.target.value)
   
    console.log("data",look);

    if(look.length>=2){
      stats()
    }
    
  }

  const toke ="MzY.wmiPNSpRUO_siIfi_20gJviRqrYSKtv1uuoBJZrgjfquPKF818QdN8uUu_Bt"
  
  const stats= async ()=>{
    const res = await axios(`https://test-dev-api.scube.me/admin/menus?page=1&search_key=${look}`,{
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `bearer ${toke}`
    }
    })
     console.log("d", res.data.data.data);
     handleData(res.data.data.data);
}




  return (
    <div className="flex justify-between">
      <div className=" flex ">
        <Link to="/menu/add-menu">
          <Button text="Add New Items" className="pl-6 pr-6"></Button>
        </Link>
        <div className=" text-xs  ">
          <select className=" border-2 pl-3 pr-8 pt-4 pb-4  mr-2 ml-6 border-button_border text-base outline-none text-orange rounded-lg ">
            <option className="many">All</option>
            <option value="one">Simply South</option>
            <option value="two">Chinese</option>
            <option value="three">Japanese</option>
            <option value="four">Routine</option>
          </select>
        </div>
      </div>
      <div className="w-1/2 bg-search focus-within:border-2 border-button_border text-orange  flex justify-between  pr-2  rounded-lg ">
        <div className=" w-11/12 text-lg font-semibold">
          
          <SearchField onChange={handleChange} className="w-11/12 pt-4"/>
        </div>
        <div className=" bg-search pt-2">
          <img src={search} alt="search_icon" />
        </div>
      </div>
    </div>
  );
};

export default SearchForMenu;
