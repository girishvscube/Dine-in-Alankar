import React from 'react'
import ManageOrderButtons from '../../components/TakeAway/ManageOrder/ManageOrderButtons'
import ManageOrderList from '../../components/TakeAway/ManageOrder/ManageOrderList'
import ManageOrderTable from '../../components/TakeAway/ManageOrder/ManageOrderTable'
import "../../components/TakeAway/ManageOrder/style.scss";

const ManageOrderBody = () => {
  return (
    <div className="h-[88vh] pt-3 mt-2 bg-darkwhite pl-10 pr-8 overflow-y-scroll">
    <ManageOrderList/>
    <hr className=" mt-3 mb-6 border-2 bord" />
    <ManageOrderButtons/>
    <ManageOrderTable/>
  </div>
  )
}

export default ManageOrderBody
