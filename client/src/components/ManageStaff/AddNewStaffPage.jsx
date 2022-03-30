import React from "react";
import AddNewStaffBody from "./AddNewStaffBody";
import HeaderNav from "../HeaderNav";
import "../style.scss";

const AddNewStaffPage = () => {
  return (
    <div>
      <div className="main">
        <div className="bg-sidenav_pink w-1/5 h-full">
          
        </div>
        <div className="w-full h-full flex flex-col">
          <HeaderNav />
          <AddNewStaffBody/>
        </div>
      </div>
    </div>
  );
};

export default AddNewStaffPage;
