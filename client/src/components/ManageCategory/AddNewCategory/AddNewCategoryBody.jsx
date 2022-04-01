import React from "react";
import AddNewCategoryForm from "./AddNewCategoryForm";
import AddNewCategoryList from "./AddNewCategoryList";
import CategoryName from "./CategoryName";
import "./style.scss";

const AddNewCategoryBody = () => {
  return (
    <div className="w-full  managemenu_body bg-mixwhite">
      <AddNewCategoryList />
      <hr className="w-11/12 ml-14 mb-3 border-2 bord" />
      <CategoryName />
      <AddNewCategoryForm />
    </div>
  );
};

export default AddNewCategoryBody;
