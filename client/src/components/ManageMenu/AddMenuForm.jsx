import React from "react";
import "./style.scss";
import { useForm } from "react-hook-form";
import { Button } from "../Button";
import { TextField } from "../TextField";

const AddMenuForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="h-[70vh]">
      <div className="h-[70vh] w-11/12  rounded-lg bg-white  flex flex-col">
        <div className=" menu_box w-full mt-1 grid grid-rows-4  grid-flow-col gap-2 pr-1/12">
          <div className="">
            <p className="text-base font-semibold font-sans">Name</p>
           <TextField className="w-10/12 h-16"/>
            
          </div>
          <div className="">
            <p className="text-base font-semibold font-sans">Time</p>
            <TextField className="w-10/12 h-16"/>
          </div>
          <div className=" ">
            <p className="text-base font-semibold font-sans">Sub Category</p>
            <TextField className="w-10/12 h-16"/>
          </div>
          <div className="">
            <p className="text-base font-semibold font-sans">Dine - In Price</p>
            <TextField className="w-10/12 h-16"/>
          </div>
          <div className=" ">
            <p className="text-base font-semibold font-sans">Meal Type</p>
            <div className="w-5/6 h-16  flex justify-between flex-row">
              <div className="w-1/3 h-full pt-2 form-group flex felx-row">
                <input type="checkbox" id="one" className="h-4/5  w-2/12" />
                <label className="mt-2 text-base font-sans" for="one">Breakfast</label>
              </div>
              <div className="w-1/3 h-full pt-2 form-group   flex felx-row">
                <input type="checkbox" id="two" className="h-4/5 w-2/12" />
                <label className="mt-2  text-base font-sans" for="two">Lunch</label>
              </div>
              <div className="w-1/3 h-full pt-2 form-group   flex felx-row">
                <input type="checkbox" id="three" className="h-4/5 w-2/12" />
                <label className="mt-2  text-base font-sans" for="three">Dinner</label>
              </div>
            </div>
          </div>
          <div className="">
            <p className="text-base font-semibold font-sans">Category</p>
           <div className="w-10/12 h-16 mt-1 ">
               <select className="w-full h-full pl-2 bg-input_color outline-none rounded-lg">
                   <option value="south">simply south</option>
                   <option value="chinese">chinese</option>
                   <option value="japanese">japanese</option>
               </select>
           </div>
          </div>
          <div className=" ">
            <p className="text-base font-semibold font-sans">Take Away Price</p>
            <TextField className="w-10/12 h-16"/>
          </div>
          <div className="">
            <p className="text-base font-semibold font-sans">
              Availability Count
            </p>
            <TextField className="w-10/12 h-16"/>
          </div>
        </div>
        <div className="flex flex-col w-full h-2/6">
          <div className=" h-2/3 w-full mt-1 flex flex-col">
            <p className="font-semibold mt-2 text-base font-sans">Upload Image</p>
            <div className="h-full w-1/12 mt-1 bg-red-400"></div>
          </div>
          <div className=" h-1/3 w-full mt-2 flex justify-center items-center">
            <Button className="pl-8 pr-8">Update Menu</Button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddMenuForm;
