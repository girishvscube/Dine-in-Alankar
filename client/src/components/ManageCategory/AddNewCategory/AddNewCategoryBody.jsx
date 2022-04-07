import React from "react";
import AddNewCategoryForm from "./AddNewCategoryForm";
import AddNewCategoryList from "./AddNewCategoryList";
import CategoryName from "./CategoryName";
import "./style.scss";

const AddNewCategoryBody = () => {
  return (
     <div className="h-[88vh] pt-6 mt-2 pl-12 pr-8 bg-darkwhite overflow-y-scroll">
     <AddNewCategoryList/>
     <hr className=' mt-3 mb-6 border-2 bord'/>
     <CategoryName/>
     <AddNewCategoryForm/>
   </div>
  );
};

export default AddNewCategoryBody;
