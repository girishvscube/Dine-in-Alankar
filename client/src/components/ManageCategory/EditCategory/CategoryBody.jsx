import React from 'react'
import CategoryForm from './CategoryForm';
import CategoryList from './CategoryList';
import "./style.scss";

const CategoryBody = () => {
  return (
    <div className="h-[88vh] pt-6 mt-2 pl-12 pr-8 bg-darkwhite overflow-y-scroll">
     <CategoryList/>
     <hr className=' mt-3 mb-6 border-2 bord'/>
     <CategoryForm/>
   </div>
  )
}

export default CategoryBody
