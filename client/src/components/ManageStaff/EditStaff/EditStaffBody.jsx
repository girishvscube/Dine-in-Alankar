import React from "react";
import EditStaffForm from "./EditStaffForm";
import EditStaffList from "./EditStaffList";
import "./style.scss";

const EditStaffBody = () => {
  return (
    <div className="h-[88vh] pt-6 pl-12 pr-8 mt-2 bg-darkwhite overflow-y-scroll">
      <EditStaffList />
      <hr className=" mt-1 mb-3 border-2 bord" />
      <EditStaffForm />
    </div>
  );
};

export default EditStaffBody;
