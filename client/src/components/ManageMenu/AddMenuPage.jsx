import React from "react";
import AddMenuBody from "./AddMenuBody";
import HeaderNav from "../HeaderNav";

const AddMenuPage = () => {
  return (
    <div className="main">
      <div className="bg-sidenav_pink w-1/5 h-full"></div>
      <div className='w-full h-full flex flex-col'>
          <HeaderNav/>
          <AddMenuBody/>
      </div>
    </div>
  );
};

export default AddMenuPage;
