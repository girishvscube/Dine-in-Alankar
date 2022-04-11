import React from "react";
import "./style.scss";
import { useForm } from "react-hook-form";

const DetailForm = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => console.log(data);

  return (
     <form onSubmit={handleSubmit(onSubmit)} className="h-[70vh]">
      <div className="h-[45vh] field grid  mt-10 grid-col-1 pr-20 grid-flow-col">
        <div className=" mr-10 flex flex-col">
          <p className="font-sans font-semibold text-base mb-1">Customer Name</p>
          <input
            type="text"
            placeholder=""
            className="h-16 w-11/12 outline-none pl-2 rounded-lg bg-search focus:ring-2 ring-button_border"
            {...register("Name", {
              required: true,
              maxLength: 20,
              pattern: /^[A-Za-z]+$/i,
            })}
          />
          {errors?.Name?.type === "required" && (
            <p className="text-xs text-red-600">This field is required</p>
          )}
          {errors?.Name?.type === "maxLength" && (
            <p className="text-xs text-red-600">Name cannot exceed 20 characters</p>
          )}
          {errors?.Name?.type === "pattern" && (
            <p className="text-red-600 text-xs">Alphabetical characters only</p>
          )}
        </div>
       
        <div className=" mr-10 flex flex-col">
          <p className="font-sans font-semibold text-base mb-1">Phone No.</p>
          <input
            type="text"
            placeholder=""
            className="h-16 w-11/12 outline-none pl-2 rounded-lg bg-search focus:ring-2 ring-button_border "
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
        
        
      </div>
      <div className="w-11/12  h-1/6 mt-18 flex items-center justify-center">
        <button
          type="submit"
          className="add font-sans text-white pl-16 text-base pr-16 pt-4 pb-4 rounded-lg border-orange"
        >
          Next
        </button>
      </div>
    </form>
  )
}

export default DetailForm
