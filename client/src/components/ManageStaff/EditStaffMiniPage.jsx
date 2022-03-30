import React from "react";
import HeaderNav from "../HeaderNav";

const EditStaffMiniPage = () => {
  return (
    <div className="main">
      <div className="bg-sidenav_pink w-1/5 h-full"></div>
      <div className="w-full h-full flex flex-col">
        <HeaderNav/>
        <EditMenuBody />
      </div>
    </div>
  );
};

export default EditStaffMiniPage;
