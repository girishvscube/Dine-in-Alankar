import React from "react";
import HeaderNav from "../../HeaderNav";
import AddNewCategoryBody from "./AddNewCategoryBody";
import "./style.scss";

const AddNewCategoryPage = () => {
  return (
    <div className="main">
      <div className="bg-sidenav_pink w-1/5 h-full"></div>
      <div className="w-full h-full flex flex-col">
        <HeaderNav/>
        <AddNewCategoryBody/>
      </div>
    </div>
  );
};

export default AddNewCategoryPage;
