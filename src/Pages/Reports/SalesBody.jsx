import React from "react";
import SalesList from "../../components/Reports/SalesReport/SalesList";
import SalesButtons from "../../components/Reports/SalesReport/SalesButtons";
import SalesTable from "../../components/Reports/SalesReport/SalesTable";
import "../../components/Reports/SalesReport/style.scss";

const SalesBody = () => {
  return (
    <div className="h-[88vh] pt-6 pl-12 mt-2 bg-darkwhite  pr-8 overflow-y-scroll">
      <SalesList />
      <hr className=" mt-3 mb-6 border-2 bord" />
      <SalesButtons />
      <SalesTable />
    </div>
  );
};

export default SalesBody;
