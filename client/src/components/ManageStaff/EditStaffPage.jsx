import React from "react";
import EditStaffBody from "./EditStaffBody";
import HeaderNav from "../HeaderNav";
import "../style.scss";

const EditStaffPage = () => {
  return (
    <div>
      <div className="main">
        <div className="bg-sidenav_pink w-1/5 h-full">
          
        </div>
        <div className="w-full h-full flex flex-col">
          <HeaderNav/>
          <EditStaffBody/>
        </div>
      </div>
    </div>
  )
}

export default EditStaffPage
