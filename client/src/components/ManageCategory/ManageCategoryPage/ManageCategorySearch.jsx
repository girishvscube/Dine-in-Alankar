import { border, borderColor, style } from '@mui/system';
import React, { useState } from 'react'
import "./style.scss";
import {Link} from "react-router-dom"
import search from "../../../Images/ActiveOrder/Search_fill.png"

const ManageCategorySearch = () => {
  
    const [visible, isVisible] = useState(true);
    

  return (
    <div className="  flex justify-between">
    <div className="w-1/6 h-full flex justify-between">
      <Link to="/addnewcategory">
      <div className="w-full h-full text-xs  mr-8 add text-center pl-6 pr-6 pt-4 pb-4 rounded-lg text-white font-semibold font-sans">
        Add New Category
      </div>
      </Link>
      
    </div>
    <div className='w-2/4 h-full bg-search flex justify-between p-2 rounded-lg focus-within:border-2 border-button_border text-orange'>
      <div className="h-full w-10/12 pl-2  font-semibold">
        <input
          type="text"
          className="h-9 w-full text-lg bg-search font-semibold placeholder-orange outline-none"
          placeholder="Search"
        />
      </div>
      <div className="h-full w-1/12 bg-search">
        <img src={search} alt="search icon" />
      </div>
    </div>
  </div>
  )
}

export default ManageCategorySearch
