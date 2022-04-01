import React from 'react'
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import "./style.scss"
import Data from "../../Data3.json"
import ToggleSwitch from './ToggleSwitch';

const DicsountTable = () => {
  return (
    <div className="bg-white mt-8 table_div">
    <div className=" w-11/12 h-5/6 ml-14 mr-12 overflow-y-scroll font-sans">
      <Table className="">
        <Thead className="sticky top-0 border-b-2 mb-1 bg-white head ">
          <Tr className=" text-left">
            <Th className="font-sans pb-2">S. No.</Th>
            <Th className="font-sans  pb-2">Name</Th>
            <Th className="font-sans  pb-2">Date</Th>
            <Th className="font-sans pb-2 pr-56">Status</Th>
          </Tr>
        </Thead>
        {Data.map((data, i) => {
          return (
            <Tbody>
              <Tr className="row border-b-2 font-sans">
                <Td key={i} className="pt-4 pb-4">
                  {data.s}.
                </Td>
                <Td key={i} className="pt-4 text-left  pb-4">
                  {data.coupon}
                </Td>
                <Td key={i} className="pt-4 text-left pb-4">
                  {data.date}
                </Td>
                <Td key={i} className="pt-4 text-left pb-4">
                  <ToggleSwitch/>
                </Td>
              </Tr>
            </Tbody>
          );
        })}
      </Table>
    </div>
  </div>
  )
}

export default DicsountTable
