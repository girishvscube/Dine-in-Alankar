import React from 'react'
import "./style.scss";
import ManageCategoryList from './ManageCategoryList';
import ManageCategorySearch from './ManageCategorySearch';
import ManageCategoryTable from './ManageCategoryTable';

const ManageCategoryBody = () => {
  return (
    <div  className='w-full managemenu_body bg-mixwhite'>
      <ManageCategoryList/>
      <hr className='w-11/12 ml-14 mt-1 mb-3 border-2 bord'/>
      <ManageCategorySearch/>
      <ManageCategoryTable/>
    </div>
  )
}

export default ManageCategoryBody
