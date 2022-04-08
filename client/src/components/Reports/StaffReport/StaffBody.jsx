import React from 'react'
import StaffButton from './StaffButton'
import StaffList from './StaffList'
import StaffTable from './StaffTable'
import "./style.scss";

const StaffBody = () => {
  return (
    <div className="h-[88vh] pt-6 pl-12 mt-2 bg-darkwhite  pr-8 overflow-y-scroll">
    <StaffList/>
    <hr className=" mt-3 mb-6 border-2 bord" />
    <StaffButton/>
    <StaffTable/>
  </div>
  )
}

export default StaffBody
