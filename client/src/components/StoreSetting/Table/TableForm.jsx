import React from 'react'
import { useForm } from "react-hook-form";
import "./style.scss";

const TableForm = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => console.log(data);


  return (
     <form onSubmit={handleSubmit(onSubmit)} className=" for">
    <div className=" field grid grid-rows-2 pr-20 grid-flow-col">
      <div className=" mr-10 flex flex-col">
        <p className="font-sans text-lg font-semibold  mb-1">Table Name</p>
        <input
          type="text"
          placeholder=""
          className="h-2/4 w-11/12 outline-none pl-2 rounded-lg bg-search focus:ring-2 ring-button_border"
          {...register("StoreName", {
            required: true,
            maxLength: 20,
            pattern: /^[A-Za-z]+$/i,
          })}
        />
        {errors?.StoreName?.type === "required" && (
          <p className="text-xs text-red-600">This field is required</p>
        )}
        {errors?.StoreName?.type === "maxLength" && (
          <p className="text-xs text-red-600">Name cannot exceed 20 characters</p>
        )}
        {errors?.StoreName?.type === "pattern" && (
          <p className="text-red-600 text-xs">Alphabetical characters only</p>
        )}
      </div>
      <div className=" mr-10 flex flex-col">
        <p className="font-sans text-lg font-semibold   mb-1">Floor No.</p>
        <input
          type="email"
          placeholder=""
          className="h-2/4 w-11/12 outline-none pl-2 rounded-lg bg-search focus:ring-2 ring-button_border "
          {...register("floor", {
            required: true,
            maxLength: 20,
            pattern: /^[0-9\b]+$/,
          })}
        />
         {errors?.floor?.type === "required" && (
          <p className="text-xs text-red-600">This field is required</p>
        )}
        {errors?.floor?.type === "maxLength" && (
          <p className="text-xs text-red-600">Phone cannot exceed 20 characters</p>
        )}
        {errors?.floor?.type === "pattern" && (
          <p className="text-red-600 text-xs">Numerical characters only</p>
        )}
      </div>
     
      <div className=" mr-10 flex flex-col">
        <p className="font-sans font-semibold text-lg  mb-1">Hall Name</p>
        <input
          type="password"
          placeholder=""
          className="h-2/4 w-11/12 outline-none pl-2 rounded-lg bg-search focus:ring-2 ring-button_border"
          {...register("hallName", {
            required: true,
            maxLength: 20,
            pattern: /^[A-Za-z]+$/i,
          })}
        />
        {errors?.hallName?.type === "required" && (
          <p className="text-xs text-red-600">This field is required</p>
        )}
        {errors?.hallName?.type === "maxLength" && (
          <p className="text-xs text-red-600">Name cannot exceed 20 characters</p>
        )}
        
       
      </div>
      
    </div>
   
    <div className="w-10/12 ml-12 h-1/6 mt-20 flex items-center justify-center">
      <button
        type="submit"
        className="add font-sans font-semibold text-lg  text-white pl-16 pr-16 pt-4 pb-4 rounded-lg border-orange"
      >
        Create
      </button>
    </div>
  </form>
  )
}

export default TableForm
