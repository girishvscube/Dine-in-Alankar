import React from 'react'
import ManageCategoryList from './ManageCategoryList';
import ManageCategorySearch from './ManageCategorySearch';
import ManageCategoryTable from './ManageCategoryTable';
import "./style.scss";

const ManageCategoryBody = () => {
  return (
    <div  className='w-full bg-darkwhite bg-mixwhite'>
      <ManageCategoryList/>
      <hr className='w-11/12 ml-14 mt-1 mb-3 border-2 bord'/>
      <ManageCategorySearch/>
      <ManageCategoryTable/>
    </div>
  )
}

export default ManageCategoryBody
