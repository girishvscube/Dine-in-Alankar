import React from 'react'
import { useForm } from "react-hook-form";
import "./style.scss";

const StoreForm = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => console.log(data);


  return (
    <form onSubmit={handleSubmit(onSubmit)} className=" for">
    <div className="w-11/12 ml-14 field grid  grid-rows-3 pr-20 grid-flow-col">
      <div className=" mr-10 flex flex-col">
        <p className="font-sans text-xs font-semibold mb-1">Store Name</p>
        <input
          type="text"
          placeholder=""
          className="h-2/4 w-11/12 outline-none pl-2 rounded-lg bg-search focus:ring-2 ring-yellow"
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
        <p className="font-sans font-semibold text-xs  mb-1">Email</p>
        <input
          type="email"
          placeholder=""
          className="h-2/4 w-11/12 outline-none pl-2 rounded-lg bg-search focus:ring-2 ring-yellow "
          {...register("Email", {
            required: true,
            pattern:
              /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          })}
        />
         {errors?.Email?.type === "required" && (
          <p className="text-xs text-red-600">This field is required</p>
        )}
        {errors?.Email?.type === "pattern" && (
          <p className="text-red-600 text-xs">Invalid email</p>
        )}
      </div>
      <div className=" mr-10 flex flex-col">
        <p className="font-sans font-semibold text-xs  mb-1">GST Percent</p>
        <input
          type="text"
          placeholder=""
          className="h-2/4 w-11/12 outline-none pl-2 rounded-lg bg-search focus:ring-2 ring-yellow"
          {...register("Gst", {
            required: true,
            maxLength: 20,
            pattern: /^[A-Za-z]+$/i,
          })}
        />
         {errors?.Gst?.type === "required" && (
          <p className="text-xs text-red-600">This field is required</p>
        )}
        {errors?.Gst?.type === "maxLength" && (
          <p className="text-xs text-red-600">Role cannot exceed 20 characters</p>
        )}
        
      </div>
      <div className=" mr-10 flex flex-col">
        <p className="font-sans font-semibold text-xs mb-1">Phone No.</p>
        <input
          type="text"
          placeholder=""
          className="h-2/4 w-11/12 outline-none pl-2 rounded-lg bg-search focus:ring-2 ring-yellow"
          {...register("Phone", {
            required: true,
            maxLength: 20,
            pattern: /^[0-9\b]+$/,
          })}
        />
         {errors?.Phone?.type === "required" && (
          <p className="text-xs text-red-600">This field is required</p>
        )}
        {errors?.Phone?.type === "maxLength" && (
          <p className="text-xs text-red-600">Phone cannot exceed 20 characters</p>
        )}
        {errors?.Phone?.type === "pattern" && (
          <p className="text-red-600 text-xs">Numerical characters only</p>
        )}
      </div>
      
      <div className=" mr-10 flex flex-col">
        <p className="font-sans font-semibold text-xs  mb-1">Store Address</p>
        <input
          type="password"
          placeholder=""
          className="h-2/4 w-11/12 outline-none pl-2 rounded-lg bg-search focus:ring-2 ring-yellow "
          {...register("address", {
            required: true,
            maxLength: 8,
            pattern:/^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,12}$/g,
          })}
        />
         {errors?.address?.type === "required" && (
          <p className="text-xs text-red-600">This field is required</p>
        )}
       
      </div>
      <div className=" mr-10 flex flex-col">
        <p className="font-sans font-semibold text-xs  mb-1">GST No.</p>
        <input
          type="text"
          placeholder=""
          className="h-2/4 w-11/12 outline-none pl-2 rounded-lg bg-search focus:ring-2 ring-yellow "
          {...register("GstNo", {
            required: true,
            maxLength: 20,
            pattern: /^[0-9\b]+$/,
          })}
        />
         {errors?.GstNo?.type === "required" && (
          <p className="text-xs text-red-600">This field is required</p>
        )}
        
        {errors?.GstNo?.type === "pattern" && (
          <p className="text-red-600 text-xs">Numerical characters only</p>
        )}
      </div>
    </div>
   
    <div className="w-10/12 ml-12 h-1/6 mt-20 flex items-center justify-center">
      <button
        type="submit"
        className="add font-sans text-xs font-semibold text-white pl-12 pr-12 pt-3 pb-3 rounded-lg border-orange"
      >
        Update
      </button>
    </div>
  </form>
  )
}

export default StoreForm
