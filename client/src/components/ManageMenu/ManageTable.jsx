import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import Data from "../Data.json";
import "../style.scss";
import ToggleSwitch from "../ToggleSwitch";
import EditAndDelete from "./EditAndDelete";

const ManageTable = () => {
 
  return (
    <div className=" w-11/12 h-[440px] ml-14 mr-12  overflow-y-scroll">
      
      <Table className="">
        <Thead className="sticky top-0 border-b-2 mb-1 bg-white  border-red-200 ">
          <Tr className="font-sans font-semibold">
            <Th>S. No.</Th>
            <Th>Item Name</Th>
            <Th>Price</Th>
            <Th>Category</Th>
            <Th>Today's Stock</Th>
            <Th>Availability</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        {Data.map((data, i) => {
          return (
            <Tbody>
              <Tr className="row border-b-2 font-sans border-red-200">
                <Td key={i} className="pt-9 text-center pb-9">
                  {data.S.No}
                </Td>
                <Td key={i} className="pt-9 text-center pb-9">
                  {data.Item_Name}
                </Td>
                <Td key={i} className="pt-9 text-center pb-9">
                  {data.Price}
                </Td>
                <Td key={i} className="pt-9 text-center pb-9">
                  {data.Category}
                </Td>
                <Td key={i} className="pt-9 text-center pb-9">
                  {data.Today_Stock}
                </Td>
                <Td key={i} className="pt-9 pb-9">
                  <ToggleSwitch/>
                </Td>
                <Td className="pt-9 flex justify-center  pb-9">
                 <EditAndDelete/>
                </Td>
              </Tr>
            </Tbody>
          );
        })}
      </Table>
    </div>
  );
};

export default ManageTable;
