import React, { useState } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import "./style.scss";
import Data from "../../Data.json";
import { AuthContext } from "../../../context/AuthContext";
import { useContext, useEffect } from "react";
import axios from "axios";
const SalesTable = () => {
  var num = 1;
  const [design, setDesign] = useState("adding");
  const { sales, handleSales,token ,datee} = useContext(AuthContext);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await axios.get(`${process.env.REACT_APP_BASE_URL}/reports/itemsold`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    });
    console.log(data.data.data);
    handleSales(data.data.data);
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
          {sales.map((data, i) => {
            // console.log(object);
            return (
              <Tbody>
                <Tr className="row border-b-2 font-sans">
                  <Td key={i} className="pt-9 pb-9">
                    {/* {data.S.No}. */}
                    {num++}
                  </Td>
                  <Td key={i} className=" text-left ">
                    {data.item}
                  </Td>
                  <Td key={i} className="text-left ">
                    {data.quantity}
                  </Td>
                  <Td key={i} className="text-left ">
                    {data.total}
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

export default SalesTable;
