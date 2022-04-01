import React from "react";
import "./style.scss";
import { useForm } from "react-hook-form";

const AddNewStaffForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className=" for">
      <div className="w-11/12 ml-12 field grid  grid-rows-3 pr-20 grid-flow-col">
        <div className=" mr-10 flex flex-col">
          <p className="font-sans font-semibold text-xs mb-1">Name</p>
          <input
            type="text"
            placeholder=""
            className="h-2/5 w-11/12 outline-none pl-2 rounded-lg bg-search focus:ring-2 ring-orange"
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
          <p className="font-sans font-semibold text-xs mb-1">Phone No.</p>
          <input
            type="text"
            placeholder=""
            className="h-2/5 w-11/12 outline-none pl-2 rounded-lg bg-search focus:ring-2 ring-orange "
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
          <p className="font-sans font-semibold text-xs mb-1">Role</p>
          <input
            type="text"
            placeholder=""
            className="h-2/5 w-11/12 outline-none pl-2 rounded-lg bg-search focus:ring-2 ring-orange "
            {...register("Role", {
              required: true,
              maxLength: 20,
              pattern: /^[A-Za-z]+$/i,
            })}
          />
           {errors?.Role?.type === "required" && (
            <p className="text-xs text-red-600">This field is required</p>
          )}
          {errors?.Role?.type === "maxLength" && (
            <p className="text-xs text-red-600">Role cannot exceed 20 characters</p>
          )}
          {errors?.Role?.type === "pattern" && (
            <p className="text-red-600 text-xs">Alphabetical characters only</p>
          )}
        </div>
        <div className=" mr-10 flex flex-col">
          <p className="font-sans font-semibold text-xs mb-1">Email</p>
          <input
            type="email"
            placeholder=""
            className="h-2/5 w-11/12 outline-none pl-2 rounded-lg bg-search focus:ring-2 ring-orange "
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
          <p className="font-sans font-semibold text-xs mb-1">Password</p>
          <input
            type="password"
            placeholder=""
            className="h-2/5 w-11/12 outline-none pl-2 rounded-lg bg-search focus:ring-2 ring-orange "
            {...register("Password", {
              required: true,
              maxLength: 8,
              pattern:/^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,12}$/g,
            })}
          />
           {errors?.Password?.type === "required" && (
            <p className="text-xs text-red-600">This field is required</p>
          )}
          {errors?.Password?.type === "maxLength" && (
            <p className="text-xs text-red-600">Password cannot exceed 8 characters</p>
          )}
          {errors?.Password?.type === "pattern" && (
            <p className="text-red-600 text-xs">Invalid password</p>
          )}
        </div>
        <div className=" mr-10 flex flex-col">
          <p className="font-sans font-semibold text-xs mb-1">Table</p>
          <input
            type="text"
            placeholder=""
            className="h-2/5 w-11/12 outline-none pl-2 rounded-lg bg-search focus:ring-2 ring-orange "
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
      </div>
      <div className="w-11/12 ml-12 h-1/4 mt-5 flex justify-between">
        <div className="w-2/5 h-10/12  flex flex-col">
          <p className="font-sans text-xs font-semibold mb-2">Upload Image</p>
          <input type="file" className=" h-3/4 w-1/4 rounded-md  border-orange border-dashed border-2 bg-search ml-1"></input>
        </div>
        <div className="w-3/5 h-10/12 pt-2">
          <div className="w-8/12 h-1/2 ml-20 flex flex-row">
            <input
              className="w-1/12 h-2/5  outline-none"
              type="checkbox"
            />
            <p className="font-sans ml-2 mt-1">20A</p>
            <input className="w-1/12 h-2/5 rounded-md ml-5" type="checkbox" />
            <p className="font-sans ml-2 mt-1">20A</p>
            <input className="w-1/12 h-2/5 rounded-md ml-5" type="checkbox" />
            <p className="font-sans ml-2 mt-1">20A</p>
            <input className="w-1/12 h-2/5 rounded-md ml-5" type="checkbox" />
            <p className="font-sans ml-2 mt-1">20A</p>
            <input className="w-1/12 h-2/5 rounded-md ml-5" type="checkbox" />
            <p className="font-sans ml-2 mt-1">20A</p>
          </div>
        </div>
      </div>
      <div className="w-11/12 ml-12 h-1/6 mt-1 flex items-center justify-center">
        <button
          type="submit"
          className="add font-sans text-white pl-7 pr-7 pt-2 pb-2 rounded-lg border-orange"
        >
          Create Staff
        </button>
      </div>
    </form>
  );
};

export default AddNewStaffForm;
