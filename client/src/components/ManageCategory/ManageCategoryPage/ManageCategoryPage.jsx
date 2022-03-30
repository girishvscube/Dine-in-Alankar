import React from 'react'
import HeaderNav from '../../HeaderNav'
import ManageCategoryBody from './ManageCategoryBody'
import "./style.scss";

const ManageCategoryPage = () => {
  return (
    <div className='main'>
    <div className="bg-sidenav_pink w-1/5 h-full"></div>
    <div className='w-full h-full flex flex-col'>
        <HeaderNav/>
        <ManageCategoryBody/>
    </div>
</div>
  )
}

export default ManageCategoryPage
