import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import Data from "../../Data2.json";
import "./style.scss";
import ToggleSwitch from "../../ToggleSwitch";
import {Link} from "react-router-dom"
import edit from "../../../Images/ManageStaff/EDIT ICON.svg"

const ManageStaffTable = () => {
  return (
    <div className="bg-white mt-8 h-[75vh]">
      <div className="text-orange  mt-5 mb-3  text-lg font-semibold font-sans">All Items</div>
      <div className="h-[70vh] overflow-y-scroll font-sans">
        <Table className="">
          <Thead className="sticky top-0 border-b-2 mb-1 bg-white head ">
            <Tr className=" text-left">
              <Th className="font-sans pb-2">S.No.</Th>
              <Th className="font-sans pl-10 pb-2">Name</Th>
              <Th className="font-sans pl-12 pb-2">Email</Th>
              <Th className="font-sans pb-2">Phone No.</Th>
              <Th className="font-sans pl-24 pb-2">Role</Th>
              <Th className="font-sans pb-2">Status</Th>
              <Th className="font-sans pb-2">Action</Th>
            </Tr>
          </Thead>
          {Data.map((data, i) => {
            return (
              <Tbody>
                <Tr className="row border-b-2 font-sans">
                  <Td key={i} className="pt-8 pb-8">
                    {data.S}.
                  </Td>
                  <Td key={i} className="pt-4 text-left pl-10 pb-4">
                    {data.Name}
                  </Td>
                  <Td key={i} className="pt-4 text-left pl-12 pb-4">
                    {data.Email}
                  </Td>
                  <Td key={i} className="pt-4 text-left pb-4">
                    {data.Phone}
                  </Td>
                  <Td key={i} className="pt-4 text-left pl-24 pb-4">
                    {data.Role}
                  </Td>
                  <Td key={i} className="pt-4 pr-24 pb-4">
                    <ToggleSwitch />
                  </Td>
                  <Td className="pt-4 flex justify-center pr-12  pb-4">
                    <Link to="/editstaff"><img src={edit} alt="edit icon"/></Link>
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

export default ManageStaffTable;
