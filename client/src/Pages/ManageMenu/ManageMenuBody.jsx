import React from "react";
// import ListOfItems from "../ManageMenu/ListOfItems"
// import ManageTable from "../ManageMenu/ManageTable";
// import SearchForMenu from "../ManageMenu/SearchForMenu";
import ManageTable from "../../components/ManageMenu/ManageTable"
import ListOfItems from "../../components/ManageMenu/ListOfItems"
import SearchForMenu from "../../components/ManageMenu/SearchForMenu"

const ManageMenuBody = () => {
  return (
    // <div  className=' pr-6  bg-red-400 managemenu_body'>
    //   <ListOfItems/>
    //   <hr className=' mt-1 mb-3 border-2 bord'/>
    //   <SearchForMenu/>
    //   <ManageTable/>
    // </div>
    <div className="h-[88vh] pt-3 pl-10 pr-8 overflow-y-scroll">
      <ListOfItems />
      <hr className=" mt-1 mb-3 border-2 bord" />
      <SearchForMenu />
      <ManageTable />
    </div>
  );
};

export default ManageMenuBody;
