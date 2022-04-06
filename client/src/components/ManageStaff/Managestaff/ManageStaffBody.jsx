import React from "react";
import ManageStaffButtons from "./ManageStaffButtons";
import ManageStaffList from "./ManageStaffList";
import ManageStaffTable from "./ManageStaffTable";
import "./style.scss";

const ManageStaffBody = () => {
  return (
    <div className="h-[88vh] pt-3 mt-2 bg-darkwhite pl-10 pr-8 overflow-y-scroll">
      <ManageStaffList/>
      <hr className=" mt-3 mb-6 border-2 bord" />
      <ManageStaffButtons/>
      <ManageStaffTable/>
    </div>
  );
};

export default ManageStaffBody;
