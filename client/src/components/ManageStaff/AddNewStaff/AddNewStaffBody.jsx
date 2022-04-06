import React from "react";
import AddNewStaffForm from "./AddNewStaffForm";
import AddNewStaffList from "./AddNewStaffList";
import "./style.scss";

const AddNewStaffBody = () => {
  return (
    <div className="h-[88vh] pt-3 pl-10 mt-2 pr-8 bg-darkwhite overflow-y-scroll">
      <AddNewStaffList/>
      <hr className=" mt-1 mb-3 border-2 bord" />
      <AddNewStaffForm/>
    </div>
  );
};

export default AddNewStaffBody;
