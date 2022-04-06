import React from 'react'
import '../../components/ManageCategory/ManageCategoryPage/style.scss';
import ManageCategoryList from '../../components/ManageCategory/ManageCategoryPage/ManageCategoryList';
import ManageCategorySearch from '../../components/ManageCategory/ManageCategoryPage/ManageCategorySearch';
import ManageCategoryTable from '../../components/ManageCategory/ManageCategoryPage/ManageCategoryTable';

const ManageCategoryBody = () => {
  return (
    <div className="h-[88vh] pt-3 mt-2 pl-10 pr-8 bg-darkwhite overflow-y-scroll">
      <ManageCategoryList/>
      <hr className=" mt-1 mb-3 border-2 bord" />
      <ManageCategorySearch/>
      <ManageCategoryTable/>
    </div>
  )
}

export default ManageCategoryBody
