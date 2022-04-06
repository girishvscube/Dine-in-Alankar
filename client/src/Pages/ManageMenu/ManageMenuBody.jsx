import React from "react";
// import ListOfItems from "../ManageMenu/ListOfItems"
// import ManageTable from "../ManageMenu/ManageTable";
// import SearchForMenu from "../ManageMenu/SearchForMenu";
import ManageTable from "../../components/ManageMenu/ManageTable"
import ListOfItems from "../../components/ManageMenu/ListOfItems"
import SearchForMenu from "../../components/ManageMenu/SearchForMenu"

const ManageMenuBody = () => {
  return (
    
    <div className="h-[88vh] pt-3 mt-2 bg-darkwhite pl-10 pr-8 overflow-y-scroll">
      <ListOfItems />
      <hr className=" mt-1 mb-3 border-2 bord" />
      <SearchForMenu />
      <ManageTable />
    </div>
  );
};

export default ManageMenuBody;
