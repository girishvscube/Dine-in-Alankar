import React from "react";
import DicsountTable from "./DiscountTable";
import DiscountList from "./DiscountList";
import "./style.scss";
import Button from "./Button";

const DiscountBody = () => {
  return (
    <div className="h-[88vh] pt-6 pl-12 mt-2 pr-8 bg-darkwhite overflow-y-scroll">
      <DiscountList />
      <hr className=" mt-3 mb-6 border-2 bord" />
      <Button/>
      <DicsountTable />
    </div>
  );
};

export default DiscountBody;
