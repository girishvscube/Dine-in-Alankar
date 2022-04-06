import React from "react";
import "./style.scss";
import { useForm } from "react-hook-form";

const EditMenuForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form_box">
      <div className=" h-full w-11/12  rounded-lg bg-white  flex flex-col">
        <div className="menu_box w-full mt-1 grid grid-rows-4  grid-flow-col gap-1 pr-32">
          <div className=" mr-14">
            <p className="text-xs font-semibold font-sans">Name</p>
            <input
              placeholder=""
              type="text"
              className="w-11/12 h-1/2 bg-input_color mt-2 outline-none rounded-md focus:ring-2 ring-button_border pl-2"
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
          <div className="mr-14">
            <p className="text-xs font-semibold font-sans">Time</p>
            <input
              placeholder=""
              type="text"
              className="w-11/12 h-1/2 bg-input_color outline-none mt-2 rounded-md focus:ring-2 ring-button_border pl-2"
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
          <div className=" mr-14">
            <p className="text-xs font-semibold font-sans">Sub Category</p>
            <input
              placeholder=""
              type="text"
              className="w-11/12 h-1/2 bg-input_color outline-none mt-2 rounded-md focus:ring-2 ring-button_border pl-2"
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
          <div className="mr-14">
            <p className="text-xs font-semibold font-sans">Dine - In Price</p>
            <input
              placeholder=""
              type="text"
              className="w-11/12 h-1/2 bg-input_color outline-none focus:ring-2 ring-button_border pl-2 mt-2 rounded-md"
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
          <div className=" mr-14">
            <p className="text-xs font-semibold font-sans">Meal Type</p>
            <div className="w-5/6 h-12  flex justify-between flex-row">
              <div className="w-1/3 h-full pt-2 form-group flex felx-row">
                <input type="checkbox" className="h-4/5 check  w-2/12" />
                <label className="mt-2 ml-2 text-xs font-sans">Breakfast</label>
              </div>
              <div className="w-1/3 h-full pt-2 form-group   flex felx-row">
                <input type="checkbox" className="h-4/5 w-2/12" />
                <label className="mt-2 ml-2 text-xs font-sans">Lunch</label>
              </div>
              <div className="w-1/3 h-full pt-2 form-group   flex felx-row">
                <input type="checkbox" className="h-4/5 w-2/12" />
                <label className="mt-2 ml-2 text-xs font-sans">Dinner</label>
              </div>
            </div>
          </div>
          <div className="mr-14">
            <p className="text-xs font-semibold font-sans">Category</p>
            <input
              placeholder=""
              type="text"
              className="w-11/12 h-1/2 bg-input_color outline-none mt-2 rounded-md focus:ring-2 ring-button_border pl-2"
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
          <div className=" mr-14">
            <p className="text-xs font-semibold font-sans">Take Away Price</p>
            <input
              placeholder=""
              type="text"
              className="w-11/12 h-1/2 bg-input_color outline-none mt-2 rounded-md focus:ring-2 ring-button_border pl-2"
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
          <div className="mr-14">
            <p className="text-xs font-semibold font-sans">
              Availability Count
            </p>
            <input
              placeholder=""
              type="text"
              className="w-11/12 h-1/2 bg-input_color outline-none mt-2 rounded-md focus:ring-2 ring-button_border pl-2"
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
          <div className=" h-2/3 w-full mt-1 flex flex-col">
            <p className="font-semibold mt-2 font-sans">Upload Image</p>
            <div className="h-full w-1/12 mt-1 bg-red-400"></div>
          </div>
          <div className=" h-1/3 w-full mt-1 flex justify-center items-center">
            <button className=" pl-4 pr-4 pt-3 pb-3  mt-1 add rounded-lg text-white font-semibold  font-sans">
              Update Menu
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default EditMenuForm;
