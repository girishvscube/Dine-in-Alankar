import React, { useState } from "react";
import ItemTable from "./ItemTable";
import "./style.scss"
import search from "../../../Images/ActiveOrder/Search_fill.png"
import { Button } from "../../Button";
 import { Text } from "../../Text";
import { SearchField } from "../../SearchField";

const ItemsForm = () => {
    const [value, setValue] = useState(1);
    const [data,setData] = useState()

    const Increment =(el)=>{
        setData(
            data.map((e) => {
                if(e.id === el.id){

                }
            })
        )
    }

    const Decrement=(id)=>{
        setValue(value-1);
    }
    
  const data1 = [
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
    <div className="h-[65vh] mt-10 gap-4 flex flex-row">
      <div className="h-[45vh] w-2/3  mr-6 flex flex-col">
        <div className=" h-16 bg-search mb-6 flex justify-between pl-2 pr-2 pb-2 pt-1.5 rounded-lg focus-within:border-2 border-button_border ">
          
            <SearchField/>
         
          <div className="h-full mt-1 w-1/12 bg-search">
            <img src={search} alt="search icon" />
          </div>
        </div>
        <div className=" w-full flex flex-row  justify-between">
          <div className="w-1/5 h-full">
            <p className="font-sans mt-14 font-bold text-orange text-xl">
              All Orders
            </p>
            <ItemTable/>
          </div>
          <div className="w-1/3 h-full flex flex-col">
            <p className="font-sans text-base font-semibold mt-1 mb-1">Category</p>
            <div className="">
              <select className="h-full mt-1 w-full pt-3 pb-3 cate_box text-orange rounded-lg pl-4">
                <option value="one">One</option>
                <option value="two">Two</option>
                <option value="three">Three</option>
                <option value="four">Four</option>
              </select>
            </div>
          </div>
        </div>
        
      </div>
      <div className="h-[67vh] w-1/3  items_box rounded-lg  mb-4 flex flex-col">
        <div className="h-full w-full   p-3 flex flex-col  ">
          <p className="text-orange font-sans text-lg mb-2 font-semibold">Items Selected:</p>
          {data1.map((item) => {
            return (
              <div className="w-full h-7  flex gap-4 flex-row justify-between">
                <div className="w-1/6 h-full flex mt-2 mb-2 flex-col  justify-between">
                  <p className="font-sans text-base">{item.name}</p>
                </div>
                <div className="w-1/6 h-full mt-2 mb-2  flex flex-col  justify-between">
                  <p className="font-sans text-base">
                    x {value}
                  </p>
                </div>
                <div className="w-1/6  flex mt-2 mb-1 flex-col  justify-between">
                  <p className="font-sans text-base">
                    &#8377; {item.price * value}
                  </p>
                </div>
                <div className="w-3/6 h-7 pl-16 flex gap-2  mt-1.5 ml-10 flex-row">
                  <button className="bg-orange mt-1   pl-2 rounded-sm  pr-2 text-white font-sans font-semibold " onClick={() => {Decrement(item.id)}}>
                    -
                  </button>
                  <p className="mt-1">{value}</p>
                  <button className="bg-orange mt-1  pl-1.5 rounded-sm  pr-1.5 text-white font-sans font-semibold "
                  onClick={()=>{
                      Increment(item.id)
                  }}
                  >
                    +
                  </button>
                </div>
              </div>
            );
          })}
          <hr className=" mt-4 mb-3 border-2 bord" />
          <p className="font-sans font-semibold text-base">
            Special Instructions
          </p>
         <Text className=" w-full h-16"/>
        </div>
        <div className="mb-8  flex justify-center items-center">
          <Button text="Next" className="pl-16 pr-16"></Button>
        </div>
      </div>
    </div>
  );
};

export default ItemsForm;
