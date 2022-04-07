import React from 'react'
import SalesButtons from './SalesButtons'
import SalesList from './SalesList'
import SalesTable from './SalesTable'
import "./style.scss"

const SalesBody = () => {
  return (
    <div className="h-[88vh] pt-6 pl-12 mt-2 bg-darkwhite  pr-8 overflow-y-scroll">
    <SalesList/>
    <hr className=" mt-3 mb-6 border-2 bord" />
    <SalesButtons/>
    <SalesTable/>
  </div>
  )
}

export default SalesBody
