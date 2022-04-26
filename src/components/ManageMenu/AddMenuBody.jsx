import React from "react";
import AddMenuForm from "./AddMenuForm";
import AddMenuList from "./AddMenuList";
import "./style.scss";

const AddMenuBody = () => {
  return (
    <div className="h-[88vh] pt-6 pl-12 mt-2 pr-8 bg-darkwhite overflow-y-scroll">
      <AddMenuList />
      <hr className=" mt-3 mb-6 border-2 bord" />
      <AddMenuForm />
    </div>
  );
};

export default AddMenuBody;
