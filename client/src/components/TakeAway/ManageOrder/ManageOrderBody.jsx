import React from 'react'
import ManageOrderButtons from './ManageOrderButtons'
import ManageOrderList from './ManageOrderList'
import ManageOrderTable from './ManageOrderTable'
import "./style.scss"

const ManageOrderBody = () => {
  return (
    <div className="h-[88vh] pt-6 mt-2 bg-darkwhite pl-12 pr-8 overflow-y-scroll">
    <ManageOrderList/>
    <hr className=" mt-3 mb-6 border-2 bord" />
    <ManageOrderButtons/>
    <ManageOrderTable/>
  </div>
  )
}

export default ManageOrderBody
