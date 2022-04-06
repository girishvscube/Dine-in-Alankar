import React from "react";
import AddNewCategoryForm from "./AddNewCategoryForm";
import AddNewCategoryList from "./AddNewCategoryList";
import CategoryName from "./CategoryName";
import "./style.scss";

const AddNewCategoryBody = () => {
  return (
     <div className="h-[88vh] pt-3 mt-2 pl-10 pr-8 bg-darkwhite overflow-y-scroll">
     <AddNewCategoryList/>
     <hr className=' mt-1 mb-3 border-2 bord'/>
     <CategoryName/>
     <AddNewCategoryForm/>
   </div>
  );
};

export default AddNewCategoryBody;
