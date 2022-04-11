import React from "react";
import "./style.scss";
import TableForm from "./TableForm";
import TableList from "./TableList";

const TableBody = () => {
  return (
    <div className="h-[88vh] pt-6 pl-12 mt-2 pr-8 bg-darkwhite overflow-y-scroll">
      <TableList />
      <hr className=" mt-3 mb-6 border-2 bord" />
      <TableForm />
    </div>
  );
};

export default TableBody;
