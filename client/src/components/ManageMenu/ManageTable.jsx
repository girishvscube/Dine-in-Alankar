import React, { useState } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import Data from "../Data.json";
import "./style.scss";
import ToggleSwitch from "../ToggleSwitch";
import EditAndDelete from "./EditAndDelete";

const ManageTable = () => {
  const [design, setDesign] = useState("adding");

  const handleClick = () => {
    setDesign("add");
  };

  return (
    <div className=" h-[65vh] bg-white pt-2 pl-6 mt-10 box rounded-lg">
      <div className="text-orange text-xl  mt-5 mb-4 font-semibold font-sans">
        All Items
      </div>
      <div className="h-[56vh] overflow-y-scroll font-sans">
        <Table className="relative">
          <Thead className="sticky top-0 border-b-2 mb-1  bg-white head ">
            <Tr className=" text-left text-lg ">
              <Th className="font-sans pb-2">S. No.</Th>
              <Th className="font-sans pl-10 pb-2">Item Name</Th>
              <Th className="font-sans pl-12 pb-2">Price</Th>
              <Th className="font-sans pb-2 pl-12">Category</Th>
              <Th className="font-sans pl-12 pb-2">Today's Stock</Th>
              <Th className="font-sans pb-2">Availability</Th>
              <Th className="font-sans pb-2 pl-6">Action</Th>
            </Tr>
          </Thead>
          {Data.map((data, i) => {
            return (
              <Tbody>
                <Tr className="row border-b-2 font-sans">
                  <Td key={i} className="pt-9 pb-9">
                    {data.S.No}.
                  </Td>
                  <Td key={i} className=" text-left pl-10 ">
                    {data.Item_Name}
                  </Td>
                  <Td key={i} className="text-left pl-12">
                    {data.Price}
                  </Td>
                  <Td key={i} className="pl-12 text-left ">
                    {data.Category}
                  </Td>
                  <Td key={i} className="  pl-12 ">
                   <div className="flex flex-row update">
                     <input type="number" className="w-14 h-9 rounded pl-1 pr-1 outline-none border-2 border-button_border" />
                     <button className="adding ml-3 text-xs text-white font-semibold pl-1.5 pr-1.5 p-0.5" onClick={handleClick}>Update</button>
                   </div>
                  </Td>
                  <Td key={i} className="pr-24">
                    <ToggleSwitch />
                  </Td>
                  <Td className=" flex justify-center pr-12 pt-6 ">
                    <EditAndDelete />
                  </Td>
                </Tr>
              </Tbody>
            );
          })}
        </Table>
      </div>
    </div>
  );
};

export default ManageTable;
