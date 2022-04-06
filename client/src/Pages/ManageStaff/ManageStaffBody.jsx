import React from "react";
import ManageStaffButtons from '../../components/ManageStaff/Managestaff/ManageStaffButtons';
import ManageStaffList from '../../components/ManageStaff/Managestaff/ManageStaffList';
import ManageStaffTable from '../../components/ManageStaff/Managestaff/ManageStaffTable'
import '../../components/ManageStaff/Managestaff/style.scss';

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
