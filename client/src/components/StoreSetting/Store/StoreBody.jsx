import React from "react";
import StoreForm from "./StoreForm";
import StoreList from "./StoreList";
import "./style.scss";

const StoreBody = () => {
  return (
    <div className="h-[88vh] pt-6 pl-12 mt-2 pr-8 bg-darkwhite overflow-y-scroll">
      <StoreList />
      <hr className=" mt-3 mb-6 border-2 bord" />
      <StoreForm />
    </div>
  );
};

export default StoreBody;
