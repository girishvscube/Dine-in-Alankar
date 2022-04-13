import React from 'react'
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import Data from "../../Data2.json"
import EditAndDelete from './EditAndDelete';
import "./style.scss";
import Switch from './Switch';
import food from "../../../Images/ManageCategory/FOOD.svg"


const ManageCategoryTable = () => {
  return (
    <div className="h-[68vh] box pl-6 pt-4 bg-white rounded-lg  mt-10">
    <div className="text-orange w-full text-xl  mb-3 font-semibold font-sans">All Items</div>
    <div className=" w-full h-[60vh] overflow-y-scroll font-sans">
      <Table className="">
        <Thead className="sticky top-0 border-b-2 mb-1 z-20 bg-white head ">
          <Tr className=" text-left text-lg">
            <Th className="font-sans pb-2 pr-5">S. No.</Th>
            <Th className="font-sans pb-2 ">Name</Th>
            <Th className="font-sans pb-2 ">Image</Th>
            <Th className="font-sans pb-2 pl-5">Availability</Th>
            <Th className="font-sans pb-2 pl-3">Action</Th>
          </Tr>
        </Thead>
        {Data.map((data, i) => {
          return (
            <Tbody>
              <Tr className="row border-b-2 font-sans">
                <Td key={i} className="pt-2  pr-5 pb-2">
                  {data.S}.
                </Td>
                <Td key={i} className="pt-2  text-left pb-2">
                  {data.Name}
                </Td>
                <Td key={i} className="pt-2   text-left  pb-2">
                  <img src={food} className='p-2' alt='food_icon'/>
                </Td>
                <Td key={i} className="pt-2  pl-5 pb-2">
                  <Switch/>
                </Td>
                <Td className="pt-2 flex justify-center  float-left pr-10  pb-2">
                  <EditAndDelete/>
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

export default ManageCategoryTable
