import React from 'react'
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import "./style.scss";

const ItemTable = () => {


  const data = [
    {
        id:1,
        name: "Idly",
      stock: 50,
      price: 50,
      quantity: 1,
      status:false
    },
    {
        id:2,
      name: "Dosa",
      stock: 40,
      price: 30,
      quantity: 1,
      status:false
    },
    {
        id:3,
      name: "Puri",
      stock: 20,
      price: 40,
      quantity: 1,
      status:false
    },
    {
        id:4,
      name: "Puri",
      stock: 20,
      price: 40,
      quantity: 1,
      status:false
    },
  ];

  
  return (
    <div className="bg-white  table_div">
    <div className="text-orange mb-3 font-semibold font-sans">All Items</div>
    <div className=" w-11/12 h-5/6 ml-14 mr-12 overflow-y-scroll font-sans">
      <Table className="">
        <Thead className="sticky top-0 border-b-2 mb-1 bg-white head ">
          <Tr className=" text-left">
            <Th className="font-sans pl-10 pb-2">Name</Th>
            <Th className="font-sans pl-12 pb-2">Email</Th>
            <Th className="font-sans pb-2">Phone No.</Th>
            <Th className="font-sans pl-24 pb-2">Role</Th>
           
          </Tr>
        </Thead>
        {data.map((item, i) => {
          return (
            <Tbody>
              <Tr className="row border-b-2 font-sans">
                
                <Td key={i} className="pt-4 text-left pl-10 pb-4">
                  {item.name}
                </Td>
                <Td key={i} className="pt-4 text-left pl-12 pb-4">
                  {item.stock}
                </Td>
                <Td key={i} className="pt-4 text-left pb-4">
                  {item.price}
                </Td>
                <Td key={i} className="pt-4 text-left pl-24 pb-4">
                 
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

export default ItemTable
