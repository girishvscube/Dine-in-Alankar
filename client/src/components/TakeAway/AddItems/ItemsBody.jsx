import React from "react";
import ItemsButton from "./ItemsButton";
import ItemsForm from "./ItemsForm";
import ItemsList from "./ItemsList";
import "./style.scss";

const ItemsBody = () => {
  return (
    <div className="h-[88vh] pt-3 pl-10 mt-2 pr-8 bg-darkwhite overflow-y-scroll">
      <ItemsList />
      <hr className=" mt-3 mb-6 border-2 bord" />
      <ItemsButton />
      <ItemsForm />
    </div>
  );
};

export default ItemsBody;
