import React from 'react'
import "./style.scss";
import TableForm from './TableForm';
import TableList from './TableList';

const TableBody = () => {
  return (
    <div  className='w-full bg-darkwhite managemenu_body'>
    <TableList/>
    <hr className='w-11/12 ml-14 mt-1 mb-3 border-2 bord'/>
    <TableForm/>
  </div>
  )
}

export default TableBody
