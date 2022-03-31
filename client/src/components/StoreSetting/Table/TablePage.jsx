import React from 'react'
import HeaderNav from '../../HeaderNav'
import TableBody from './TableBody'
import "./style.scss";

const TablePage = () => {
  return (
    <div>
    <div className="main">
      <div className="bg-sidenav_pink w-1/5 h-full">
        
      </div>
      <div className="w-full h-full flex flex-col">
        <HeaderNav/>
        <TableBody/>
      </div>
    </div>
  </div>
  )
}

export default TablePage
