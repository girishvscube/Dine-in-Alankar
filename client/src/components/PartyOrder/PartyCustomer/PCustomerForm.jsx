import React from 'react'
import "./style.scss";
import { useForm } from "react-hook-form";

const PCustomerForm = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="h-[70vh]">
      <div className="h-[60vh] w-11/12 mt-16  rounded-lg bg-white  flex flex-col">
        <div className="menu_box w-full mt-1 grid grid-rows-3  grid-flow-col gap-1 pr-1/12">
          <div className="">
            <p className="text-lg font-semibold font-sans">Customer Name</p>
            <input
              placeholder=""
              type="text"
              className="w-11/12 h-20 bg-input_color mt-2 outline-none rounded-md focus:ring-2 ring-button_border pl-2"
              {...register("Name", {
                required: true,
                maxLength: 20,
                pattern: /^[A-Za-z]+$/i,
              })}
            />
            {errors?.Name?.type === "required" && (
              <p className="text-xs text-red-600">This field is required</p>
            )}
          </div>
          <div className="">
            <p className="text-lg font-semibold font-sans">Total Amount</p>
            <input
              placeholder=""
              type="text"
              className="w-11/12 h-20 bg-input_color outline-none mt-2 rounded-md focus:ring-2 ring-button_border pl-2"
              {...register("Name", {
                required: true,
                maxLength: 20,
                pattern: /^[A-Za-z]+$/i,
              })}
            />
            {errors?.Name?.type === "required" && (
              <p className="text-xs text-red-600">This field is required</p>
            )}
          </div>
          <div className="">
            <p className="text-lg font-semibold font-sans">Occassion</p>
            <input
              placeholder=""
              type="text"
              className="w-11/12 h-20 bg-input_color outline-none mt-2 rounded-md focus:ring-2 ring-button_border pl-2"
              {...register("Name", {
                required: true,
                maxLength: 20,
                pattern: /^[A-Za-z]+$/i,
              })}
            />
            {errors?.Name?.type === "required" && (
              <p className="text-xs text-red-600">This field is required</p>
            )}
          </div>
         
          
          <div className="">
            <p className="text-lg font-semibold font-sans">Phone No.</p>
            <input
              placeholder=""
              type="text"
              className="w-11/12 h-20 bg-input_color outline-none mt-2  rounded-md focus:ring-2 ring-button_border pl-2"
              {...register("Name", {
                required: true,
                maxLength: 20,
                pattern: /^[A-Za-z]+$/i,
              })}
            />
            {errors?.Name?.type === "required" && (
              <p className="text-xs text-red-600">This field is required</p>
            )}
          </div>
          <div className="">
            <p className="text-lg font-semibold font-sans">Advance Received</p>
            <input
              placeholder=""
              type="text"
              className="w-11/12 h-20 bg-input_color outline-none mt-2 rounded-md focus:ring-2 ring-button_border pl-2"
              {...register("Name", {
                required: true,
                maxLength: 20,
                pattern: /^[A-Za-z]+$/i,
              })}
            />
            {errors?.Name?.type === "required" && (
              <p className="text-xs text-red-600">This field is required</p>
            )}
          </div>
          <div className="">
            <p className="text-lg font-semibold font-sans">
              Availability Count
            </p>
            <input
              placeholder=""
              type="text"
              className="w-11/12 h-20 bg-input_color outline-none mt-2 rounded-md focus:ring-2 ring-button_border pl-2"
              {...register("Name", {
                required: true,
                maxLength: 20,
                pattern: /^[A-Za-z]+$/i,
              })}
            />
            {errors?.Name?.type === "required" && (
              <p className="text-xs text-red-600">This field is required</p>
            )}
          </div>
        </div>
        <div className="flex flex-col w-full h-2/6">
          <div className=" h-1/3 w-full mt-20 flex justify-center items-center">
            <button className=" pl-16 pr-16 pt-5 pb-5 text-lg  mt-1 add rounded-lg text-white font-semibold  font-sans">
              Next
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default PCustomerForm
