import React from 'react'
import CategoryForm from './CategoryForm';
import CategoryList from './CategoryList';
import EditName from './EditName';
import "./style.scss";

const CategoryBody = () => {
  return (
    <div className="h-[88vh] pt-3 mt-2 pl-10 pr-8 bg-darkwhite overflow-y-scroll">
     <CategoryList/>
     <hr className=' mt-3 mb-6 border-2 bord'/>
     <EditName/>
     <CategoryForm/>
   </div>
  )
}

export default CategoryBody
