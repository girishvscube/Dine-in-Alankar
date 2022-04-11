import React from 'react'
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import "./style.scss"
import Data from "../../Data3.json"
import ToggleSwitch from './ToggleSwitch';

const DicsountTable = () => {
  return (
    <div className="bg-white pb-4 mt-8 pt-10 box ">
    <div className=" overflow-y-scroll h-[60vh] pl-10 pr-10 pb-10  font-sans">
      <Table className="">
        <Thead className="sticky top-0 border-b-2 mb-1 bg-white head ">
          <Tr className=" text-left text-lg">
            <Th className="font-sans  pb-4">S. No.</Th>
            <Th className="font-sans pb-4 ">Name</Th>
            <Th className="font-sans pb-4">Date</Th>
            <Th className="font-sans pb-4 pr-56">Status</Th>
          </Tr>
        </Thead>
        {Data.map((data, i) => {
          return (
            <Tbody>
              <Tr className="row border-b-2 font-sans">
                <Td key={i} className="pt-8 pb-8">
                  {data.s}.
                </Td>
                <Td key={i} className=" text-left  ">
                  {data.coupon}
                </Td>
                <Td key={i} className="text-left">
                  {data.date}
                </Td>
                <Td key={i} className=" text-left">
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
