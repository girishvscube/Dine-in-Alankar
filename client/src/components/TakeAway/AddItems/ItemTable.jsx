import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import "./style.scss";

const ItemTable = () => {
  const data = [
    {
      id: 1,
      name: "Idly",
      stock: 50,
      price: 50,
      quantity: 1,
      status: false,
    },
    {
      id: 2,
      name: "Dosa",
      stock: 40,
      price: 30,
      quantity: 1,
      status: false,
    },
    {
      id: 3,
      name: "Puri",
      stock: 20,
      price: 40,
      quantity: 1,
      status: false,
    },
    {
      id: 4,
      name: "Puri",
      stock: 20,
      price: 40,
      quantity: 1,
      status: false,
    },
  ];

  return (
    <div className= " h-[48vh] bg-white pl-8 box  mt-8 rounded-xl  w-[52vw]">
      <div className="  overflow-y-scroll font-sans">
        <Table className="">
          <Thead className="sticky top-0 border-b-2 mb-1 text-base bg-white head ">
            <Tr className=" text-left">
              <Th className="font-sans pt-4 pb-4 ">Item Name</Th>
              <Th className="font-sans pl-12 ">Stock left</Th>
              <Th className="font-sans ">Price</Th>
              <Th className="font-sans pl-24 ">Quantity</Th>
            </Tr>
          </Thead>
          {data.map((item, i) => {
            return (
              <Tbody>
                <Tr className="row border-b-2 font-sans">
                  <Td key={i} className="pt-6 text-left  pb-6">
                    {item.name}
                  </Td>
                  <Td key={i} className=" text-left pl-12 ">
                    {item.stock}
                  </Td>
                  <Td key={i} className="text-left ">
                    {item.price}
                  </Td>
                  <Td key={i} className=" text-left pl-24">
                    <div className="w-3/6 h-7  flex gap-2  flex-row">
                      <button className="bg-orange mt-1   pl-2 rounded-sm  pr-2 text-white font-sans font-semibold ">
                        -
                      </button>
                      <p className="mt-1">1</p>
                      <button className="bg-orange mt-1  pl-1.5 rounded-sm  pr-1.5 text-white font-sans font-semibold ">
                        +
                      </button>
                    </div>
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

export default ItemTable;
