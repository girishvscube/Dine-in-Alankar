import React from "react";
import "./style.scss";
import { useForm } from "react-hook-form";

const EditStaffForm = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => console.log(data);

  return (
  <form onSubmit={handleSubmit(onSubmit)} className="h-[70vh]">
      <div className="h-[40vh]  field grid  grid-rows-3 pr-20 grid-flow-col">
        <div className=" mr-10 flex flex-col">
          <p className="font-sans font-semibold text-lg mb-1">Name</p>
          <input
            type="text"
            placeholder=""
            className="h-2/5 w-11/12 value outline-none pl-2 rounded-lg bg-search focus:ring-2 ring-button_border"
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
          <p className="font-sans font-semibold text-lg mb-1">Phone No.</p>
          <input
            type="text"
            placeholder=""
            className="h-2/5 w-11/12 outline-none pl-2 rounded-lg bg-search focus:ring-2 ring-button_border "
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
          <p className="font-sans font-semibold text-lg mb-1">Role</p>
          <input
            type="text"
            placeholder=""
            className="h-2/5 w-11/12 outline-none pl-2 rounded-lg bg-search focus:ring-2 ring-button_border "
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
          <p className="font-sans font-semibold text-lg mb-1">Email</p>
          <input
            type="email"
            placeholder=""
            className="h-2/5 w-11/12 outline-none pl-2 rounded-lg bg-search focus:ring-2 ring-button_border"
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
          <p className="font-sans font-semibold text-lg mb-1">Password</p>
          <input
            type="password"
            placeholder=""
            className="h-2/5 w-11/12 outline-none pl-2 rounded-lg bg-search focus:ring-2 ring-button_border"
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
          <p className="font-sans font-semibold text-lg mb-1">Table</p>
          <input
            type="text"
            placeholder=""
            className="h-2/5 w-11/12 outline-none pl-2 rounded-lg bg-search focus:ring-2 ring-button_border"
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
      <div className="h-[18vh] mt-5 flex justify-between">
        <div className="w-3/6 h-10/12  flex flex-col">
          <p className="font-sans text-lg font-semibold mb-2">Upload Image</p>
          <input type="file" className=" h-3/4 w-1/5 rounded-md bg-search ml-1 border-2 border-orange border-dashed"></input>
        </div>
        <div className="w-3/5 h-10/12   pt-2">
          <div className="w-8/12 h-1/2 ml-4 flex flex-row">
           <div className="form-group mr-8">
           <input className="outline-none" id="one" type="checkbox"/>
            <label className="font-sans" for="one">20A</label>
           </div>
            <div className="form-group mr-8">
            <input className="rounded-md ml-5" id="two" type="checkbox" />
            <label className="font-sans" for="two">20A</label>
            </div>
            <div className="form-group mr-8">
              <input type="checkbox" id="three"/>
              <label for="three">20A</label>
            </div>
            <div className="form-group mr-8">
              <input type="checkbox" id="four"/>
              <label for="four">20A</label>
            </div>
            <div className="form-group mr-8">
              <input type="checkbox" id="five"/>
              <label for="five">20A</label>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-1 flex items-center justify-center">
        <button
          type="submit"
          className="add font-sans text-lg text-white pl-14 pr-14 pt-4 pb-4 rounded-lg border-orange"
        >
          Edit Staff
        </button>
      </div>
    </form>
  )
}

export default EditStaffForm
