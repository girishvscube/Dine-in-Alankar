import React,{useState} from 'react'
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import "./style.scss";
import Data from "../../Data.json";


const SalesTable = () => {

  
  const [design, setDesign] = useState("adding");

  const handleClick = () => {
    setDesign("add");
  };


  return (
     <div className=" h-[57vh] bg-white pt-2 pl-6 pr-8 mt-10 box rounded-lg">
      <div className="text-orange text-xl  mt-5 mb-4 font-semibold font-sans">
        All Items
      </div>
      <div className="h-[49vh] overflow-y-scroll  font-sans">
        <Table className="relative">
          <Thead className="sticky top-0 border-b-2 mb-1  bg-white head ">
            <Tr className=" text-left text-lg ">
              <Th className="font-sans pb-2">S. No.</Th>
              <Th className="font-sans  pb-2">Product Name</Th>
              <Th className="font-sans  pb-2">Item Sales</Th>
              <Th className="font-sans pb-2  pr-60">Total Revenue</Th>
              
            </Tr>
          </Thead>
          {Data.map((data, i) => {
            return (
              <Tbody>
                <Tr className="row border-b-2 font-sans">
                  <Td key={i} className="pt-9 pb-9">
                    {data.S.No}.
                  </Td>
                  <Td key={i} className=" text-left ">
                    {data.Item_Name}
                  </Td>
                  <Td key={i} className="text-left ">
                    {data.Price}
                  </Td>
                  <Td key={i} className="text-left ">
                    {data.Category}
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

export default SalesTable
