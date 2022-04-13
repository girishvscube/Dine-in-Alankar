import React, { useState} from "react";
import "./style.scss";
import search from "../../Images/ActiveOrder/Search_fill.png";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import { TextField } from "../TextField";
import { SearchField } from "../SearchField";
import axios from "axios";

const SearchForMenu = () => {

 
  const[look, setLook]=useState("")

  const handleChange=(e)=>{
    setLook(e.target.value)
   
    console.log("data",look);

    if(look.length>=2){
      stats()
    }
    
  }


  const toke = "Mjk.P__uN-xiBTTboHV-xwv1wLnH81OZw4PlwgVKpQGt4Xmvh6Z2u3gaXY24Wi44"
  
  
  const stats= async ()=>{
    const res = await axios(`https://test-dev-api.scube.me/admin/menus?page=1&search_key=${look}`,{
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `bearer ${toke}`
    }
    })
     console.log("d", res);
     setLook(res);
}




  return (
    <div className="flex justify-between">
      <div className=" flex ">
        <Link to="/menu/add-menu">
          <Button className="pl-6 pr-6">Add New Items</Button>
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
